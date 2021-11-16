from app.models import db, Entry



def seed_entries():
    entry1 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry2 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry3 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry4 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry5 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry6 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry7 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry8 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry9 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    entry10 = Entry(
        entry_title='Demo',
        content='demo@demo.com',
        user_id=1,
        journal_id=1)

    db.session.add(entry1)
    db.session.add(entry2)
    db.session.add(entry3)
    db.session.add(entry4)
    db.session.add(entry5)
    db.session.add(entry6)
    db.session.add(entry7)
    db.session.add(entry8)
    db.session.add(entry9)
    db.session.add(entry10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_entries():
    db.session.execute('TRUNCATE entries RESTART IDENTITY CASCADE;')
    db.session.commit()
