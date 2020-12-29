import react, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp() {
    const firebase = useFirebase()

    const history = useHistory()
    const [email, setEmail] = useState('')

    const passwReset = () => {
        firebase.resetPassword(email)
            .then(() => {
                history.push('/login')
            })
            .catch((error) => {
                return Promise.reject(error)
              });
    }

    return (
        <div>
            <div className="container w-50 mt-5 ">
                <h2>Reset your password here</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary" onChange={() => passwReset()} >Reset password</button>
                </form>

                <p className="mt-5" >Return to <Link to="/" >sign in</Link></p>
            </div>
        </div>
    )
}