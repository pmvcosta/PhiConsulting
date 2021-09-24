import React, { Component } from "react";
import {
  Popup,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Segment,
  Select,
  TextArea,
  Transition,
  Grid,
  Modal,
  Icon,
  Image,
  Header,
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import { Link } from "../../routes";

class Directors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment
        fluid
        style={{ padding: "8em 2em" }}
        vertical
        style={{
          border: "0px",
          outline: "0px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Form.Field required>
          <label required>
            <b> Have any of the directors previously been declared bankrupt?</b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasBankrupt"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasBankrupt === "Yes"}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasBankrupt"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasBankrupt === "No"}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
        <br />
        <Form.Field required>
          <label required>
            <b> Has the company ever consulted insolvency practitioners?</b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasInsolvPract"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasInsolvPract === "Yes"}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasInsolvPract"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasInsolvPract === "No"}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
        <br />
        <Form.Field required>
          <label required>
            <b>
              {" "}
              Are there any loans outstanding to the company, including
              overdrafts?
            </b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasLoansOutstanding"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasLoansOutstanding === "Yes"}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasLoansOutstanding"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasLoansOutstanding === "No"}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
        <br />
        <Form.Field required>
          <label required>
            <b> Does the company have any convertible debt outstanding?</b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasConvertDebt"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasConvertDebt === "Yes"}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasConvertDebt"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasConvertDebt === "No"}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
      </Segment>
    );
  }
}

export default Directors;
