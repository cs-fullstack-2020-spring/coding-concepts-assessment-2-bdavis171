import React, { Component, Fragment } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guestList: [],
            guestListRsvp:[],
            isGuestForm: false,
            isGuestList: false,
            isRsvpList: false
         }
    }

    // update the guest list
    updateGuestList = (newList) => {
        this.setState({guestList: newList});
    }

    // update the rsvp guest list
    updateRsvpList = (newList) => {
        this.setState({guestListRsvp: newList});
    }

    // function for if the form button is clicked
    formButton = (event) => {
        this.setState({
            isGuestForm: true,
            isGuestList: false,
            isRsvpList: false
        })
    }

      // function for if the list button is clicked
      listButton = (event) => {
        this.setState({
            isGuestForm: false,
            isGuestList: true,
            isRsvpList: false
        })
    }

      // function for if the rsvp button is clicked
      rsvpButton = (event) => {
        this.setState({
            isGuestForm: false,
            isGuestList: false,
            isRsvpList: true
        })
    }
    // display page
    render() {
        // if either button is clicked, display the respective component
        let guestDisplay;
        if (this.state.isGuestForm) {
            guestDisplay = <GuestBookForm updateGuestList={this.updateGuestList} updateRsvpList={this.updateRsvpList}/>;
        }
        else if (this.state.isGuestList) {
            guestDisplay = <GuestBookList guestList={this.state.guestList}/>;
        }
        else if (this.state.isRsvpList) {
            guestDisplay = <GuestBookListRsvp guestListRsvp={this.state.guestListRsvp}/>;
        }
        
        return ( 
            <Fragment>
                <h1>Guest Book App</h1>
                <GuestBookForm updateGuestList={this.updateGuestList} updateRsvpList={this.updateRsvpList}/>
                <GuestBookList guestList={this.state.guestList}/>
                <GuestBookListRsvp guestListRsvp={this.state.guestListRsvp}/>
            </Fragment>
         );
    }
}
 
export default AppContainer;