from .db import db
import datetime


entries_tags = db.Table(
    "entries_tags",
    db.Column("entry_id", db.Integer, db.ForeignKey("entries.id"), primary_key=True),
    db.Column("tag_id", db.Integer, db.ForeignKey("tags.id"), primary_key=True)
)


class Entry(db.Model):
    __tablename__ = 'entries'

    id = db.Column(db.Integer, primary_key=True)
    entry_title = db.Column(db.String(300), nullable=False, default="Untitled")
    content = db.Column(db.Text(), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    journal_id = db.Column(db.Integer, db.ForeignKey("journals.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)


    user = db.relationship("User", back_populates="entries")
    journal = db.relationship("Journal", back_populates="entries")
    tags = db.relationship(
        "Tag",
        secondary=entries_tags,
        back_populates="entries"
    )


    def to_dict(self):
        return {
            'id': self.id,
            'entry_title': self.entry_title,
            'content': self.content,
            'user': self.user.to_dict(),
            'journal': self.journal.to_dict(),
            'tags': [tag.to_dict() for tag in self.tags if entry],
            'created': self.created_at,
            'updated': self.updated_at
        }


    def to_simple_dict(self):
        return {
            'id': self.id,
            'entry_title': self.entry_title
        }
