import react from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const auth = useSelector(state => state.firebase.auth)

    return (
        <div>
            <div className="container w-50 mt-5 ">
                <h2>Register</h2>
                <h6>Create your account. It's free and only takes a minute.</h6>
                <form>
                    <div className="form-group">
                        <label for="InputEmail1">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword1">Password</label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label for="InputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" id="InputPassword2" placeholder="Confirm Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <p className="text-center bold" >OR</p>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col">
                            <button type="button" class="btn  btn-outline-primary btn-block text-uppercase">Sign up with Google</button>
                        </div>
                        <div className="col">
                            <button type="button" class="btn btn-dark  btn-block text-uppercase">Sign up with Github</button>
                        </div>
                    </div>
                </div>


                <p className="mt-5" >Do have an account? <Link to="/" >Login here</Link></p>
            </div>
        </div>
    )
}