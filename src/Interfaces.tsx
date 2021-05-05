export interface UserData {
    user: UserDetails;
    sessionToken: string;
}

export interface UserDetails {
    id: number; 
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    admin: string;
}