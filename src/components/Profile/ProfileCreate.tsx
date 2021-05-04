import React, { Component } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


type AcceptedProps = {
    sessionToken: string | null;
};
type ProfileState = {
    picture: string;
    title: string;
    details: string;
};

export default class ProfileCreate extends Component<AcceptedProps, ProfileState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            picture: '',
            title: '',
            details: '',
        };
    }

    handleSubmit = (event: any) => {
        if (this.props.sessionToken) {
            event.preventDefault();
            fetch
        }
    }
}