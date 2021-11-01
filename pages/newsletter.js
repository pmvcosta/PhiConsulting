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
      <Grid stackable verticalAlign="middle" style={{ padding: '0em 0em' }}>
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
                  size="tiny"
                  placeholder="Email"
                  action={{
                    color: 'blue',
                    labelPosition: 'right',
                    icon: 'mail',
                    content: 'Subscribe',
                    size: 'tiny',
                  }}
                  loading={this.state.loading}
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
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Subscribe;
