import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, path}) => {
  const token = localStorage.getItem('jwtToken')

  return (
    <Route
      path={path}
      render={({location}) =>
        token ? (
          <Component />
        ) : (
          <Redirect to={{pathname: '/login', state: {from: location}}} />
        )
      }
    />
  )
}

export default PrivateRoute
