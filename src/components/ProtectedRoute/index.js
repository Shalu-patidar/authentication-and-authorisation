import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route path={rest.path} exact={rest.exact} component={Component} />
}

export default ProtectedRoute
