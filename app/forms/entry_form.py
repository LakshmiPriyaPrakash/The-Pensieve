from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Entry


def name_check(form, field):
    entry_title = field.data
    if len(entry_title) > 300:
        raise ValidationError('Entry title must not exceed 300 characters.')


class EntryForm(FlaskForm):
    entry_title = StringField('entry_title', validators=[DataRequired(), name_check])
    content = TextAreaField('content')
    user_id = IntegerField('user_id', validators=[DataRequired()])
    journal_id = IntegerField('journal_id', validators=[DataRequired()])
