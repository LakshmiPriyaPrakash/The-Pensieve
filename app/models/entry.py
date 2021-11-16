from .db import db
import datetime

class Entry(db.Model):
    __tablename__ = 'entries'

    id = db.Column(db.Integer, primary_key=True)
    entry_title = db.Column(db.String(300), nullable=False, default="Untitled")
    content = db.Column(db.Text(), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    journal_id = db.Column(db.Integer, db.ForeignKey("journals.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


    user = db.relationship("User", back_populates="entries")
    journal = db.relationship("Journal", back_populates="entries")

    def to_dict(self):
        return {
            'id': self.id,
            'entry_title': self.entry_title,
            'content': self.content,
            'user': self.user.to_dict(),
            "journal": self.journal.to_dict(),
            "created": self.created_at,
            "updated": self.updated_at
        }
