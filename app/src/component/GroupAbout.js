import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

const GroupAbout = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">About This Group</CardHeader>
        <CardBody>
          <CardTitle>Description</CardTitle>
          <CardText>Impact Byte World is a public discussion group of for enthusiasts and practitioners in technology, design, marketing, business, and education.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default GroupAbout;
