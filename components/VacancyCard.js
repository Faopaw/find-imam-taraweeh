import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function vacancyCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            {props.requireddata.fields.requirements["en-US"]}
            {/* {props.requireddata.fields.extraDetails["en-US"]} */}
          </Card.Text>
          <Card.Text>
            {props.requireddata.fields.contactName["en-US"]} -{" "}
            {props.requireddata.fields.contactMobileNumber["en-US"]}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            More Details
          </Button>
        </Card.Body>
      </Card>

      
      {/* Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Masjid Name: {props.requireddata.fields.masjid["en-US"]}
          <br></br>
          <br></br>

          Extra Details: {props.requireddata.fields.extraDetails["en-US"]}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default vacancyCard;
