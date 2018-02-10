import React from 'react'
import DashNavBar from '../component/DashNavBar'
import {
  Col,
  Row,
  Container,
  ListGroup,
  ListGroupItem,
  Navbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import LeftNavList from '../component/LeftNavList'
import LeftNavListGroup from '../component/LeftNavListGroup'
import GroupAbout from '../component/GroupAbout'
import {Route} from 'react-router-dom'
import GroupDiscussion from '../component/GroupDiscussion'
import GroupMember from '../component/GroupMember'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (<div>
      <div className="">
        <DashNavBar/>
        <Container >
          <Row className="mt-5 pt-4 ">
            <Col sm="3">
              <div className="fixed-left-navbar">
                <div>
                  <ListGroup className="mb-2">
                    <ListGroupItem disabled={true}>
                      Group Name
                    </ListGroupItem>
                    <LeftNavListGroup to={`${this.props.match.url}/about`} name="About"></LeftNavListGroup>
                    <LeftNavListGroup to={`${this.props.match.url}/discussion`} name="Discussion"></LeftNavListGroup>
                    <LeftNavListGroup to={`${this.props.match.url}/member`} name="Member"></LeftNavListGroup>
                    <LeftNavListGroup to={`${this.props.match.url}/event`} name="Event"></LeftNavListGroup>
                    <LeftNavListGroup to={`${this.props.match.url}/photos`} name="Photos"></LeftNavListGroup>
                  </ListGroup>
                  <ListGroup className="mb-2">
                    <ListGroupItem disabled={true}>
                      Shortcuts
                    </ListGroupItem>
                    <LeftNavList image="/assets/img/groups-icon.png" name="Impact Byte" notifSum={14} to={`${this.props.match.url}/groups/impactbyte`}></LeftNavList>
                    <LeftNavList image="/assets/img/groups-icon.png" name="Bahamut" notifSum={3} to="/"></LeftNavList>
                    <LeftNavList image="/assets/img/groups-icon.png" name="Behemut" notifSum={2} to="/"></LeftNavList>
                  </ListGroup>
                </div>
              </div>

            </Col>
            <Col sm="9">
              <img className="group-cover-image" src="/assets/img/impactbyte.bahamut.jpg" alt=""/>
              <Navbar color="faded" light={true}>
                <ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret={true} color="primary" size="sm">
                    Joined
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Leave Group</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
      <Container >
        <Row >
          <Col sm="3"></Col>
          <Col sm="6" className="front">
          <Route path={`${this.props.match.url}/member`} component={GroupMember}/>
            <Route path={`${this.props.match.url}/discussion`} component={GroupDiscussion}/>
            <Route path={`${this.props.match.url}/about`} component={GroupAbout}/>

          </Col>
          <Col sm="3" className="sticky-top">
            <div className="sticky-top">
              <h1>Member & suggestion</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum
            </div>
          </Col>
        </Row>
      </Container>
    </div>)
  }
}
