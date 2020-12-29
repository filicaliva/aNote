import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

type AuthSocialProps = {
  text: string
}

function AuthSocial({ text }: AuthSocialProps) {
  const firebase = useFirebase()
  const history = useHistory()

  const loginWithGoogle = () => {
    firebase.login({ provider: 'google', type: 'popup' })
      .then(() => {
        history.push({
          pathname: '/app'
        })
      })
  }

  const loginWithGithub = () => {
    firebase.login({ provider: 'github', type: 'popup' })
      .then(() => {
        history.push({
          pathname: '/app'
        })
      })
  }

  return (
    <div>
      <p className="text-center bold" >OR</p>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col">
            <button type="button" onClick={() => { loginWithGoogle() }} className="btn  btn-outline-primary btn-block text-uppercase">{text} with Google</button>
          </div>
          <div className="col">
            <button type="button" onClick={() => { loginWithGithub() }} className="btn btn-dark  btn-block text-uppercase">{text} with Github</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthSocial