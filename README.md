Pensieve is an online journal where you can note down your experiences, ideas, dreams, and memories. Accessible from anywhere in the world, Pensieve serves as your personal time capsule whose entries you can look back on years into the future.  

**Documentation:** https://github.com/LakshmiPriyaPrakash/The-Pensieve/wiki 

**Live site link:** https://the-pensieve.herokuapp.com/


### Splash Page:

![](https://res.cloudinary.com/lpriya/image/upload/v1638274514/Pensieve/splash-page_l6wzde.jpg)

### Sign up page:

![](https://res.cloudinary.com/lpriya/image/upload/v1638274511/Pensieve/sign-up_z9qxrm.jpg)

### Dashboard and Side Navigation Bar:

![](https://res.cloudinary.com/lpriya/image/upload/v1638274506/Pensieve/dashboard_nac3ny.jpg)

### Features
* Sign up page for new users 
* Log in with credentials for existing users
* Full access to site functionality for demo user
* Logged in users can read, write, edit, and delete entries
* Logged in users can read, write, edit, and delete journals

### Database Schema

![Pensieve Database schema](https://res.cloudinary.com/lpriya/image/upload/v1638274984/Pensieve/Pensieve-db1_f6js9r.png)

### Front End Routes
* /:username/entries
  * Displays the logged in user's entries
* /entries/:entryId
  * Displays the details of an entry
* /entry/new
  * Displays form to create a new entry
* /edit/entry/:entryId
  * Displays form to create a edit an entry
* /:username/journals
  * Displays the logged in user's journals
* /journals/:journalId
  * Displays the details of a journal
* /journal/new
  * Displays form to create a new journal
* /edit/journal/:journalId
  * Displays form to create a edit a journal

### Backend Routes
* Entries
  * GET api/entries/:user_id
  * POST api/entries
  * PUT api/entries/:id
  * DELETE api/entries/:id

* Journals
  * GET api/journals/:user_id
  * POST api/journals
  * PUT api/journals/:id
  * DELETE api/journals/:id


### React Components
* SplashPage
  * displays informations about the site
* TopNavBar
  * shows links for home, log in, sign up, and demo user 
* LoginForm
  * displays a form to log in a user to their account on the app
* SignupForm
  * displays a form the guest can use to sign up as a user of the app
* Dashboard
  * shows the recent user entries, recent user journals, and the side navigation bar
* Entries
  * displays all entries of the logged in user
  * displays the entry details
  * displays the form for creating an entry
  * displays the form for editing an entry
* Journals
  * displays all journals of the logged in user
  * displays the journal details
  * displays the form for creating a journal
  * displays the form for editing a journal
* SideNavBar
  * displays links to creating an entry, creating a journal, home, entries, and journals.
  * displays the search bar and the logout button.
  * displays the creator's name and links to their Github and LinkedIn profiles.
* Search
  * displays the results of the search term.

### Redux
* session: { logged in user data }
* entries: { all entries of the logged in user}
* journals: {all journals of the logged in user }


### Future Plans
Implement:
* Tags for entries
* Rich text formatting
* Auto save
