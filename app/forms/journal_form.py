from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Entry


class JournalForm(FlaskForm):
    journal_name = StringField('journal_name', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
