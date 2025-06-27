from fastapi import FastAPI, Request, Body
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import mysql.connector

app = FastAPI()

# ==============Database Connection==================
db = mysql.connector.connect(
    host="localhost",
    user="Hagno1310",
    password="123456",
    database="js"
)

# ==============Static & Templates===================
app.mount("/style", StaticFiles(directory="frontend/style"), name="style")
app.mount("/images", StaticFiles(directory="frontend/images"), name="images")
templates = Jinja2Templates(directory="frontend/templates")

# ====================ROUTES=========================
@app.get("/", response_class=HTMLResponse)
def read_home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

@app.get("/home", response_class=HTMLResponse)
def read_home2(request: Request):
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

@app.get("/admin_theater", response_class=HTMLResponse)
def admin_movie_page(request: Request):
    return templates.TemplateResponse("admin_theater.html", {"request": request})

@app.get("/info", response_class=HTMLResponse)
def info_page(request: Request):
    return templates.TemplateResponse("info.html", {"request": request})

@app.get("/seat", response_class=HTMLResponse)
def seat_page(request: Request):
    return templates.TemplateResponse("seat.html", {"request": request})

@app.get("/detail", response_class=HTMLResponse)
def detail_page(request: Request):
    return templates.TemplateResponse("detail.html", {"request": request})

@app.get("/otp", response_class=HTMLResponse)
def otp_page(request: Request):
    return templates.TemplateResponse("otp.html", {"request": request})

@app.get("/success", response_class=HTMLResponse)
def success_page(request: Request):
    return templates.TemplateResponse("success.html", {"request": request})

@app.get("/ticket", response_class=HTMLResponse)
def ticket_page(request: Request):
    return templates.TemplateResponse("ticket.html", {"request": request})

@app.get("/myticket", response_class=HTMLResponse)
def myticket_page(request: Request):
    return templates.TemplateResponse("myticket.html", {"request": request})
# ==================--==API=========================
@app.get("/api/account", response_class=JSONResponse)
def get_accounts():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM accounts")
        data = cursor.fetchall()
        cursor.close()
        return data
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.post("/api/account", response_class=JSONResponse)
def post_account(data: dict = Body(...)):
    try:
        cursor = db.cursor()
        query = """
            INSERT INTO accounts (email, password)
            VALUES (%s, %s)
        """
        values = (data["email"], data["password"])
        cursor.execute(query, values)
        db.commit()
        cursor.close()
        return {"message": "Đã thêm thành công"}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.get("/api/movies", response_class=JSONResponse)
def get_movies(request: Request):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM movies")
        data = cursor.fetchall()
        cursor.close()
        return data
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.post("/api/movies", response_class=JSONResponse)
def post_movie(data: dict = Body(...)):
    try:
        cursor = db.cursor()
        query = """
            INSERT INTO movies (title, description, duration_minutes, genre, image_url)
            VALUES (%s, %s, %s, %s, %s)
        """
        values = (data["title"], data["description"], data["duration_minutes"], data["genre"], data["image_url"])
        cursor.execute(query, values)
        db.commit()
        cursor.close()
        return {"message": "Đã thêm thành công"}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.get("/api/movies/{movie_id}", response_class=JSONResponse)
def get_movie(movie_id: int, request: Request):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM movies WHERE movie_id = %s", (movie_id,))
        data = cursor.fetchone()
        cursor.close()
        if data:
            return data
        else:
            return JSONResponse({"error": "Movie not found"}, status_code=404)
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.delete("/api/movies/{movie_id}", response_class=JSONResponse)
def delete_movie(movie_id: int):
    try:
        cursor = db.cursor()
        cursor.execute("DELETE FROM movies WHERE movie_id = %s", (movie_id,))
        db.commit()
        cursor.close()
        return {"message": "Movie deleted successfully"}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@app.get("/api/theaters", response_class=JSONResponse)
def get_theaters(request: Request):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM theaters")
        data = cursor.fetchall()
        db.commit()
        cursor.close()
        return data
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)
    
@app.get("/api/showtimes", response_class=JSONResponse)
def get_showtimes(request: Request):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM showtimes")
        data = cursor.fetchall()
        db.commit()
        cursor.close()
        return data
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)
    
@app.get("/api/tickets", response_class=JSONResponse)
def get_tickets(request: Request):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM ticket")
        data = cursor.fetchall()
        db.commit()
        cursor.close()
        return data
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)
    
@app.get("/api/tickets/{email}", response_class=JSONResponse)
def get_tickets(email: str):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM ticket WHERE email = %s", (email,))
        tickets = cursor.fetchall()
        cursor.close()
        if not tickets:
            return JSONResponse({"message": "No tickets found for this email"}, status_code=200)
        return tickets
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)
    
@app.post("/api/tickets", response_class=JSONResponse)
def post_ticket(data: dict = Body(...)):
    try:
        cursor = db.cursor()
        query = """
            INSERT INTO ticket (date, movie_title, ticket_seats, hours, email)
            VALUES (%s, %s, %s, %s, %s)
        """
        values = (data["date"], data["movie_title"], data["ticket_seats"], data["hours"], data["email"])
        cursor.execute(query, values)
        db.commit()
        cursor.close()
        return {"message": "Ticket booked successfully"}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)
    