import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Input
} from 'reactstrap';
import GroupPost from '../component/GroupPost'


export default class GroupDiscussion extends React.Component {
  render() {
    return (<div>
      <Card className="mb-2">
        <CardHeader>Write Post</CardHeader>
        <CardBody>
          <CardText><Input type="textarea" name="group-post" id="group-post" rows="4"/></CardText>
        </CardBody>
        <CardFooter>
          <Button color="primary" size="sm">Post</Button>
        </CardFooter>
      </Card>
      <GroupPost/>
    </div>);
  }

};
