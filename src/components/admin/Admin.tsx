import React, { Component } from 'react';

type AdminProps = { };

export class Admin extends (Component)<AdminProps, {}> {
    constructor(props: AdminProps) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <div>
                    <div>
                        <div>
                            <h5>Admin user functionality:</h5>
                            <ul>
                                <li>See all users</li>
                                <li>Add, delete and edit a user</li>
                                <li>See all profile entries</li>
                                <li>Add, delete and edit a profile entry</li>
                                <li>See all subscriptions</li>
                                <li>Add, delete and edit a subscription</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {console.log('Admin Footer')}
            </div>
        );
    }
}

export default Admin;