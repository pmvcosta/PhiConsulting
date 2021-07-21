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
import Layout from '../components/LayoutIndex';
import { Link } from '../routes';

class MainIndex extends Component {
  //static makes it so that function is not assigned to instances of class but
  //to the class itself, CampaignIndex
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
    //same as
    //return {campaigns : campaigns} //setting a class variable
  }

  //Next.js adds requirements for data loading.

  //Cant be done in componentDidMount

  //"primary" as written below is the same as primary={true}
  render() {
    return (
      <Layout>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We Help Cannabis Companies and Startups
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Funding made easier! We can assist your company or startup by
                  connecting you to your customer base and the general public.
                  Take advantage of the growing European hype surrounding
                  cannabis!
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We Make Tradable Tokens
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, can convert ownership over portions of your
                  assets into tokens. Investors can then trade them amongst
                  themselves, entitling holders to a fraction of the returns of
                  such a property.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={8}>
                <Image
                  bordered
                  rounded
                  size="massive"
                  src="https://images.unsplash.com/photo-1591754060004-f91c95f5cf05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Link route="/OpenCampaigns">
                  <a>
                    <Button size="huge">Check Them Out</Button>
                  </a>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  The cannabis industry continues to be a brave new market. It’s
                  a time of rapid change and great opportunity.
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Delloite, <b>Cannabis - Brave New Market </b>
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "The European market for cannabis will be one of the largest
                  untapped consumer packaged goods markets globally in the
                  coming years."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Prohibition Partners, <b>Global Cannabis report</b>, Edition 6
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              The Brightest Path Forward
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              A new lean middleman in the fintech industry of crowd &
              chain-enabled asset investment. We aim to provide access to
              reliable and liquid asset-backed investments in well performing
              verticals. Here, we focus on the well-performing vertical of{' '}
              <b>Legal Cannabis</b>.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href="#">Market Size</a>
            </Divider>

            <Header as="h3" style={{ fontSize: '2em' }}>
              Legal Medical Cannabis Monetization: a huge investment opportunity
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but it's really true. The cannabis
              industry now stands at a crucial point: It’s{' '}
              <b>expanding quickly</b>,<b>globalizing even more rapidly</b>, and
              entering a <b>new age of more mature development</b>, both on a
              local and international scale.
            </p>
            <Button as="a" size="large">
              Tell me more!
            </Button>
          </Container>
        </Segment>
      </Layout>
    );
  }
}

export default MainIndex;

//Always necessary...
