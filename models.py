from sqlalchemy import Column, Integer, String
from database import Base

# Create a table in the databse for posts
class Posts(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String(55))
    content = Column(String(256))