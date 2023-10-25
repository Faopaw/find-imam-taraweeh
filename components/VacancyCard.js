import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function VacancyCard(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  let mapPlaceholder;
  if (!isLoaded) {
    mapPlaceholder = <div>Loading...</div>;
  } else {
    mapPlaceholder = <Map/>
  };

  function Map(){
    return <GoogleMap zoom={10} center={{lat:51.50,lng:-0.11}} borderRadius="25px" mapContainerClassName="map-container"></GoogleMap>
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalTextStyle = {
    margin: "1rem",
  };

  const mapContainer = {
    width: "400px",
    height: "225px",
    outline: "2px solid grey",
    // borderRadius: "30px",
  };

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
          <Button
            aria-label="detailsbutton"
            variant="primary"
            onClick={handleShow}
          >
            More Details
          </Button>
        </Card.Body>
      </Card>

      {/* Modal */}

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={modalTextStyle}>
            <strong>Masjid Name:</strong>{" "}
            {props.requireddata.fields.masjid["en-US"]}
          </div>
          <div style={modalTextStyle}>
            <strong>Address:</strong>{" "}
            {props.requireddata.fields.address["en-US"]}
          </div>
          <div style={modalTextStyle}>
            <strong>Extra Details:</strong>{" "}
            {props.requireddata.fields.extraDetails["en-US"]}
          </div>
          <div style={mapContainer}><Map/></div>
          {/* TODO - Google Map will go here */}
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

export default VacancyCard;
