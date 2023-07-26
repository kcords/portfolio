import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
  }
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });
  };

  render() {
    var sectionName = this.props?.resumeBasicInfo?.section_name?.contact;

    return (
      <Container fluid id="contact" className="p-5 mb-5">
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
          data-netlify="true"
          className="pb-5 mb-5"
        >
          <input
            type="hidden"
            name="form-name"
            value="portfolio-contact-form"
          />
          <Row className="pb-5 mb-5">
            <Col></Col>
            <Col xs={12} md={10} lg={8} xl={6}>
              <Row>
                <h1 className="text-center py-5" style={{ color: "black" }}>
                  <span>{sectionName}</span>
                </h1>
                <Form.Text className="fs-5 mb-4">
                  Hi there! Please feel free to send me a message using the form
                  below.
                </Form.Text>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="formFullName">
                    <FloatingLabel label="Full Name">
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <InputGroup className="mb-3" controlId="formEmail">
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <FloatingLabel label="Email address">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <FloatingLabel label="Reason for contact">
                      <Form.Select
                        aria-label="Default select example"
                        className="mb-3"
                        controlId="formContactReason"
                        name="subject"
                        required
                      >
                        <option></option>
                        <option value="General inquiry">General inquiry</option>
                        <option value="Employment opportunity">
                          Employment opportunity
                        </option>
                        <option value="Contract work inquiry">
                          Contract work
                        </option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please select a reason for contact
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Type your message here..."
                      className="mb-3"
                      controlId="formMessage"
                      name="message"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please type a message to send
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" type="submit" className="mt-2">
                    Send
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
