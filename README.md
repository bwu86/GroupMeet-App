# GroupMeet

## Deployed App:

[GroupMeet](https://group-meet-436.herokuapp.com/)

## Functionality:

GroupMeet seeks to provide an easy, all-in-one platform for school group projects. In past group projects we worked on (including one project in a previous term where we all worked together), we noticed a big challenge was figuring out when all our busy schedules aligned so that we could plan group meetings. We also found it could be unclear who was responsible for specific tasks, and it wasn’t always easy to see how much progress we had made and how much was left to do when coordinating many tasks between multiple people. From these problems, GroupMeet was born. In GroupMeet, users can input their schedule and submit it to the group calendar so group members can see when everyone is available to meet and thus easily plan group meetings. We also included functionality to manage and assign tasks to group members so it is clear what is being done and who is doing it. Finally, we added individual and group progress bars so group members can clearly see their progress, as well as how much has been done and is left to do for the group as a whole.

## Contributions:

### [Claire](https://github.com/ciacono)
* Tasks page
* Overview page
* Help page
* About page
* Calendar redux state
* Redux
* CSS
### [Benjamin](https://github.com/bwu86)
* Routing and routing authorization
* User authentication
* Custom user profile
* Group management and logic for group accounts
* Redux
* CSS
### [Madeleine](https://github.com/madeleineleroux)
* Reactivity
* Database design
* CSS and design
* Meteor
* Avatars
* Individual and Group Calendar
* Redux
* Welcome Page

## Challenges:

### Meteor vs. React/Redux

We originally created our app with just React and Redux, but when we introduced Meteor, we realized the Redux state and the Meteor State were challenging each other.  Pages would flicker when they were loaded because Redux and Meteor would load at different speeds. We eventually fixed this issue by making our app wait to load until both states were fully initialized.

### CSS

CSS was a challenge because as we all worked on different components, we would come together after and then notice things looked different on our different computer screens. This resulted in some headaches, which we solved by switching our CSS styling to use percentages instead of pixels.

### Responsive design

We really wanted to make our app responsive, but since we were having so many issues with CSS that were mentioned above, we ultimately ran out of time to do so.

## Future Directions:

* Add Google calendar integration
* Make time intervals on calendar adjustable, down to 15 minutes
* Add notifications (email, SMS)
* Invite group members to join via link
* Make app responsive, mobile-friendly

## Description:

GroupMeet is a tool to make organizing group school work simple. The web app has a calendar to easily find times when group members’ schedules overlap in order to plan group meetings. Groups can add project tasks and manage them to clearly visualize project progress to completion. The app stores group members, tasks, and scheduling data. The schedule is stored as an array of one hour blocks with each member's availability. Additional functionality that could be added in the future would be Google Calendar integration and emailing.

## Task Requirements:
### Minimal requirements:
* Task checklist and progress
  * UI
  * Tasks with weight
  * Integrate individual tasks to a larger group project
  * Store progress on database
  * Deadlines for tasks (reminders, time to complete, etc.)
  * Goals for the week
* Assigning tasks to group members
  * UI
  * Storing group member data
  * Storing tasks
* Calendar
  * UI
  * Connecting schedules - coordinating & overlap
  * Storing schedule information
### Standard requirements:
* Interactive calendar
* Log in, and login pages
* Mobile version of application
### Stretch requirements:
* Email integration
* Add group schedule to google calendar / iCloud Calendar (auto-populate)
* Group messaging
* Time intervals as small as 15 minutes
## Mock-ups:
#### Overview:
![Overview page](/public/screenshots/overview_sketch.png)
#### Tasks:
![Tasks page](/public/screenshots/tasks_sketch.png)
#### Group calendar:
![Group calendar](/public/screenshots/calendar_sketch.png)
