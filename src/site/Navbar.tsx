import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Toolbar } from '@material-ui/core';

type AcceptedProps = {
    clearUser: () => void;
    sessionToken: string | null;
    firstName: string | null | undefined;
};

export class Navbar extends Component<AcceptedProps, {}> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {};
        console.log(props);
    }
    render() {
        return (
            <div>
                <h3>User Navbar</h3>
                <h3>Welcome {this.props.firstName}</h3>
                <Toolbar>
                    <Button>
                        <Link to="/profile/">{''} Profile</Link>
                    </Button>
                    <Button onClick={this.props.clearUser}>
                        <Link to='/user/register'>Logout</Link>
                    </Button>
                </Toolbar>
            </div>
        )
    }
}

export default Navbar;