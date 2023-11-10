# 制作一个简单的 `get` API

```python
from fastapi import APIRouter, Depends, Query
from lib.dependencies.db import engine
from sqlalchemy.engine import Engine
from sqlmodel import Session, select
from lib.models.user import User
from fastapi.encoders import jsonable_encoder
from typing import Optional

router = APIRouter()

@router.get("/")
async def get_user(
    username: Optional[str] = Query(default = None),
    db_engine: Engine = Depends(engine)
    ):
    with Session(db_engine) as session:
        stmt = select(User).order_by(User.id)
        if username is not None:
            stmt =  stmt.where(User.name == username)
        users = session.exec(stmt).all()
        return jsonable_encoder(users)

@router.get("/{user_id}")
async def get_user(
    user_id: int,
    db_engine: Engine = Depends(engine)
    ):
    with Session(db_engine) as session:
        users = session.get(User, user_id)
        return jsonable_encoder(users)
```
