import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Input} from 'reactstrap'

export default class DashNavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search_key: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

  }


  render() {
    return (
      <div>
        <Navbar className="loginNavbar fixed-top" color="faded" light expand="md">
          <Container>
            <NavbarBrand>
              <Input  value={this.state.search_key} onChange={this.handleChange} type="text" name="search_key" id="search_key" placeholder="Search" />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem  className="mr-2">
              </NavItem>
              <NavItem className="mr-2">
                Haekal
              </NavItem>
              <NavItem className="mr-2">
                Home
              </NavItem>
              <NavItem className="mr-2">
                FriendReq
              </NavItem>
              <NavItem>
                Messanger
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
