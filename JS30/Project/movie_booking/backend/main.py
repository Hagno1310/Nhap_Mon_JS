from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI()

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

# Example route cho trang login
@app.get("/login", response_class=HTMLResponse)
def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

# Example route cho trang register
@app.get("/register", response_class=HTMLResponse)
def register_page(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

# ADMIN routes
@app.get("/admin_movie", response_class=HTMLResponse)
def admin_page(request: Request):
    return templates.TemplateResponse("admin_movie.html", {"request": request})

# Example route cho trang home2
@app.get("/home2", response_class=HTMLResponse) 
def dashboard_page(request: Request):
    return templates.TemplateResponse("home2.html", {"request": request})

# Example route cho trang myticket
@app.get("/myticket", response_class=HTMLResponse)
def myticket(request: Request):
    return templates.TemplateResponse("myticket.html", {"request": request})