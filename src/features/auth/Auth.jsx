import react from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'
import NewPassword from './NewPassword'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Auth() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/reset">
                    <PasswordReset />
                </Route>
                <Route path="/new-password">
                    <NewPassword />
                </Route>
                <Route path="/register">
                    <SignUp />
                </Route>
                <Route path="/">
                    <SignIn />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}