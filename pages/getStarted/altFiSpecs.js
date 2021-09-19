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

class AltFi extends Component {
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
        <Form.Field required>
          <label required>
            <b>Prefered Crowdfunding Method:</b>
          </label>
          <Popup
            trigger={
              <Form.Field
                control={Radio}
                label="Rewards-Based"
                value="1"
                checked={this.props.value === '1'}
                onChange={this.props.handleChange}
              />
            }
            content="Donors earn rewards based on the amount donated. Common rewards include handmade items, prizes donated by partner companies, or free products or services offered by the fundraiser organizer."
            position="top left"
          />
          <Popup
            trigger={
              <Form.Field
                control={Radio}
                label="Equity-Based"
                value="2"
                checked={this.props.value === '2'}
                onChange={this.props.handleChange}
              />
            }
            content="Donors receive a percentage ownership in the company.  Requires larger fundraising minimums, typically into the thousands of dollars."
            position="top left"
          />
          <Popup
            trigger={
              <Form.Field
                control={Radio}
                label="Donations"
                value="3"
                checked={this.props.value === '3'}
                onChange={this.props.handleChange}
              />
            }
            content="Asking for a small donation from a large number of people to raise money for personal needs as well as community-based projects."
            position="top left"
          />
          <Popup
            trigger={
              <Form.Field
                control={Radio}
                label="Debt"
                value="4"
                checked={this.props.value === '4'}
                onChange={this.props.handleChange}
              />
            }
            content="Collect donations with the promise to pay them back until a set date. Typically used by businesses that prefer to pay back the funds rather than give out equity. "
            position="top left"
          />
          <Form.Field
            control={Radio}
            label="No Preference"
            value="5"
            checked={this.props.value === '5'}
            onChange={this.props.handleChange}
          />
        </Form.Field>

        <br />
        <Form.Field
          required
          control={Input}
          name="funding"
          type="text"
          pattern="[0-9]*"
          value={this.props.funding}
          onChange={this.props.handleNumberChange}
          label="What is your funding goal(€)?"
          placeholder="e.g.: 5000"
        />
        <br />
        <Form.Group>
          <Form.Field
            required
            control={Select}
            label="When are you looking to receive the funds?"
            name="fundDate"
            value={this.props.fundDate}
            onChange={this.props.handleTextChange}
            options={this.props.options}
            placeholder="Please Select One"
          />
          <br />
        </Form.Group>
      </Segment>
    );
  }
}

export default AltFi;
