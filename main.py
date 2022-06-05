import json
from fastapi import FastAPI, Depends, Response
from schemas import Post
from models import Posts
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#This will create our database if it doesent already exists
Base.metadata.create_all(engine)
def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()

# Get all posts
@app.get("/posts")
def getAllPosts(session: Session = Depends(get_session)) -> dict:
    all_posts = session.query(Posts).all()
    return all_posts

# Create a new post
@app.post("/posts")
def addNewPost(item: Post, session: Session = Depends(get_session)):
    new_post = Posts(title = item.title, content = item.content)
    session.add(new_post)
    session.commit()
    session.refresh(new_post)
    return new_post

@app.get("/posts/{id}")
def getSinglePost(id: int, session: Session = Depends(get_session)):
    post = session.query(Posts).get(id)
    return post

@app.put("/posts/{id}")
def updatePost(id: int, item: Post, session: Session = Depends(get_session)):
    post_to_update = session.query(Posts).get(id)
    post_to_update.content = item.content
    session.commit()
    return post_to_update

@app.delete("/posts/{id}")
def deletePost(id: int, session: Session = Depends(get_session)):
    post_to_delete = session.query(Posts).get(id)
    session.delete(post_to_delete)
    session.commit()
    session.close()
    return 'Post was deleted'