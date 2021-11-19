from flask import Blueprint, jsonify, request
from app.models import db, Entry
from app.forms import EntryForm

entry_routes = Blueprint('entries', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


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
    # return "error~!!!!!!!!!!!!!!!!!!!"
    return {'errors': validation_errors_to_error_messages(form.errors)}


@entry_routes.route('/<int:id>', methods=["PUT"])
def update_entry(id):
    entry = Entry.query.get(id)
    form = EntryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(entry)
        db.session.commit()
        entry = Entry.query.get(id)
        return entry.to_dict()
    # return "error~!!!!!!!!!!!!!!!!!!!"
    return {'errors': validation_errors_to_error_messages(form.errors)}


@entry_routes.route("/<int:id>", methods=["DELETE"])
def delete_entry(id):
    entry = Entry.query.get(id)
    db.session.delete(entry)
    db.session.commit()
    return {"id": id}
