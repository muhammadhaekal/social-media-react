import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

const GroupMember = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Members <span className="text-muted h6">80,550</span></CardHeader>
        <CardBody>
          <CardTitle>User Profile</CardTitle>
          <CardText>Member</CardText>
        </CardBody>
        <hr/>
        <CardBody>
          <CardTitle>Admin & Moderators</CardTitle>
          <CardText>Admin</CardText>
        </CardBody>
        <hr/>
        <CardBody>
          <CardTitle>Members</CardTitle>
          <CardText>Member 1</CardText>
          <CardText>Member 2</CardText>
          <CardText>Member 3</CardText>
          <CardText>Member 4</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default GroupMember;
