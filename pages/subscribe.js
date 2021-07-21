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
import { Widget } from '@typeform/embed-react';

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
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({
      loading: false,
      errorMessage: '',
      successMessage: 'Success! 🎉 You are now subscribed to the newsletter.',
    });
  };

  render() {
    return (
      <Layout>
        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '8em 0em' }}
        >
          <Grid.Row centered>
            <Header as="h3" style={{ fontSize: '3em' }}>
              Oops! <br />
              We are not quite ready yet!{' '}
            </Header>
            <br />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Stay up to date with the latest developments{' '}
              </Header>
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
                    style={{ marginTop: '10px' }}
                    primary
                  >
                    Keep Me Updated!
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column floated="right" width={7}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Interested in our initiative?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Become an early adopter to help shape the future and be part of
                what comes next. Subscribe to the newsletter to stay up to date
                with our progress!
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <br />
            <br />
            <Header as="h3" style={{ fontSize: '3em' }}>
              You can also help us <br />
              by taking part in our investor inquiry:
            </Header>
            <br />
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <br />
              <Widget
                id="CnjqMpxq"
                style={{ width: '100%', height: '800px' }}
                className="my-form"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default Subscribe;
