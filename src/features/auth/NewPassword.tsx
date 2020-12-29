import react, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../app/store';


export default function SignUp() {
    const auth = useSelector((state: RootState) => state.firebase.auth)


    const firebase = useFirebase()
    const history = useHistory()

    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [validation, setValidation] = useState('d-none')

    const newPass = () => {
        firebase.confirmPasswordReset(code, password)
            .then(() => {
                history.push('/')
            })
            .catch((error) => {
                return Promise.reject(error)
            });

    }

    const confirmPassword = (e: any) => {
        e.preventDefault()
        if (password === passwordConfirm && password !== '') {
            newPass()
        } else {
            setValidation('d-block')
        }
    }

    return (
        <div>
            <div className="container w-50 mt-5 ">
                <h2>Create new password</h2>
                <h6>Your new password must be different <br /> from previous password</h6>
                <form>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Code</label>
                        <input type="text" className="form-control" onChange={(e) => setCode(e.target.value)} id="InputCode" placeholder="Code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="InputPassword1" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPasswordConfirm(e.target.value)} id="InputPassword2" placeholder="Confirm Password" />
                    </div>

                    <div className={"text-white bg-danger p-1 rounded mb-2 " + validation} >
                        Please provide a correct code.
                    </div>

                    <button type="submit" onClick={(e) => confirmPassword(e)} className="btn btn-primary">Reset Password</button>
                </form>
            </div>
        </div>
    )
}