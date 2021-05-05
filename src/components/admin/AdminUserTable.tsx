import React, { Component } from 'react';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { UserDetails } from '../../Interfaces';

type AcceptedProps = {
    sessionToken: string | null;
    userId: number;
    updateUserId: (newUserId: number) => void;
};

type UserDateState = {
    userData: userDetails[];
    results: UserDetails;
};
const styles = {
    table: {
        minWidth: 700,
    },
};

export class AdminUserTable extends Component<AcceptedProps, UserDataState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            userData: [],
            results: {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                admin: 'false',
            },
        };
    }
    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        if (this.props.sessionToken) {
            console.log('Before Admin User Table Fetch');
            fetch(``)
        }
    }
}

