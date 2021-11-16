from app.models import db, Entry



def seed_entries():
    entry1 = Entry(
        entry_title='Title 1',
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci leo, auctor in maximus eu, rutrum sed sapien. In hac habitasse platea dictumst. Proin quis feugiat leo. Suspendisse non pharetra augue, vitae ultrices sapien. Sed efficitur ipsum eu erat viverra sollicitudin. Curabitur faucibus consequat consectetur. Praesent porttitor metus felis, non feugiat justo viverra ac. Aenean vehicula dignissim convallis. Nulla et luctus magna. Aenean ut dignissim leo, vel condimentum sapien.',
        user_id=1,
        journal_id=1)

    entry2 = Entry(
        entry_title='Title 2',
        content='Phasellus eget dignissim turpis, consequat porta elit. Donec eget vehicula metus, nec placerat dolor. Ut laoreet blandit justo, nec fermentum tellus convallis at. Etiam mollis orci et nisl gravida imperdiet. Sed lectus ante, dictum consectetur est in, consequat elementum libero. Duis leo nulla, consectetur ac pulvinar sed, faucibus id mi. Duis sollicitudin feugiat nisl ac lacinia. Cras a ullamcorper eros. Sed in ligula non metus malesuada efficitur ut sed sem. Duis vel iaculis metus. Maecenas consectetur ipsum sem. Ut placerat orci vitae risus dictum pellentesque. Pellentesque nulla lectus, gravida id ante at, venenatis porta nisl. Nulla facilisi. Morbi vel sapien in risus sollicitudin porta. Donec sed venenatis urna. Aliquam scelerisque aliquam nisi id fringilla. Aenean eget nunc at augue dignissim aliquet. Aenean eget enim vel quam tristique condimentum ut eget leo. Maecenas et ante in ligula malesuada dictum sit amet in urna. Cras volutpat commodo egestas.',
        user_id=1,
        journal_id=1)

    entry3 = Entry(
        entry_title='Title 3',
        content='Sed quis quam tempus, eleifend dolor quis, sodales dolor. Aenean vulputate, dui in vehicula faucibus, lorem magna lobortis nulla, nec tristique magna quam at turpis. Duis a mi sit amet mauris pretium tempus. Morbi id tellus mattis, molestie est eget, blandit massa. Vivamus nec egestas magna, sit amet iaculis odio. Quisque aliquam pulvinar turpis tincidunt cursus. Phasellus vehicula enim ut nisl lobortis, sit amet finibus eros consequat.',
        user_id=1,
        journal_id=1)

    entry4 = Entry(
        entry_title='Title 4',
        content='Donec cursus tempus augue, eget euismod dui tempor et. Integer pharetra urna lorem, sed imperdiet mauris lacinia non. Sed tempor sapien vel vestibulum condimentum. Nam faucibus, nunc et pretium egestas, augue ipsum mattis lorem, elementum blandit lectus nisi congue ante. Ut mollis ut purus ac commodo. Vivamus sed risus eget elit interdum facilisis. Integer eget ornare justo.',
        user_id=1,
        journal_id=2)

    entry5 = Entry(
        entry_title='Title 5',
        content='Sed tristique risus urna, in pretium nulla luctus sit amet. Nulla justo sapien, finibus eu nulla id, accumsan tincidunt dolor. Aliquam in ligula suscipit, elementum arcu et, rhoncus tortor. Aliquam pretium odio et dui semper, vel rhoncus enim elementum. Praesent ac nibh id purus consequat scelerisque nec quis tellus. Proin sollicitudin fermentum rhoncus. Vivamus non arcu ullamcorper, faucibus nibh congue, pulvinar magna',
        user_id=1,
        journal_id=2)

    entry6 = Entry(
        entry_title='Title 6',
        content='Suspendisse potenti. Duis luctus velit risus, sit amet congue nunc convallis tempor. Phasellus ac pellentesque elit. In risus magna, luctus in purus ac, venenatis egestas justo. Mauris porta, sapien eget pretium pharetra, mauris ex efficitur velit, nec accumsan ipsum mauris vel eros. Pellentesque maximus volutpat ex et porttitor. Sed id turpis vitae orci aliquam congue. Etiam auctor, nibh eu pharetra facilisis, purus enim pellentesque ipsum, vel accumsan leo nibh non sapien.',
        user_id=1,
        journal_id=2)

    entry7 = Entry(
        entry_title='Title 7',
        content='Sed id justo ex. Mauris eget neque vel ipsum malesuada porttitor a et leo. Mauris ligula erat, dignissim vitae mattis sit amet, eleifend vitae ipsum. Nulla tempor at elit a semper. Curabitur venenatis ipsum arcu, suscipit tincidunt lectus volutpat sit amet. Pellentesque blandit tellus nec eros dictum, vel molestie ipsum accumsan. In in ornare metus, id pulvinar lectus. Pellentesque posuere ac orci vel imperdiet. Maecenas imperdiet vitae magna sit amet aliquet. Maecenas pulvinar elit fermentum mauris interdum, ut rutrum eros egestas. Morbi dignissim molestie suscipit. Pellentesque dapibus massa neque, eget luctus libero feugiat nec. Integer fringilla risus id dolor tempor, sit amet dictum neque bibendum. Mauris convallis leo id aliquam luctus.',
        user_id=1,
        journal_id=3)

    entry8 = Entry(
        entry_title='Title 8',
        content='Mauris tristique eros vestibulum, ultrices elit sit amet, porttitor nibh. Duis aliquet et ante sit amet venenatis. Etiam viverra orci et enim feugiat, at scelerisque dui efficitur. Aenean dictum diam purus, nec fringilla neque hendrerit in. Nunc faucibus tempor sapien, a posuere magna consectetur quis. Maecenas pharetra leo in tellus lobortis venenatis. Fusce non finibus dolor.',
        user_id=1,
        journal_id=3)

    entry9 = Entry(
        entry_title='Title 9',
        content='Duis aliquet tellus sapien, sit amet interdum justo semper in. Pellentesque vel urna sapien. Donec a lorem arcu. Cras et dui ac felis semper molestie. Donec ultrices eu sem sagittis rutrum. Curabitur id feugiat sapien. Curabitur dignissim ex sed mattis sagittis. Nunc lacinia ornare felis vitae fermentum. Vestibulum lacinia condimentum condimentum.',
        user_id=1,
        journal_id=3)

    entry10 = Entry(
        entry_title='Title 10',
        content='Ut pharetra purus a leo imperdiet sollicitudin. Nam consequat pellentesque tellus, id lacinia libero porta tincidunt. Mauris ut mattis mi. Phasellus mattis gravida leo. Curabitur vel lacinia neque. In aliquam commodo ornare. Cras eleifend eget lectus sit amet blandit. Etiam fringilla pellentesque arcu ac egestas. In rutrum enim ultricies ipsum volutpat, a commodo augue lobortis. Fusce dictum quam vel sem egestas, sed hendrerit magna consequat. Aliquam ullamcorper ante vel nisi aliquam, fringilla porta lectus dapibus. Donec nulla lacus, euismod a lacinia a, commodo eget nunc. Vestibulum turpis erat, faucibus sed hendrerit pellentesque, efficitur dictum erat.',
        user_id=1,
        journal_id=3)

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
