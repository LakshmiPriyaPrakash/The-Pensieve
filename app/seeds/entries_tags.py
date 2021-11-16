from app.models import db, entries_tag



def seed_entries_tag():
    rel1 = entries_tag(
        entry_id='Demo',
        tag_id=1)

    rel2 = entries_tag(
        entry_id='Demo',
        tag_id=1)

    rel3 = entries_tag(
        entry_id='Demo',
        tag_id=1)



    db.session.add(rel1)
    db.session.add(rel2)
    db.session.add(rel3)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_entries_tag():
    db.session.execute('TRUNCATE entries_tag RESTART IDENTITY CASCADE;')
    db.session.commit()
