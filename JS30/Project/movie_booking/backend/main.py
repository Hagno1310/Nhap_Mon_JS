from fastapi import FastAPI, Request, Body
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import mysql.connector

app = FastAPI()

#Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="Hagno1310",
    password="123456",
    database="js"
)

# Mount static folders
app.mount("/style", StaticFiles(directory="frontend/style"), name="style")
app.mount("/javascript", StaticFiles(directory="frontend/javascript"), name="javascript")
app.mount("/images", StaticFiles(directory="frontend/images"), name="images")

# Configure template folder
templates = Jinja2Templates(directory="frontend/templates")

# Route để render một trang HTML
@app.get("/", response_class=HTMLResponse)
def read_home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

@app.get("/home", response_class=HTMLResponse)
def read_home(request: Request):
    return templates.TemplateResponse("home2.html", {"request": request})

# Example route cho trang login
@app.get("/login", response_class=HTMLResponse)
def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.get("/register", response_class=HTMLResponse)
def register_page(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.get("/api/account", response_class=JSONResponse)
def get_accounts():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM accounts")
        data = cursor.fetchall()
        return data
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.post('/api/account', response_class=JSONResponse)
def post_account(data: dict = Body(...)):
    try:
        cursor = db.cursor()
        query = """ 
            INSERT INTO accounts (email, password)
            VALUES (%s, %s)
        """

        values = (
            data["email"], data["password"]
        )

        cursor.execute(query, values)
        db.commit()
        return {"message": "Đã thêm thành công"}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.get("/admin_movie", response_class=HTMLResponse)
def admin_movie_page(request: Request):
    return templates.TemplateResponse("admin_movie.html", {"request": request})