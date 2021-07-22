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
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes'; //Not going to use Link, but it exists

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
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
      console.log('Before Accounts');
      const accounts = await web3.eth.getAccounts(); //get Metamask accounts
      console.log(accounts);
      //create check to verify submission success, i.e. if address now exists...
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0], //dont need to specify gas, Metamask handles that
        });
      //Campaign sucessfully created...
      Router.pushRoute('/');
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
          <a href="#">New Campaign</a>
        </Divider>

        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '8em 0em' }}
        >
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Create a campaign
              </Header>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <label> Minimum Contribution </label>
                  <Input
                    label="wei"
                    labelPosition="right"
                    value={this.state.minimumContribution}
                    onChange={(event) =>
                      this.setState({ minimumContribution: event.target.value })
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
                    Create!
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignNew;
