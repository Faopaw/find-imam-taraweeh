import Card from "react-bootstrap/Card";

function vacancyCard(props) {
  return (
    <>
      <Card
        // border="light"
        bg="light"
        text="dark"
        style={{
          width: "80%",
          justifySelf: "center",
          "--bs-border-opacity": "none",
          borderLeft: "3px solid hsl(205, 69%, 50%)",
        }}
      >
        <Card.Body>
          <Card.Title>{props.requireddata.fields.city["en-US"]}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.requireddata.fields.address["en-US"]}
          </Card.Subtitle>
          <Card.Text>
            {props.requireddata.fields.requirements["en-US"]} -{" "}
            {props.requireddata.fields.extraDetails["en-US"]}
          </Card.Text>
          <Card.Text>
            {props.requireddata.fields.contactName["en-US"]} -{" "}
            {props.requireddata.fields.contactMobileNumber["en-US"]}
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default vacancyCard;
