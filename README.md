# coding-concepts-assessment-2

> DO NOT REFER TO NOTES OR PAST CODING ASSIGNMENTS. You MAY use web resources like Google/Stackoverflow

The assessment consists of 2 parts: a coding challenge and then a code walkthough with the staff where we will ask questions about your code.

## Coding Challenge - Creating a Guestbook in React
You will create a guestbook applcation that will let you enter invitations and record their RSVP status.

- Create a react application called `guest-book-app`
- Create 4 components:
  - `AppContainer` The top-level component for your application
  - `GuestBookForm` Contains the form for entering invitations
  - `GuestBookList` Lists the guests that have *NOT* RSVPed
  - `GuestBookListRsvp` Lists the guests that have RSVPed
  
`AppContainer`
- Displays an `<h1>` heading of `Guest List Manager`
- As part of component state, have a `GuestBookList` array that contains guests that have *NOT* RSVPed
  - This array will be passed down to the child component `GuestBookList` to be rendered
- As part of component state, have a `GuestBookListRsvp` array that contains guests that *have* RSVPed
  - This array will be passed down to the child component `GuestBookListRsvp` to be rendered
- Has a callback method called `addGuest` that accepts 2 parameters (an object containing the guest's information and a boolean that specifies if the guest has RSVPed) and that will be passed down to the `GuestBookForm` child component
  - When the callback method is called, the component will update the appropriate array in component state
  
`GuestBookForm`
- Contains the form for entering guest information
  - `guestName` An input field for entering the name of the guest
  - `guestPhoneNumber` An input field for entering the phone number of the guest
  - `guestRsvpStatus` An input field for specifying if the guest has RSVPed (This should be a boolean value and you may use either a checkbox or a dropdown select list field)
  - A button for submisson of the data from the form

- When the form is submitted, use the callback method reference from the parent component to update the parent component's state
  - Pass the guest information to the callback as an object in the following format
  ```
  {
    guestName: 'whatever_the_name',
    guestPhoneNumber: 'whatever_the_phone_number'
  }
  ```
  - Pass a boolean value argument to callback method that specifies if the `guestRsvpStatus` is `true` or `false`
  
  `GuestBookList`
  - Should contain a basic header `Waiting for Response`
  - Should list each name and phone number in the `GuestBookList` array passed down from the parent component
  
  `GuestBookListRsvp`
  - Should contain a basic header `RSVPed`
  - Should list each name and phone number in the `GuestBookList` array passed down from the parent component
  
Layout
- You *must* use CSS grid for this layout
- In addition to displaying the application header (from `AppContainer`) your layout should include 3 columns
  - The form for entering guests
  - The list of guests who have not RSVPed
  - The list of guests who have RSVPed
  
Git
- Commit and push your changes no less than *once per hour*

----------------------------------------------------------------------------------------------------
Take some time at start to do some pre-thinking and design. At *minimum* you should have a basic wireframe drawn up (ADD A PICTURE OF DESIGN TO REPO)

If you need clarification of requirements *ASK EARLY*. Do not wait until right before it is due

Read errors *CAREFULLY* when solving issues as Code School staff cannot help with bugs in your code

Take your time. Code a little, test a little, and Good Luck!
