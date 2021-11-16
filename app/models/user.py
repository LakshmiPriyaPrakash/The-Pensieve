from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)


    entries = db.relationship("Entry", back_populates="user", cascade = 'all, delete')
    journals = db.relationship("Journal", back_populates="user", cascade = 'all, delete')
    tags = db.relationship("Tag", back_populates="user", cascade = 'all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'username': self.username,
            'email': self.email,
            'entries': [entry.to_simple_dict() for entry in self.entries if entry],
            'journals': [journal.to_simple_dict() for journal in self.journals if journal],
            'tags': [tag.to_simple_dict() for tag in self.tags if tag],

        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'username': self.username
        }
