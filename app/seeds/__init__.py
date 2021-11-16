from flask.cli import AppGroup
from .users import seed_users, undo_users
from .entries import seed_entries, undo_entries
from .journals import seed_journals, undo_journals
from .tags import seed_tags, undo_tags
from .entries_tags import seed_entries_tags, undo_entries_tags

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_entries()
    seed_journals()
    seed_tags()
    seed_entries_tags()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_entries()
    undo_journals()
    undo_tags()
    undo_entries_tags()
    # Add other undo functions here
