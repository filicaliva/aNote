import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { setName, setPassword, signInEmail } from './AuthSlicer'

function LoginPage() {
  const dispatch = useDispatch()
  const name = useSelector(state=>state.auth.email)
  const password = useSelector(state=>state.auth.password)
  // const firebase = useFirebase()
  // const history = useHistory();
  // const auth = useSelector(state => state.firebase.auth)

 

  return (
    <div>
      <div className="container w-50 mt-5 ">
        <h2>Login</h2>
        <h6>Welcome. Please login to your account.</h6>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" value={name} onChange={(e)=>dispatch(setName(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={password} onChange={(e)=>dispatch(setPassword(e.target.value))} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check d-flex justify-content-between">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Remember me </label>
            <Link to='reset' >Forgot password?</Link>
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>dispatch(signInEmail())} >Login</button>
        </form>
        <p className="text-center bold" >OR</p>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col">
              <button type="button" class="btn  btn-outline-primary btn-block text-uppercase">Login with Google</button>
            </div>
            <div className="col">
              <button type="button" class="btn btn-dark  btn-block text-uppercase">Login with Github</button>
            </div>
          </div>
        </div>

        <p className="mt-5" >Don't have an account? <Link to="/register" >Register here</Link></p>
      </div>
    </div>
  )
}

export default LoginPage