from app.models import db, entries_tags



def seed_entries_tags():
    rel1 = entries_tag(
        entry_id=1,
        tag_id=1)

    rel2 = entries_tag(
        entry_id=1,
        tag_id=2)

    rel3 = entries_tag(
        entry_id=1,
        tag_id=3)

    rel4 = entries_tag(
        entry_id=2,
        tag_id=4)

    rel5 = entries_tag(
        entry_id=3,
        tag_id=5)

    rel6 = entries_tag(
        entry_id=4,
        tag_id=1)



    db.session.add(rel1)
    db.session.add(rel2)
    db.session.add(rel3)
    db.session.add(rel4)
    db.session.add(rel5)
    db.session.add(rel6)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_entries_tags():
    db.session.execute('TRUNCATE entries_tag RESTART IDENTITY CASCADE;')
    db.session.commit()
