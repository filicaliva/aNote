import react from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'
import NewPassword from './NewPassword'
import {
    Switch,
    BrowserRouter as Router ,
    Route
} from "react-router-dom";


export default function Auth() {

    return (
        <>
        <Route path="/reset" exact >
            <PasswordReset />
        </Route>
        <Route path="/new-password" exact>
            <NewPassword />
        </Route>
        <Route path="/register" exact>
            <SignUp />
        </Route>
        <Route path="/" exact>
            <SignIn />
        </Route>
      </>

    )
}