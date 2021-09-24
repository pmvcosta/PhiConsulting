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
        <Form.Field required>
          <label required>
            <b>
              {' '}
              Does the business rely on another individual or business’ IP to
              provide its service(s)?
            </b>
          </label>
          <Form.Group>
            <Form.Field
              name="needsOthersIP"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.needsOthersIP === 'Yes'}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="needsOthersIP"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.needsOthersIP === 'No'}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
        <br />
        <Form.Field required>
          <label required>
            <b>
              {' '}
              Do previous employees have any claims over the IP in question?
            </b>
          </label>
          <Form.Group>
            <Form.Field
              name="prevEmpIPClaims"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.prevEmpIPClaims === 'Yes'}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="prevEmpIPClaims"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.prevEmpIPClaims === 'No'}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
        <br />
        <Form.Field required>
          <label required>
            <b>
              {' '}
              Have current directors or founders transferred the IP created for
              the business to the company?
            </b>
          </label>
          <Form.Group>
            <Form.Field
              name="hasTransferredIP"
              control={Radio}
              label="Yes"
              value="Yes"
              checked={this.props.hasTransferredIP === 'Yes'}
              onChange={this.props.handleTextChange}
            />

            <Form.Field
              name="hasTransferredIP"
              control={Radio}
              label="No"
              value="No"
              checked={this.props.hasTransferredIP === 'No'}
              onChange={this.props.handleTextChange}
            />
          </Form.Group>
        </Form.Field>
      </Segment>
    );
  }
}

export default Directors;
