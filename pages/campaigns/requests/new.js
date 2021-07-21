import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Form, Button, Message, Input, Grid, Header } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: '',
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault(); //keeps browser from submitting form to backed server
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;
    this.setState({
      loading: true,
      errorMessage: '',
    });

    try {
      const accounts = await web3.eth.getAccounts(); //get Metamask accounts
      //create check to verify submission success, i.e. if address now exists...
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({
          from: accounts[0], //dont need to specify gas, Metamask handles that
        });
      //Request sucessfully created...
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
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
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>Back</a>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Create New Request for Campaign {this.props.address}
              </Header>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <label> Descritpion </label>
                  <Input
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label> Value in Ether </label>
                  <Input
                    value={this.state.value}
                    onChange={(event) =>
                      this.setState({ value: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label> Recipient </label>
                  <Input
                    value={this.state.recipient}
                    onChange={(event) =>
                      this.setState({ recipient: event.target.value })
                    }
                  />
                </Form.Field>
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
                  Create!
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default RequestNew;
