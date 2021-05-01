import React, { FC } from 'react';
import Auth from '../auth/Auth';
import { Switch, Route } from 'react-router-dom';
// import { Admin } from '../components/admin/Admin';

type ControllerProps = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
    updateFirstName: (newFirstName: string) => void;
    protectedViews: () => void;
    clearFirstName: () => void;
    sessionToken: any;
    firstName: string | null | undefined;
    userRole: string;
    userId: number;
};

const SwitchController: FC<ControllerProps> = (props) => {
    console.log('switchController: ', props.sessionToken);

    return (
        <div>
            <Switch>
                <Route exact path='/home'></Route>
                <Route exact path='/auth'>
                    <Auth updateSessionToken={props.updateSessionToken} updateUserRole={props.updateUserRole}/>
                </Route>
                <Route exact path="/admin/home">
                    {/* <Admin /> */}
                </Route>
            </Switch>
        </div>
    )
}

export default SwitchController;