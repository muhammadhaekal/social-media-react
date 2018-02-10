import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Input,
  Button
} from 'reactstrap';
import {Redirect} from 'react-router-dom'
import axios from 'axios';

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick() {
    let email = this.state.email
    let password = this.state.password
    let auth = this.props.auth
    console.log(email,password);
    const update = () => this.forceUpdate()
    axios.get(`http://localhost:3001/user/${email}/${password}`).then(function(response) {
      if (response.data) {
        auth.authenticate()
      }
      update()
    }).catch(function(error) {
      console.log(error);
    });
  }

  handleKeyPress(event) {
    const handleClick = () => this.handleClick()
    if(event.key === 'Enter'){
     handleClick()
    }
  }



  render() {
    if (this.props.auth.isAuthenticated) {
      return (<Redirect to="/dashboard"/>)
    }

    return (<div>
      <Navbar className="loginNavbar" color="faded" light={true} expand="md">
        <Container>
          <NavbarBrand href="/">facebook-kwr</NavbarBrand>
          <Nav className="ml-auto" navbar={true}>
            <NavItem className="mr-2">
              <Input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email" placeholder="Email"/>
            </NavItem>
            <NavItem className="mr-1">
              <Input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="Password" onKeyPress={this.handleKeyPress}/>
            </NavItem>
            <NavItem>
              <Button onClick={this.handleClick} color="primary">login</Button>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>);
  }
}
