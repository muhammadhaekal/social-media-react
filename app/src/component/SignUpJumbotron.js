import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Input,
  Button,
  Tooltip
} from 'reactstrap';
import axios from 'axios';

export default class SignUpJumbotron extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      tooltipOpen: false
    }
    this.toggle = this.toggle.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this)
    this.isExist = this.isExist.bind(this)
  }

  handleChange(event) {
    var param = event.target.name
    var value = event.target.value

    this.setState({
      [param]: value
    })

    if (param === "email") {
      this.isExist(param, value)
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  toggleOff() {
    this.setState({
      tooltipOpen: false
    });
  }

  isExist(param, value) {
    const toggle = () => this.toggle()
    const toggleOff = () => this.toggleOff()
    axios.get(`http://localhost:3001/user/search?${param}=${value}`).then(function(response) {
      if (response.data.length === 0) {
        console.log('blom ada');
        toggleOff()
      } else {
        console.log('udah ada');
        toggle()
      }
    }).catch(error => {
      console.log(error.response)
    });
  }

  signUp(json) {

    if(this.state.tooltipOpen === false){
      var first_name = this.state.first_name
      var email = this.state.email
      var password = this.state.password

      axios.post('http://localhost:3001/user', {
        username: first_name,
        email: email,
        password: password
      }).then(function(response) {
        console.log('saved successfully')
      }).catch(error => {
        console.log(error.response)
      });
      this.setState({first_name: '', last_name: '', email: '', password: ''})
    }


  }

  render() {
    return (<div>
      <Jumbotron fluid={true}>
        <Container>
          <Row>
            <Col className="text-center">
              <img src="/assets/img/fb-connecting-world.jpg" alt=""/>
            </Col>
            <Col>
              <div className="text-center d-flex mb-1">
                <Input value={this.state.first_name} onChange={this.handleChange} className="mr-1" type="text" name="first_name" id="first_name" placeholder="First Name"/>
                <Input value={this.state.last_name} onChange={this.handleChange} type="text" name="last_name" id="last_name" placeholder="Last Name"/>
              </div>
              <div className="mb-1">
                <div>
                  <Input value={this.state.email} onChange={this.handleChange} type="text" name="email" id="email" id="TooltipExample" placeholder="Email Address"/>
                  <Tooltip className = "warning" placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" >
                    That email is taken. Try another.
                  </Tooltip>
                </div>
              </div>
              <div className="mb-1">
                <Input value={this.state.password} onChange={this.handleChange} ref="password" type="password" name="password" id="password" placeholder="Password"/>
              </div>
              <Button color="success" onClick={this.signUp}>Create Account</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>);
  }
};
