import React, { Component, Fragment } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestList: [],
            guestListRsvp: [],

        }
    }

    // update the guest list
    updateGuestList = (newList) => {
        this.setState({ guestList: newList });
    }

    // update the rsvp guest list
    updateRsvpList = (newList) => {
        this.setState({ guestListRsvp: newList });
    }


    // display page
    render() {


        return (
            <Fragment>
                <div className="container">
                    <h1 id='header'>Guest Book App</h1>
                    <div id="form">
                        <GuestBookForm updateGuestList={this.updateGuestList} updateRsvpList={this.updateRsvpList} />
                    </div>
                    <div id="list">
                        <GuestBookList guestList={this.state.guestList} />
                    </div>
                    <div id="rsvp-list">
                        <GuestBookListRsvp guestListRsvp={this.state.guestListRsvp} />
                    </div>
                    <h3 id="footer">Design By Brandon Davis</h3>
                </div>
            </Fragment>
        );
    }
}

export default AppContainer;