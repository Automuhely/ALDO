import React from "react";
import {  Container } from "react-bootstrap";

export default function MapAvailability() {
  return (
    <Container style={{ textAlign: "center" }} className="terkepelerhetoseg">
      <h1>ALDO Szakszerviz Kft.</h1>
      <h6>Telefonszám: +36-1/111-1111</h6>
      <h6>Cím: 1119 Budapest, Mérnök utca 39.</h6>
      <iframe className="embed-responsive-item" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031.744796458781!2d19.034242977220277!3d47.465324363374286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddbc0e50a8bf%3A0x62d4f62a2b7db312!2zU1rDgU1BTEsg4oCTIFN6YWzDqXppIFRlY2huaWt1bSDDqXMgU3pha2dpbW7DoXppdW0!5e1!3m2!1shu!2shu!4v1713884166272!5m2!1shu!2shu"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
}
