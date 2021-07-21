import React, { Component } from 'react';
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Image,
} from 'semantic-ui-react';
import factory from '../ethereum/factory';

//import 'semantic-ui-css/semantic.min.css';

import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  //static makes it so that function is not assigned to instances of class but

  //to the class itself, CampaignIndex

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };

    //same as

    //return {campaigns : campaigns} //setting a class variable
  }

  renderCampaigns() {
    //iterate over list of functions using map function (NOT mapping)

    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign </a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  //Next.js adds requirements for data loading.

  //Cant be done in componentDidMount

  //"primary" as written below is the same as primary={true}
  render() {
    return (
      <Layout>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href="#">Open Campaigns</a>
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
                List of Available Campaigns
              </Header>
              {this.renderCampaigns()}
            </Grid.Column>
            <Grid.Column floated="right" width={7}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Participating in Open Campaigns{' '}
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We can assist your company in securing funding, by connecting
                you directly to your customer base and the general public. Take
                advantage of the growing european hype surrounding cannabis!
              </p>
              <Link route="/campaigns/new">
                <a>
                  <Button
                    floated="left"
                    content="Create Campaign"
                    icon="add circle"
                    primary
                  />
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignIndex;

//Always necessary...
