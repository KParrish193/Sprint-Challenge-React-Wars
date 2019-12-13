import React from "react";
import { Card, CardText, CardBody, CardTitle, CardHeader} from 'reactstrap';
import './App.css';

const StarCard = (props) => {

  console.log(props)
  return (
    <div className="card">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardBody>
          <CardHeader tag="h3">
          <CardTitle>{props.name}</CardTitle>
          </CardHeader>
          <CardText>
            Birth Year: {props.age}
            Home World: {props.homeworld}
            Gender: {props.gender}
            Height: {props.height}
            Mass: {props.mass}
            Hair-Color: {props.hair}
            Eye-Color: {props.eye}
            Skin-Color: {props.skin}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StarCard;
