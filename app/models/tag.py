from .db import db
import datetime

class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    tag_name = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


    user = db.relationship("User", back_populates="tags")


    def to_dict(self):
        return {
            'id': self.id,
            'tag_name': self.tag_name,
            'user': self.user.to_simple_dict(),
            "created": self.created_at,
            "updated": self.updated_at
        }
