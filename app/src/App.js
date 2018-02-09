import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Route,
  Redirect} from 'react-router-dom'



export default class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path='/' render={(props) => (
          <Login {...props} auth={fakeAuth} />
        )}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
      </div>
    </Router>)
  }
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
