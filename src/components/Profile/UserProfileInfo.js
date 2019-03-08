import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image } from "react-bootstrap";
import "./UserProfileInfo.css";
import GA from "./GA.jpg";

export default class UserInfo extends Component {
  state = {
    username: this.props.username,
    email: this.props.email,
    city: this.props.city
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.username === undefined 
      || this.state.email === undefined
      || this.state.city === undefined
    ) {
      return
    }
    let newUserInfo = this.state;
    this.props.saveInfo(newUserInfo);
  };

  render() {
    return (
      <div>
        <Card className="Profile-Card">
          <Image className="Profile-image" src={GA} roundedCircle fluid />
          <Card.Body>
            <Card.Title className="title">Welcome to your profile!</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <form onSubmit={this.onSubmit}>
              {/* Will Change to Current User */}
              <ListGroupItem>
                Name: {this.props.username}
                <span className={this.props.editInput}>
                  <input
                    type="text"
                    name="username"
                    placeholder={this.props.username}
                    onChange={this.onChange}
                    required
                  />
                </span>
              </ListGroupItem>

              <ListGroupItem>
                Email: {this.props.email}
                <span className={this.props.editInput}>
                  <input
                    type="text"
                    name="email"
                    placeholder={this.props.email}
                    onChange={this.onChange}
                    required
                  />
                </span>
              </ListGroupItem>
              <ListGroupItem>
                City: {this.props.city}
                <span className={this.props.editInput}>
                  <input
                    type="text"
                    name="city"
                    placeholder={this.props.city}
                    onChange={this.onChange}
                    required
                  />
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Date Joined: {this.props.dateJoined}
              </ListGroupItem>
              <span className={this.props.editInput}>
                <Button
                  value="Submit"
                  type="submit"
                  className={this.props.editInput}
                  // onClick={this.props.saveInfo}
                >
                  {" "}
                  Save
                </Button>
              </span>
            </form>
          </ListGroup>
          <Card.Body>
            <Button
              value="Submit"
              type="submit"
              className="btn-info"
              onClick={this.props.updateInfo}
            >
              {" "}
              Edit{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
