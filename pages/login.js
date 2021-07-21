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
import { Link, Router } from '../routes';

class CampaignNew extends Component {
  state = {
    name: '',
    password: '',
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
          <a href="#">Log In</a>
        </Divider>

        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '8em 0em' }}
        >
          <Grid.Row>
            <Grid.Column width={8} textAlign="center">
              <Header as="h3" style={{ fontSize: '2em' }}>
                Log In
              </Header>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <Input
                    style={{ marginBottom: '10px', width: '400px' }}
                    required
                    type="text"
                    placeholder="Username"
                    value={this.state.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                  <Input
                    style={{ marginBottom: '10px', width: '400px' }}
                    required
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                  <br />
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
                    Log In
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column floated="right" width={7}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Creating a new funding campaign
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We can assist your company in securing funding, by connecting
                you directly to your customer base and the general public. Take
                advantage of the growing european hype surrounding cannabis!
              </p>
              <Link route="/register">
                <a>
                  <Button style={{ marginTop: '10px' }} primary>
                    Start Campaigning for Free!
                  </Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignNew;
