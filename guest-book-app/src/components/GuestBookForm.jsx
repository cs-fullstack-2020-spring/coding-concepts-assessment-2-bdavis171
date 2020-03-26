import React, { Component, Fragment } from 'react';


class GuestBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: '',
            guestPhone: '',
            rsvpStatus: false,
            rsvpList: [],
            noRsvpList: []
        }
    }

    // handle changes to fields
    handleChanges = (event) => {
        if (event.target.name === 'name') {
            this.setState({ guestName: event.target.value });
        } else if (event.target.name === 'phone') {
            this.setState({ guestPhone: event.target.value });
        } else if (event.target.name === 'rsvp') {
            if (event.target.checked) {
                this.setState({ rsvpStatus: true });
            } else {
                this.setState({ rsvpStatus: false });
            }
        }
    }

    // handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let guest = {
            guestName: this.state.guestName,
            guestPhone: this.state.guestPhone,
            rsvpStatus: this.state.rsvpStatus
        }

        // push the guest object into the appropriate list based on their rsvp status
        if (guest.rsvpStatus === true) {
            this.state.rsvpList.push(guest);
        } else {
            this.state.noRsvpList.push(guest);
        }

        this.setState({
            rsvpList: this.state.rsvpList,
            noRsvpList: this.state.noRsvpList
        })

        this.props.updateGuestList(this.state.noRsvpList);
        this.props.updateRsvpList(this.state.rsvpList);

        this.setState({
            guestName: '',
            guestPhone: ''
            
        })
    }

    // display form
    render() {
        return (
            <Fragment>
                <h2>Guest Book Form</h2>
                <form action="">
                    <fieldset>
                        <legend>Guest Form</legend>
                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" onChange={this.handleChanges} value={this.state.guestName}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" name="phone" id="phone" onChange={this.handleChanges} value={this.state.guestPhone}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="rsvp">RSVP</label>
                            <input type="checkbox" name="rsvp" id="rsvp" onChange={this.handleChanges} value={this.state.rsvpStatus}/>
                        </div>

                        <div className="formGroup">
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
        );
    }
}

export default GuestBookForm;