from .db import db
import datetime

class Journal(db.Model):
    __tablename__ = 'journals'

    id = db.Column(db.Integer, primary_key=True)
    journal_name = db.Column(db.String(300), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


    user = db.relationship("User", back_populates="journals")
    entries = db.relationship("Entry", back_populates="journals", cascade = 'all, delete , delete-orphan')


    def to_dict(self):
        return {
            'id': self.id,
            'journal_name': self.journal_name,
            'entries': [entry.to_dict() for entry in self.entries],
            'user': self.user.to_dict(),
            "created": self.created_at,
            "updated": self.updated_at
        }
