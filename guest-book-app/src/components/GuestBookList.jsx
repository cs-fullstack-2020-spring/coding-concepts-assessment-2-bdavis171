import React, { Component, Fragment } from 'react';


class GuestBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h2>Guest Book List</h2>
                {this.props.guestList.map(
                    (guest,index) => {
                        return (
                            <div key={index}>
                                <p>Name: {guest.guestName}</p>
                                <p>Phone: {guest.guestPhone}</p>
                                <br/>
                            </div>
                        )
                    }
                )}
            </Fragment>
         );
    }
}
 
export default GuestBookList;