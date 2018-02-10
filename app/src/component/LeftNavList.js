import React from 'react'
import { ListGroupItem, Badge} from 'reactstrap'
import { Link } from "react-router-dom"

const LeftNavList = (props) => (
  <Link to={props.to}>
    <ListGroupItem className="d-flex justify-content-between">
      <span><img className="small-icon mr-2" src={props.image} alt={props.name}/>{props.name}
      </span>
      <span>
        <Badge pill={true}>{props.notifSum}</Badge>
      </span>
    </ListGroupItem>
  </Link>
)

export default LeftNavList
