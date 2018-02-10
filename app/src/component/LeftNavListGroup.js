import React from 'react'
import { ListGroupItem, Badge} from 'reactstrap'
import { Link } from "react-router-dom"

const LeftNavList = (props) => (
  <Link to={props.to}>
    <ListGroupItem className="d-flex justify-content-between">
      <span>{props.name}
      </span>
      <span>
        <Badge pill={true}>{props.notifSum}</Badge>
      </span>
    </ListGroupItem>
  </Link>
)

export default LeftNavList
