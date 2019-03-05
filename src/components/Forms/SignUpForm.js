import React, { Component } from 'react'
import { Form, Col, InputGroup, Button } from 'react-bootstrap'

class SignUpForm extends Component {
    constructor(...args) {
      super(...args);
  
      this.state = { validated: false };
    }
  
    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
    }
  
    render() {
      const { validated } = this.state;
      return (
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
          >
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                          <Form.Control
                  name="Username"
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>  
         <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label> Favorite City</Form.Label>
              <Form.Control name="city" type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      );
    }
  }

export default SignUpForm;