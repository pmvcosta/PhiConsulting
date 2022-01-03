import React, { Component, useEffect, useState } from 'react';
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Image,
  Reveal,
  Icon,
  Sidebar,
  Menu,
  Checkbox,
  Transition,
} from 'semantic-ui-react';
import { Link, Router } from '../../routes';
import { useRouter } from 'next/router';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import DashBar from '../../components/DashLayout';
import Featured from './featured';
import KitPopUp from './servicePopUp';
import OpenCampaigns from '../openCampaigns/campaignList';
import { useSession, getSession } from 'next-auth/client';
//import { connectToDatabase } from '../../lib/db';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1080,
  },
});

export async function getServerSideProps(context) {
  //getSession automatically looks into request
  const session = await getSession({ req: context.req });
  console.log(session);
  let profileType;

  if (!session) {
    //The followign resets the state of the app?
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (session) {
    //const client = await connectToDatabase();
    //const usersCollection = client.db().collection("users");

    const userEmail = session.user.email;
    //const user = await usersCollection.findOne({ email: userEmail });
    profileType = session.user.name;

    console.log(`The profileType is ${profileType}`);
  }

  //client.close();
  return {
    props: { session, profileType },
  };
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, open: false };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  showModal = () => {
    Router.pushRoute('/dashboard/newRequest');
    //this.setState({ open: true });
  };

  hideModal = () => this.setState({ open: false });
  //redirect away if not authorized

  render() {
    const { open, isLoading } = this.state;
    const { session, profileType } = this.props;
    const currentItem = 'dashboard';
    return (
      <DashBar
        session={session}
        profileType={profileType}
        currentItem={currentItem}
        isLoading={isLoading}
      >
        {profileType == 'Funding Platform' && (
          <Segment
            color="blue"
            padded
            raised
            fluid
            style={{ marginTop: '20px' }}
          >
            <Header
              as="h2"
              style={{ fontSize: '2em', color: 'rgba(28, 173, 229, 1.0)' }}
            >
              Recently Added
            </Header>

            <Featured profileType={profileType} />
          </Segment>
        )}
        {profileType == 'Funding Platform' && (
          <OpenCampaigns profileType={profileType} />
        )}

        {profileType == 'Borrower' && (
          <Segment color="blue" raised padded style={{ marginTop: '20px' }}>
            <Header
              as="h2"
              style={{ fontSize: '2em', color: 'rgba(28, 173, 229, 1.0)' }}
            >
              All Services
            </Header>
            <Card.Group itemsPerRow={4} stackable>
              <Card color="blue">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(28, 173, 229, 1.0),transparent)',
                    backgroundColor: 'deepskyblue',
                  }}
                >
                  <Icon
                    name="camera"
                    size="huge"
                    style={{ color: 'rgba(255, 255, 255, 1.0)' }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: '5em' }}>
                    Media Production
                  </Card.Header>
                  <Card.Description>
                    Request the creation of videos or images for the campaign{' '}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: 'rgba(28, 173, 229, 1.0)' }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>

              <Card color="blue">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(28, 173, 229, 1.0),transparent)',
                    backgroundColor: 'deepskyblue',
                  }}
                >
                  <Icon
                    name="line graph"
                    size="huge"
                    style={{ color: 'rgba(255, 255, 255, 1.0)' }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: '5em' }}>
                    Company Valuation
                  </Card.Header>
                  <Card.Description>
                    Request a company valuation carried out by a certified
                    entity
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: 'rgba(28, 173, 229, 1.0)' }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>

              <Card color="blue">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(28, 173, 229, 1.0),transparent)',
                    backgroundColor: 'deepskyblue',
                  }}
                >
                  <Icon
                    name="legal"
                    size="huge"
                    style={{ color: 'rgba(255, 255, 255, 1.0)' }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: '5em' }}>
                    Legal Services
                  </Card.Header>
                  <Card.Description>
                    Request assistance regarding contracts, laws and
                    regulations.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: 'rgba(28, 173, 229, 1.0)' }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>

              <Card color="blue">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(28, 173, 229, 1.0),transparent)',
                    backgroundColor: 'deepskyblue',
                  }}
                >
                  <Icon
                    name="idea"
                    size="huge"
                    style={{ color: 'rgba(255, 255, 255, 1.0)' }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: "5em" }}>
                    Business Analysis
                  </Card.Header>
                  <Card.Description>
                    Request an analysis of the viability and predicted growth of
                    your business.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>
              <Card color="blue">
                <Card.Content
                  style={{
                    textAlign: "center",
                    background:
                      "linear-gradient(rgba(28, 173, 229, 1.0),transparent)",
                    backgroundColor: " deepskyblue ",
                  }}
                >
                  <Icon
                    name="bullhorn"
                    size="huge"
                    style={{ color: "rgba(255, 255, 255, 1.0)" }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: "5em" }}>
                    Digital Marketing
                  </Card.Header>
                  <Card.Description>
                    Request the creation of a digital marketing campaing (via
                    online ads, social media platforms,...)
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>
              <Card color="blue">
                <Card.Content
                  style={{
                    textAlign: "center",
                    background:
                      "linear-gradient(rgba(28, 173, 229, 1.0),transparent)",
                    backgroundColor: "deepskyblue",
                  }}
                >
                  <Icon
                    name="globe"
                    size="huge"
                    style={{ color: "rgba(255, 255, 255, 1.0)" }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: "5em" }}>
                    Landing Page Creation
                  </Card.Header>
                  <Card.Description>
                    Request the creation of a landing page for customers and
                    investors.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
        )}
        <Transition visible={open} animation="scale" duration={500}>
          <KitPopUp
            budget={0}
            open={open}
            value={0}
            hideModal={this.hideModal}
          />
        </Transition>
      </DashBar>
    );
  }
}

export default Dashboard;
