import React from 'react'
import DashNavBar from '../component/DashNavBar'
import InputStatus from '../component/InputStatus'
import {Col, Row, Container, ListGroup, ListGroupItem} from 'reactstrap'
import LeftNavList from '../component/LeftNavList'
import TimelinePost from '../component/TimelinePost'

export default class App extends React.Component {

  render() {
    return (<div>
      <div >
        <DashNavBar/>
        <Container>
          <Row className="mt-5 pt-4">
            <Col sm="3">
              <div className="fixed-left-navbar">
                <ListGroup className="mb-2">
                  <ListGroupItem disabled={true}>
                    Muhammad Haekal
                  </ListGroupItem>
                  <LeftNavList image="/assets/img/messenger-blue-icon.png" name="Messanger" notifSum={14} to={`${this.props.match.url}/groups/impact-byte`}></LeftNavList>
                  <LeftNavList image="/assets/img/newsfeed-icon.png" name="News Feed" notifSum={14} to="/{this.props.match}/"></LeftNavList>
                </ListGroup>
                <ListGroup className="mb-2">
                  <ListGroupItem disabled={true}>
                    Shortcuts
                  </ListGroupItem>
                  <LeftNavList image="/assets/img/groups-icon.png" name="Impact Byte" notifSum={14} to={`${this.props.match.url}/groups/impactbyte/discussion`}></LeftNavList>
                  <LeftNavList image="/assets/img/groups-icon.png" name="Bahamut" notifSum={3} to="/"></LeftNavList>
                  <LeftNavList image="/assets/img/groups-icon.png" name="Behemut" notifSum={2} to="/"></LeftNavList>
                </ListGroup>
                <ListGroup>
                  <ListGroupItem disabled={true}>
                    Explore
                  </ListGroupItem>
                  <LeftNavList image="/assets/img/events-icon.png" name="events" notifSum={2} to="/"></LeftNavList>
                </ListGroup>
              </div>
            </Col>
            <Col sm="6">
              <InputStatus/>
              <TimelinePost/>
              <TimelinePost/>
              <TimelinePost/>
              <TimelinePost/>
              <TimelinePost/>
              <TimelinePost/>
              <TimelinePost/>
              <TimelinePost/>
              <TimelinePost/>
            </Col>
            <Col sm="3">
              <div className="fixed-left-navbar">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum non dolore, fugiat eligendi tempora odit, vero obcaecati expedita quam, saepe nesciunt blanditiis ratione id sunt iste at. Accusamus, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum non dolore, fugiat eligendi tempora odit, vero obcaecati expedita quam, saepe nesciunt blanditiis ratione id sunt iste at. Accusamus, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum non dolore, fugiat eligendi tempora odit, vero obcaecati expedita quam, saepe nesciunt blanditiis ratione id sunt iste at. Accusamus, vero?
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="mt-5 pt-4">
          <Col sm="3"></Col>
          <Col sm="6"></Col>
          <Col sm="3"></Col>
        </Row>
      </Container>
    </div>)
  }
}
