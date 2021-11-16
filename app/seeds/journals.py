from app.models import db, Journal



def seed_journals():
    journal1 = Journal(
        journal_name='Demo',
        user_id=1)

    journal2 = Journal(
        journal_name='Demo',
        user_id=1)

    journal3 = Journal(
        journal_name='Demo',
        user_id=1)



    db.session.add(journal1)
    db.session.add(journal2)
    db.session.add(journal3)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_journals():
    db.session.execute('TRUNCATE journals RESTART IDENTITY CASCADE;')
    db.session.commit()
