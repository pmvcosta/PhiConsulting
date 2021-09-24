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

class Financials extends Component {
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
          name="budget"
          type="text"
          pattern="[0-9]*"
          value={this.props.budget}
          onChange={this.props.handleNumberChange}
          label="What is your estimated buget(€)?"
          placeholder="e.g.: 5000"
          style={{ width: '295px' }}
        />
      </Segment>
    );
  }
}

export default Financials;
