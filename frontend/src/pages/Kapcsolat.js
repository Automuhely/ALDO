import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Kapcsolat() {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Vezetéknév</Form.Label>
        <Form.Control  type="text" placeholder="Vezetéknév" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Keresztnév</Form.Label>
        <Form.Control type="text" placeholder="Keresztnév"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail cím</Form.Label>
        <Form.Control type="email" placeholder="name@gmail.com" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Melléklet</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Üzenet</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        <Button type="submit">Küldés</Button>
      
    </>

  );
}
