from fastapi import FastAPI
from fastapi.responses import HTMLResponse

from static import index

from service.UserService import UserService

app = FastAPI()


@app.get("/", response_class=HTMLResponse)
def read_root():
    return index.getHtml()


# @app.get("/api/users")
# def readFirstUser():
#     return {True}
#     return UserService.getUser()
#


@app.get("/api/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return UserService.getUser()
    # return {"item_id": item_id, "q": q}