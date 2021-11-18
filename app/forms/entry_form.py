from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Entry


class EntryForm(FlaskForm):
    entry_title = StringField('entry_title', validators=[DataRequired()])
    content = TextAreaField('content')
    user_id = IntegerField('user_id', validators=[DataRequired()])
    journal_id = IntegerField('journal_id', validators=[DataRequired()])
