from app.models import db, entries_tags



def seed_entries_tags():

    rel1 = entries_tags.insert().values(entry_id=1, tag_id=1)

    rel2 = entries_tags.insert().values(entry_id=1, tag_id=2)

    rel3 = entries_tags.insert().values(entry_id=1, tag_id=3)

    rel4 = entries_tags.insert().values(entry_id=2, tag_id=4)

    rel5 = entries_tags.insert().values(entry_id=3, tag_id=5)

    rel6 = entries_tags.insert().values(entry_id=4, tag_id=1)

    db.session.execute(rel1)
    db.session.execute(rel2)
    db.session.execute(rel3)
    db.session.execute(rel4)
    db.session.execute(rel5)
    db.session.execute(rel6)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_entries_tags():
    db.session.execute('TRUNCATE entries_tags RESTART IDENTITY CASCADE;')
    db.session.commit()
