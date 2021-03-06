import React, { Component } from 'react';
import { Form, Col, InputGroup, Modal, Button } from 'react-bootstrap';
import './Form.css';
class LoginForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    this.props.submitUserSignin();
  }

  render() {
    const { validated } = this.state;
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Sign in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            className="LoginForm"
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="username"
                    onChange={this.props.handleNavStateOnChange}
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  onChange={this.props.handleNavStateOnChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>
            <input
              value="Submit"
              type="submit"
              className="btn-info"
              onClick={this.props.handleLogIn}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-info" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LoginForm;
