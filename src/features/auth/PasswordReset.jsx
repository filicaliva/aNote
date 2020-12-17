import react from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const auth = useSelector(state => state.firebase.auth)

    return (
        <div>
            <div className="container w-50 mt-5 ">
                <h2>Reset your password here</h2>
                <form>
                    <div className="form-group">
                        <label for="InputEmail1">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Reset password</button>
                </form>

                <p className="mt-5" >Return to <Link to="/" >sign in</Link></p>
            </div>
        </div>
    )
}