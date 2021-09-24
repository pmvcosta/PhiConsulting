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

class ShareCapital extends Component {
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
        <Form.Group widths="equal">
          <Form.Field
            label="Shareholder(s)"
            control={Input}
            name="shareholders"
            value={this.props.shareholders}
            placeholder="Name of shareholder"
            onChange={this.props.handleTextChange}
          />
          <Form.Field
            label="Class of Share Held"
            control={Input}
            name="classOfShares"
            value={this.props.classOfShares}
            placeholder="Class of share"
            onChange={this.props.handleTextChange}
          />
          <Form.Field
            label="Number of Shares Held"
            control={Input}
            name="numberOfShares"
            type="text"
            pattern="[0-9]*"
            value={this.props.numberOfShares}
            placeholder="Number of shares"
            onChange={this.props.handleNumberChange}
          />
        </Form.Group>
        <Form.Field
          required
          control={Input}
          name="classValues"
          type="text"
          pattern="[0-9]*"
          value={this.props.classValues}
          onChange={this.props.handleNumberChange}
          label="Nominal Value of each class of Shares"
          placeholder="e.g.: 5000"
          style={{ width: '295px' }}
        />
        <Form.Field
          label="Options Granted"
          control={Input}
          name="optionsGranted"
          value={this.props.optionsGranted}
          placeholder="Class of share"
          onChange={this.props.handleTextChange}
          style={{ width: '295px' }}
        />
      </Segment>
    );
  }
}

export default ShareCapital;
