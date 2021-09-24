import React, { Component } from 'react';
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
} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';

class BasicDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment
        fluid
        style={{ padding: '8em 2em' }}
        vertical
        style={{
          border: '0px',
          outline: '0px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Form.Field
          required
          control={Input}
          name="busName"
          value={this.props.busName}
          onChange={this.props.handleTextChange}
          label="What's the name of your business?"
          placeholder="Business Name"
          style={{ width: '295px' }}
        />
        <br />

        <Form.Group>
          <Form.Field
            required
            control={Select}
            name="country"
            value={this.props.country}
            onChange={this.props.handleTextChange}
            label="What country is your business registered in?"
            options={this.props.countryOptions}
            search
            placeholder="Country"
            style={{ width: '295px' }}
          />
          <br />
        </Form.Group>
      </Segment>
    );
  }
}

export default BasicDetails;
