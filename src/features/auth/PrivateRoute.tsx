import React, { useEffect } from 'react'
import {
  Route,
  Redirect,
  useHistory
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { RootState } from '../../app/store';

type PrivateProps = {
  children:any,
  rest?: any,
  path: string,
  exact?: boolean
}

export default function PrivateRoute({ children, ...rest }: PrivateProps) {
  const auth = useSelector((state: RootState) => state.firebase.auth)
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}