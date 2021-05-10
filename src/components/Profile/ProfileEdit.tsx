import React, { Component } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ProfileDetails } from "../../Interfaces";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

type AcceptedProps = {
    sessionToken: string | null;
    profileId: number;
};

type ProfileDataState = {
    profileData: ProfileDetails[];
    results: ProfileDetails;
    profId: number;
    title: string;
    picture: string;
    details: string;
    // profile: any;
};

export class ProfileEdit extends Component<AcceptedProps, ProfileDataState>{
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            profId: 0,
            title: '',
            picture: '',
            details: '',
            // profile: {},
            profileData: [
                {
                    id: 0,
                    title: '',
                    picture: '',
                    details: '',
                },
            ],
            results: {
                id: 0,
                title: '',
                picture: '',
                details: '',
            },
        };
    }
    componentDidMount() {
        this.fetchProfile();
        console.log('ProfEdit Props', this.props);
    }
    fetchProfile = () => {
        if (this.props.sessionToken) {
            console.log('Before ProfileEdit Fetch');
            fetch(`http://localhost:3000/profile/mine`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: this.props.sessionToken,
                }),
            })
                .then((res) => res.json)
                .then((results) => {
                    this.setState({ profId: results.id });
                    this.setState({ title: results.title });
                    this.setState({ picture: results.picture });
                    this.setState({ details: results.details });
                    console.log('Record Id from Profile Edit: ', results.id);
                })
                .catch((err) => console.log(err));
        }
    };

    handleSubmit = (event: any) => {
        console.log('As ProfileEdit Update');
        if (this.props.sessionToken) {
            event.preventDefault();
            fetch(`http://localhost:3000/profile/update/${this.props.profileId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: this.state.title,
                    picture: this.state.picture,
                    details: this.state.details,
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: this.props.sessionToken,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));
        }
    };

    handleDelete = (id: number) => {
        if (this.props.sessionToken) {
            fetch(`http://localhost:3000/profile/delete/${this.props.profileId}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: this.props.sessionToken,
                }),
            })
                .then((res) => {
                    this.fetchProfile();
                })
                .catch((err) => alert(err));
        }
    };

    render() {
        return (
            <div>
                <div id='profileEditDiv'>
                    <h2 id='profileEditHeadin'>Edit Profile Entries</h2>
                    <FormControl style={{ backgroundColor: '#FFFFFF' }}>
                        <TextField
                            label="Edit Board Name"
                            variant="outlined"
                            type='text'
                            value={this.state.title}
                            onChange={(e) => {
                                this.setState({ title: e.target.value });
                            }}
                        />
                        <TextField
                            label="Edit Image"
                            variant='outlined'
                            type='text'
                            value={this.state.picture}
                            onChange={(e) => {
                                this.setState({ picture: e.target.value });
                            }}
                        />
                        <TextField
                            id='outlined-textarea'
                            label='Edit Details'
                            type='text'
                            multiline
                            variant='outlined'
                            onChange={(e) => {
                                this.setState({ details: e.target.value });
                            }}
                        />
                        <div
                            style={{ color: '#000000', display: 'flex', justifyContent: 'space-evenly', }}
                        >
                            <Button variant='outlined' onClick={(e) => { this.handleSubmit(e) }}>
                                <EditIcon />
                                <Link style={{ color: '#000000' }} to='/profile/mine'>
                                    Edit a Profile Entry
                            </Link>
                            </Button>
                            <Link to='/profile/mine'>
                                <Button 
                                    variant='outlined'
                                    color='primary'
                                    value={this.state.profId}
                                    onClick={(e) => {
                                        this.handleDelete(this.state.profId);
                                    }}
                                    >
                                        <DeleteIcon />
                                            Delete Profile
                                    </Button>
                            </Link>
                        </div>
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default ProfileEdit;