import React, { Component } from 'react';
import {
  Form,
  Button,
  Input,
  Message,
  Grid,
  Divider,
  Header,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import { Link, Router } from '../routes'; //Not going to use Link, but it exists
import { PopupButton } from '@typeform/embed-react';

class Subscribe extends Component {
  state = {
    email: '',
    errorMessage: '',
    successMessage: '',
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault(); //keeps browser from submitting form to backed server

    this.setState({
      loading: true,
      errorMessage: '',
      successMessage: '',
    });

    try {
      // 3. Send a request to our API with the user's email address.
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: this.state.email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      this.setState({
        errorMessage: '',
        successMessage: 'Success! 🎉 You are now subscribed to the newsletter.',
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <Grid
        container
        stackable
        verticalAlign="middle"
        style={{ padding: '0em 0em' }}
      >
        <Grid.Row>
          <Grid.Column>
            <Form
              onSubmit={this.onSubmit}
              error={!!this.state.errorMessage}
              success={!!this.state.successMessage}
            >
              <Form.Field>
                <Input
                  className="form-control mb-4 p-4"
                  required
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
                <Message
                  error
                  header="Oops"
                  content={this.state.errorMessage}
                />
                <Message
                  success
                  header="Good news everyone!"
                  content={this.state.successMessage}
                />
                <Button
                  loading={this.state.loading}
                  style={{
                    backgroundColor: 'rgba(100, 195, 74, 0.9)',
                    color: 'rgba(255,255,255,0.9)',
                    marginTop: '10px',
                  }}
                  primary
                >
                  Keep Me Updated!
                </Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Subscribe;
