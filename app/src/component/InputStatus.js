import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText, CardFooter, Input, Button } from 'reactstrap';

const InputStatus = (props) => {
  return (
    <Card className="mb-2">
      <CardHeader>Write Post</CardHeader>
      <CardBody>
        <CardText><Input type="textarea" name="group-post" id="group-post" rows="4"/></CardText>
      </CardBody>
      <CardFooter>
        <Button color="primary" size="sm">Post</Button>
      </CardFooter>
    </Card>
  );
};

export default InputStatus;
