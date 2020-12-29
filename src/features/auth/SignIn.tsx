import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AuthSocial from './AuthSocial'
import { useFirebase } from 'react-redux-firebase'
import Error from './Error'

function LoginPage() {
  const firebase = useFirebase()

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)

  const [validation, setValidation] = useState({
    show: false,
    text: ""
  })


  const login = () => {
     firebase.login({
      email,
      password
    })
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


  return (
    <div>
      <div className="container w-50 mt-4 ">
        <h2>Login</h2>
        <h6>Welcome. Please login to your account.</h6>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group form-check d-flex justify-content-between">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={checked} onClick={()=>{setChecked(!checked)}} />
            <label className="form-check-label" htmlFor="exampleCheck1"  >Remember me </label>
            <Link to='reset' >Forgot password?</Link>
          </div>

          <Error validation={validation} />
          <button type="button" className="btn btn-primary" onClick={() => login()} >Login</button>
        </form>
        <AuthSocial text='Sign in' />

        <p className="mt-5" >Don't have an account? <Link to="/register" >Register here</Link></p>
      </div>
    </div>
  )
}

export default LoginPage