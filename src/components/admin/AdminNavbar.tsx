import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Toolbar } from "@material-ui/core";

type ValueTypes = {};
type AcceptedProps = {
    clearUser: () => void; 
    firstName: string | null | undefined;
};

export class AdminNavbar extends Component<AcceptedProps, ValueTypes> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                <div>
                    <h3>AdminNavbar</h3>
                    <h3>Welcome {this.props.firstName}</h3>
                    <h5>What would you like to manage?</h5>
                </div>
            <Toolbar>
                <Button>
                    <Link to='/admin/home' >Admin Home</Link>
                </Button>
            </Toolbar>
            </div>
        )
    }
}

export default AdminNavbar;