from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
import email_validator


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')
    if len(email) > 255:
        raise ValidationError('Email must not exceed 255 characters.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('User Name is already in use.')
    if len(username) > 40:
        raise ValidationError('User Name must not exceed 40 characters.')


def name_check(form, field):
    # Checking if username is already in use
    first_name = field.data
    last_name = field.data
    if len(first_name) > 100:
        raise ValidationError('First Name must not exceed 100 characters.')
    if len(last_name) > 100:
        raise ValidationError('Last Name must not exceed 100 characters.')


class SignUpForm(FlaskForm):
    first_name = StringField(
        'first_name', validators=[DataRequired(), name_check])
    last_name = StringField('last_name', validators=[name_check])
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('password', validators=[DataRequired()])
