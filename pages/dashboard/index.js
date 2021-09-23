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
    this.setState({ open: true });
  };

  hideModal = () => this.setState({ open: false });
  //redirect away if not authorized

  render() {
    const { open, isLoading } = this.state;
    const { session, profileType } = this.props;
    return (
      <DashBar
        session={session}
        profileType={profileType}
        isLoading={isLoading}
      >
        <br />
        {profileType == 'Funding Platform' && (
          <Segment color="red" padded raised fluid>
            <Header
              as="h2"
              style={{ fontSize: '2em', color: 'rgba(212, 32, 32, 1.0)' }}
            >
              Featured Services
            </Header>

            <Featured />
          </Segment>
        )}
        <br />
        {profileType == 'Funding Platform' && (
          <OpenCampaigns profileType={profileType} />
        )}
        <br />

        {profileType == 'Borrower' && (
          <Segment color="red" raised padded>
            <Header
              as="h2"
              style={{ fontSize: '2em', color: 'rgba(212, 32, 32, 1.0)' }}
            >
              All Services
            </Header>
            <Card.Group itemsPerRow={4}>
              <Card color="red">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(212, 32, 32, 0.8),transparent)',
                    backgroundColor: 'red',
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
                    Request the creation of videos or images for the campaign"{' '}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: 'rgba(212, 32, 32, 1.0)' }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>

              <Card color="red">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(212, 32, 32, 0.8),transparent)',
                    backgroundColor: 'red',
                  }}
                >
                  <Icon
                    name="video"
                    size="huge"
                    style={{ color: 'rgba(255, 255, 255, 1.0)' }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: '5em' }}>
                    Company Valuation
                  </Card.Header>
                  <Card.Description>
                    Request the creation of videos or images for the campaign"{' '}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: 'rgba(212, 32, 32, 1.0)' }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>

              <Card color="red">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(212, 32, 32, 0.8),transparent)',
                    backgroundColor: 'red',
                  }}
                >
                  <Icon
                    name="video"
                    size="huge"
                    style={{ color: 'rgba(255, 255, 255, 1.0)' }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: '5em' }}>
                    Media Production
                  </Card.Header>
                  <Card.Description>
                    Request the creation of videos or images for the campaign"{' '}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: 'rgba(212, 32, 32, 1.0)' }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>

              <Card color="red">
                <Card.Content
                  style={{
                    textAlign: 'center',
                    background:
                      'linear-gradient(rgba(212, 32, 32, 0.8),transparent)',
                    backgroundColor: 'red',
                  }}
                >
                  <Icon
                    name="video"
                    size="huge"
                    style={{ color: 'rgba(255, 255, 255, 1.0)' }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: '5em' }}>
                    Media Production
                  </Card.Header>
                  <Card.Description>
                    Request the creation of videos or images for the campaign"{' '}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: 'rgba(212, 32, 32, 1.0)' }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>
              <Card color="red">
                <Card.Content
                  style={{
                    textAlign: "center",
                    background:
                      "linear-gradient(rgba(212, 32, 32, 0.8),transparent)",
                    backgroundColor: "red",
                  }}
                >
                  <Icon
                    name="video"
                    size="huge"
                    style={{ color: "rgba(255, 255, 255, 1.0)" }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: "5em" }}>
                    Media Production
                  </Card.Header>
                  <Card.Description>
                    Request the creation of videos or images for the campaign"{" "}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: "rgba(212, 32, 32, 1.0)" }}
                  >
                    Request
                  </Button>
                </Card.Content>
              </Card>
              <Card color="red">
                <Card.Content
                  style={{
                    textAlign: "center",
                    background:
                      "linear-gradient(rgba(212, 32, 32, 0.8),transparent)",
                    backgroundColor: "red",
                  }}
                >
                  <Icon
                    name="video"
                    size="huge"
                    style={{ color: "rgba(255, 255, 255, 1.0)" }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header syle={{ fontSize: "5em" }}>
                    Media Production
                  </Card.Header>
                  <Card.Description>
                    Request the creation of videos or images for the campaign"{" "}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    secondary
                    onClick={this.showModal}
                    style={{ backgroundColor: "rgba(182, 12, 12, 0.9)" }}
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
