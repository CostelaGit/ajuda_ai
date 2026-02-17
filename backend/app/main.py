from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# IMPORTANTE → registre seus models
from .models import user  # exemplo
from .database import engine, Base
from .api.v1.endpoints import user
from app.db.session import engine, Base

app = FastAPI(title="Seu Projeto")

@app.get("/")
def root():
    return {"status": "API online"}

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

@app.get("/users")
def listar_users():
    return [{"id": 1, "nome": "Luiz"}]


# CORS (obrigatório para frontend separado)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # depois restrinja
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)