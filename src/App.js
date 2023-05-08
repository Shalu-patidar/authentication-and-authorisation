import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import AddNew from './components/AddNew'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/addNew" component={AddNew} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
