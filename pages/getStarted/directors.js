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

const options = [
  { key: 'y', text: 'Yes', value: 'Yes' },
  { key: 'n', text: 'No', value: 'No' },
];

class Directors extends Component {
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
            label="Director(s)"
            control={Input}
            name="directors"
            value={this.props.directors}
            placeholder="Name of shareholder"
            onChange={this.props.handleTextChange}
          />
          <Form.Field
            label="Adress Details"
            control={Input}
            name="addressDetails"
            value={this.props.addressDetails}
            placeholder="Address of director"
            onChange={this.props.handleTextChange}
          />
        </Form.Group>
        <br />
        <Form.Field required>
          <label required>
            <b> Has this person ever been disqualified as a director?</b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasDisqualified"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasDisqualified === 'Yes'}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasDisqualified"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasDisqualified === 'No'}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
        <br />
        <Form.Field required>
          <label required>
            <b>
              {' '}
              Has this person ever commited, been accused of or convicted of,
              any criminal offence?
            </b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasCriminalOffence"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasCriminalOffence === 'Yes'}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasCriminalOffence"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasCriminalOffence === 'No'}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
        <br />
        <Form.Field required>
          <label required>
            <b>
              {' '}
              Has this person been sanctioned by any tribunal or professional
              body?
            </b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasSanctioned"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasSanctioned === 'Yes'}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasSanctioned"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasSanctioned === 'No'}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
      </Segment>
    );
  }
}

export default Directors;
