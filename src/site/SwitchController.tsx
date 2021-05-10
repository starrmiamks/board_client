import React, { FC } from 'react';
import Auth from '../auth/Auth';
import { Switch, Route } from 'react-router-dom';
import { Admin } from '../components/admin/Admin';
// import ProfileCreate from "../components/Profile/ProfileCreate";


type ControllerProps = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    updateFirstName: (newFirstName: string) => void;
    protectedViews: () => void;
    clearUser: () => void;
    updateProfileId: (newProfileId: number) => void;
    sessionToken: any;
    firstName: string | null | undefined;
    userRole: string;
    profileId: number;
    subscriptionId: number;
    userId: number;
};

const SwitchController: FC<ControllerProps> = (props) => {
    console.log('switchController: ', props.sessionToken);

    return (
        <div className='ViewsDiv'>
            <div className='routes'>
            <Switch>
                <Route exact path='/home'></Route>
                <Route exact path='/auth'>
                    <Auth updateSessionToken={props.updateSessionToken} updateUserRole={props.updateUserRole}/>
                </Route>
                <Route exact path="/admin/home">
                    <Admin />
                </Route>
                {/* <Route exact path='/profile/add'>
                    <ProfileCreate sessionToken={props.sessionToken} />
                </Route> */}
            </Switch>
            </div>
        </div>
    )
}

export default SwitchController;