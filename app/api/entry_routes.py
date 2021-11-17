from flask import Blueprint, jsonify, request
from app.models import db, Entry
from app.forms import EntryForm

entry_routes = Blueprint('entries', __name__)


@entry_routes.route('/<int:user_id>')
def get_entries(user_id):
    entries = Entry.query.filter_by(user_id=user_id).order_by(Entry.id.desc())
    return {entry.id: entry.to_dict() for entry in entries}


@entry_routes.route('/', methods=["POST"])
def create_entry():
    form = EntryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        entry = Entry()
        form.populate_obj(entry)
        db.session.add(entry)
        db.session.commit()
        return entry.to_dict()
    return "error~!!!!!!!!!!!!!!!!!!!"
    # return {'errors': validation_errors_to_error_messages(form.errors)}
