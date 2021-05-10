import React, { Component } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

type AcceptedProps = {
    sessionToken: string | null;
};
type ProfileState = {
    title: string;
    picture: string;
    details: string;
    userId: number;
};

export default class ProfileCreate extends Component<AcceptedProps, ProfileState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            title: '',
            picture: '',
            details: '',
            userId: 0,
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
                        userId: this.state.userId,
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

    render() {
        return (
            <div>
                <div id='profileCreateDiv'>
                    <h2 id='profileHeading'>Add a Board</h2>
                    <FormControl style={{ backgroundColor: '#FFFFFF' }}>
                        <div className='picture'>
                            <TextField
                                label="Board Name"
                                variant="outlined"
                                type='text'
                                onChange={(e) => {
                                    this.setState({ title: e.target.value });
                                }}
                            />
                            <TextField
                                label="Upload Image"
                                variant='outlined'
                                type='text'
                                onChange={(e) => {
                                    this.setState({ picture: e.target.value });
                                }}
                            />
                        </div>
                        <TextField
                            id='outlined-textarea'
                            label='Details'
                            type='text'
                            multiline
                            variant='outlined'
                            onChange={(e) => {
                                this.setState({ details: e.target.value });
                            }}
                        />
                        <Link to='/profile/'>
                            <Button variant='outlined' onClick={(e) => { this.handleSubmit(e) }}>Add Board</Button>
                        </Link>
                    </FormControl>
                </div>
            </div>
        );
    }
}

