import React from 'react'
import DashNavBar from '../component/DashNavBar'
import {
  Col,
  Row,
  Container,
  ListGroup,
  ListGroupItem,
  Badge
} from 'reactstrap'

const Group = ["a", "b"]

export default class App extends React.Component {

  render() {
    return (<div>
      <div className="fixed-top">
        <DashNavBar/>
        <Container>
          <Row className="mt-5 pt-4">
            <Col sm="3">
              <ListGroup className="mb-2">
                <ListGroupItem disabled="disabled" >
                  Muhammad Haekal
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                  News Feed
                  <span>
                    <Badge pill="pill">14</Badge>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                  Messanger
                  <span>
                    <Badge pill="pill">14</Badge>
                  </span>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem disabled="disabled" >
                  Shortcuts
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                  Group 1
                  <span>
                    <Badge pill="pill">14</Badge>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                  Group 2
                  <span>
                    <Badge pill="pill">14</Badge>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                  Group 3
                  <span>
                    <Badge pill="pill">14</Badge>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col sm="6"></Col>
            <Col sm="3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis?
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="mt-5 pt-4">
          <Col sm="3"></Col>
          <Col sm="6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. RLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. RLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia nulla reprehenderit doloremque explicabo quod veniam, quasi maiores autem totam nam necessitatibus, sequi magni dicta obcaecati nostrum dignissimos ad. Reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. R
          </Col>
          <Col sm="3"></Col>
        </Row>
      </Container>
    </div>)
  }
}
