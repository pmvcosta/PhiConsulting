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
import { Link, Router } from '../routes';

class CampaignNew extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    errorMessage: '',
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault(); //keeps browser from submitting form to backed server

    this.setState({
      loading: true,
      errorMessage: '',
    });

    try {
      Router.pushRoute('/subscribe');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '1em 0em', textTransform: 'uppercase' }}
        >
          <a href="#">Sign Up</a>
        </Divider>

        <Grid
          centered
          columns={3}
          textAlign="center"
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '4em 0em' }}
        >
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header
                as="h3"
                centered
                style={{ textAlign: 'center', fontSize: '2em' }}
              >
                Sign Up
              </Header>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <Input
                    style={{ marginBottom: '10px' }}
                    className="form-control mb-4 p-4"
                    required
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                  <Input
                    style={{ marginBottom: '10px' }}
                    className="form-control mb-4 p-4"
                    required
                    type="text"
                    placeholder="Username"
                    value={this.state.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                  <Input
                    style={{ marginBottom: '10px' }}
                    className="form-control mb-4 p-4"
                    required
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />

                  <Input
                    style={{ marginBottom: '10px' }}
                    className="form-control mb-4 p-4"
                    required
                    type="password"
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={(event) =>
                      this.setState({ confirmPassword: event.target.value })
                    }
                  />

                  <Message
                    error
                    header="Oops"
                    content={this.state.errorMessage}
                  />
                  <Button
                    loading={this.state.loading}
                    style={{ marginTop: '10px' }}
                    primary
                  >
                    Sign Up
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignNew;
