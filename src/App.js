import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import AddNew from './components/AddNew'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/addNew" component={AddNew} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
