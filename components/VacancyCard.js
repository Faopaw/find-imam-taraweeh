import classes from "./VacancyCard.module.css";
import Card from "react-bootstrap/Card";

function vacancyCard(props) {
    // const {city,address,requirements,contactname,contactnumber,extradetails} = props.dummydata;
  return (
    <>
      <Card border="light" bg='light' text='dark' style={{ width: "80%" , justifySelf: "center"}}>
        <Card.Body>
          <Card.Title>{props.dummydata.city}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.dummydata.address}
          </Card.Subtitle>
          <Card.Text>
            {props.dummydata.requirements} - {props.dummydata.extradetails}
          </Card.Text>
          <Card.Text>
            {props.dummydata.contactname} - {props.dummydata.contactnumber}
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default vacancyCard;
