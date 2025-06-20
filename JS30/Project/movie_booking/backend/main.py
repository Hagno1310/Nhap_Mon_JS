from fastapi import FastAPI, Request, Body
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import mysql.connector

app = FastAPI()

# Kết nối tới MySQL
db = mysql.connector.connect(
    host="localhost",
    user="Hagno1310",
    password="123456",
    database="js"
)

# Mount static files
app.mount("/style", StaticFiles(directory="frontend/style"), name="style")
app.mount("/javascript", StaticFiles(directory="frontend/javascript"), name="javascript")
app.mount("/images", StaticFiles(directory="frontend/images"), name="images")

# Templates (HTML)
templates = Jinja2Templates(directory="frontend/templates")

# ------------------ ROUTES ------------------

@app.get("/", response_class=HTMLResponse)
def home_page(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

@app.get("/home", response_class=HTMLResponse)
def user_home(request: Request):
    return templates.TemplateResponse("home2.html", {"request": request})

@app.get("/login", response_class=HTMLResponse)
def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.get("/register", response_class=HTMLResponse)
def register_page(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.get("/admin_movie", response_class=HTMLResponse)
def admin_movie_page(request: Request):
    return templates.TemplateResponse("admin_movie.html", {"request": request})

@app.get("/info", response_class=HTMLResponse)
def info_page(request: Request):
    return templates.TemplateResponse("info.html", {"request": request})

@app.get("/detail", response_class=HTMLResponse)
def detail_page(request: Request):
    return templates.TemplateResponse("detail.html", {"request": request})


# ------------------ API: ACCOUNT ------------------

@app.get("/api/account", response_class=JSONResponse)
def get_accounts():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM accounts")
        data = cursor.fetchall()
        cursor.close()
        return data
    except Exception as e:
        print("❌ Lỗi /api/account GET:", e)
        return JSONResponse({"error": str(e)}, status_code=500)

@app.post("/api/account", response_class=JSONResponse)
def post_account(data: dict = Body(...)):
    try:
        cursor = db.cursor()
        query = "INSERT INTO accounts (email, password) VALUES (%s, %s)"
        values = (data["email"], data["password"])
        cursor.execute(query, values)
        db.commit()
        cursor.close()
        return {"message": "Đã thêm thành công"}
    except Exception as e:
        print("❌ Lỗi /api/account POST:", e)
        return JSONResponse({"error": str(e)}, status_code=500)

# ------------------ API: MOVIES ------------------

@app.get("/api/movies", response_class=JSONResponse)
def get_movies():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM movies")
        data = cursor.fetchall()
        cursor.close()
        return data
    except Exception as e:
        print("❌ Lỗi /api/movies:", e)
        return JSONResponse({"error": str(e)}, status_code=500)

# ------------------ API: THEATERS ------------------

@app.get("/api/theaters", response_class=JSONResponse)
def get_theaters():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM theaters")
        data = cursor.fetchall()
        cursor.close()
        return data
    except Exception as e:
        print("❌ Lỗi /api/theaters:", e)
        return JSONResponse({"error": str(e)}, status_code=500)
