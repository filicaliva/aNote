import react, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Link, useHistory } from 'react-router-dom'
import AuthSocial from './AuthSocial'
import Error from './Error'

interface ValidationProps {
    show: boolean,
    text: string
}

export default function SignUp() {

    const firebase = useFirebase()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [validation, setValidation] = useState<ValidationProps>({
        show: false,
        text: "Please provide a correct password."
    })

    const register = () => {
        firebase.createUser(
            { email, password },
            { username: email, email }
        )
            .then(() => {
                history.push('/app')
            })
            .catch((error) => {
                setValidation({
                    show: true,
                    text: error.message
                })

            
            });

    }

    const confirmPassword = () => {
        if (password === passwordConfirm && password !== '') {
            register()
        } else {
            setValidation({
                text: "Please provide a correct password.",
                show: true
            })
        }
    }
    return (
        <div>
            <div className="container w-50 mt-4 ">
                <h2>Register</h2>
                <h6>Create your account. It's free and only takes a minute.</h6>
                <form>
                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="InputPassword1" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPasswordConfirm(e.target.value)} id="InputPassword2" placeholder="Confirm Password" />
                    </div>
                    <Error validation={validation} />

                    <button type="button" className="btn btn-primary" onClick={() => confirmPassword()}>Register</button>
                </form>
                <AuthSocial text='Sign up' />


                <p className="mt-5" >Do have an account? <Link to="/" >Login here</Link></p>
            </div>
        </div>
    )
}