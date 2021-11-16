from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='User',
        username='demo',
        email='demo@demo.com',
        hashed_password='pbkdf2:sha256:260000$JNeVPb7u9GTfHoOI$bf57066dae3a04341f4bbcb7fc6ec0b6ca7d36c3b6a3ce853495f9058cee6997')

    bubba = User(
        first_name='Bubba',
        last_name='Tiel',
        username='bubba',
        email='bubba@tiel.com',
        hashed_password='pbkdf2:sha256:260000$JNeVPb7u9GTfHoOI$bf57066dae3a04341f4bbcb7fc6ec0b6ca7d36c3b6a3ce853495f9058cee6997')

    simba = User(
        first_name='Simba',
        last_name='Tiel',
        username='simba',
        email='simba@simba.com',
        hashed_password='pbkdf2:sha256:260000$JNeVPb7u9GTfHoOI$bf57066dae3a04341f4bbcb7fc6ec0b6ca7d36c3b6a3ce853495f9058cee6997')

    db.session.add(demo)
    db.session.add(bubba)
    db.session.add(simba)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
