from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Entry


def name_check(form, field):
    journal_name = field.data
    if len(journal_name) > 300:
        raise ValidationError('Journal name must not exceed 300 characters.')


class JournalForm(FlaskForm):
    journal_name = StringField('journal_name', validators=[DataRequired(), name_check])
    user_id = IntegerField('user_id', validators=[DataRequired()])
