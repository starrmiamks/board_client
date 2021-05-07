import React, { Component } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';


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
            console.log('Before ProfileCreate Fetch');
            event.preventDefault();
            fetch('http://localhost:3000/profile/add', {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        picture: this.state.picture,
                        title: this.state.title,
                        details: this.state.details,
                    },
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: this.props.sessionToken
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));
        }
    };
    handleChangePicture = (event: any) => {
        this.setState({ picture: event.target.value });
    };
    handleChangeTitle = (event: any) => {
        this.setState({ title: event.target.value });
    };
    handleChangeDetails = (event: any) => {
        this.setState({ details: event.target.value});
    };

    render() {
        return (
            <div>
                <div id='profileCreateDiv'>
                    <h2 id='profileHeading'>Add a Picture</h2>
                    <FormControl

                </div>
        )
    }
}