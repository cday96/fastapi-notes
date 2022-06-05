from pydantic import BaseModel

# Create a Post schema that extends the pydantic BaseModel
class Post(BaseModel):
    title: str
    content: str