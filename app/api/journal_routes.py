from flask import Blueprint, jsonify, request
from app.models import db, Journal
from app.forms import JournalForm

journal_routes = Blueprint('journals', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@journal_routes.route('/<int:user_id>')
def get_journals(user_id):
    journals = Journal.query.filter_by(user_id=user_id).order_by(Journal.id.desc())
    return {journal.id: journal.to_dict() for journal in journals}


@journal_routes.route('/<int:user_id>/default')
def get_default_journal(user_id):
    journals = Journal.query.filter_by(user_id=user_id).order_by(Journal.created_at)
    default_journal = journals.first()
    return {default_journal.id: default_journal.to_dict()}


@journal_routes.route('/', methods=["POST"])
def create_journal():
    form = JournalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        journal = Journal()
        form.populate_obj(journal)
        db.session.add(journal)
        db.session.commit()
        return journal.to_dict()
    # return "error~!!!!!!!!!!!!!!!!!!!"
    return {'errors': validation_errors_to_error_messages(form.errors)}


@journal_routes.route('/<int:id>', methods=["PUT"])
def update_journal(id):
    journal = Journal.query.get(id)
    form = JournalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(journal)
        db.session.commit()
        journal = Journal.query.get(id)
        return journal.to_dict()
    # return "error~!!!!!!!!!!!!!!!!!!!"
    return {'errors': validation_errors_to_error_messages(form.errors)}


@journal_routes.route("/<int:id>", methods=["DELETE"])
def delete_journal(id):
    journal = Journal.query.get(id)
    db.session.delete(journal)
    db.session.commit()
    return {"id": id}
