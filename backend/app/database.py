from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base, Session

DATABASE_URL = "sqlite:///./app.db"
# Para começar, SQLite evita 90% dos problemas iniciais.

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # necessário para SQLite
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()