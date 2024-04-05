import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Kapcsolat() {
  const [form, setForm] = useState({
    vezeteknev: "",
    keresztnev: "",
    email: "",
    message: "",
    subject:"",
    attachment: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      attachment: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("vezeteknev", form.vezeteknev);
    formData.append("keresztnev", form.keresztnev);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("subject", form.subject);
    if (form.attachment) {
      formData.append("attachment", form.attachment);
    }

    try {
      const response = await fetch("/send_mail", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/img/FormBackGroundImg.jpg')",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Vezetéknév</Form.Label>
            <Form.Control
              type="text"
              name="vezeteknev"
              value={form.vezeteknev}
              onChange={handleChange}
              placeholder="Vezetéknév"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Keresztnév</Form.Label>
            <Form.Control
              type="text"
              name="keresztnev"
              value={form.keresztnev}
              onChange={handleChange}
              placeholder="Keresztnév"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail cím</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@gmail.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tárgy</Form.Label> 
            <Form.Control
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Tárgy"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Melléklet</Form.Label>
            <Form.Control
              type="file"
              name="attachment"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Üzenet</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Küldés
          </Button>
        </Form>
      </div>
    </div>
  );
}
