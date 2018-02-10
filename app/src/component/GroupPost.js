import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Input
} from 'reactstrap';

const GroupPost = (props) => {
  return (<Card className="mb-2">
    <CardHeader>Name</CardHeader>
    <CardBody>
      <CardText><p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ducimus eaque neque nam sequi voluptatum accusantium soluta reiciendis dignissimos vero, reprehenderit provident ex consequatur, quo, consequuntur vel ea officia hic.</p></CardText>
    </CardBody>
    <CardFooter className="pb-1">
      <div className="d-flex justify-content-around">
        <a href=""><img src="/assets/img/like-icon.png" alt="like"/>
          <b>&nbsp;Like</b>
        </a>
        <a href=""><img src="/assets/img/comment-icon.png" alt="comment"/>
          <b>&nbsp;Comment</b>
        </a>
        <a href=""><img src="/assets/img/share-icon.png" alt="share"/>
          <b>&nbsp;Share</b>
        </a>
      </div>
    </CardFooter>
    <CardHeader className="pt-0 pb-1">
      <a href="" className="small">3 comments</a>
    </CardHeader>
    <CardBody>
      <div className="d-flex align-items-center">
        <a href="" className="mr-1"><img className="profpict-icon" src="/assets/img/profile-picture.jpg" alt="like"/></a><Input type="textarea" name="group-post" id="group-post" rows="1"/>
      </div>
    </CardBody>
  </Card>);
};

export default GroupPost;
