import react from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const auth = useSelector(state => state.firebase.auth)

    return (
        <div>
            <div className="container w-50 mt-5 ">
                <h2>Create new password</h2>
                <h6>Your new password must be different <br/> from previous password</h6>
                <form>
                    <div className="form-group">
                        <label for="InputPassword1">Password</label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label for="InputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" id="InputPassword2" placeholder="Confirm Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Reset Password</button>
                </form>
            </div>
        </div>
    )
}