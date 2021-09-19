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
  Table,
  Progress,
  Rating,
} from 'semantic-ui-react';
import { Link, Router } from '../../routes';
import { useRouter } from 'next/router';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import DashBar from '../../components/DashLayout';
import Featured from './featured';
import { useSession, getSession } from 'next-auth/client';
import { connectToDatabase } from '../../lib/db';
import CampaignRow from '../../components/CampaignRow';

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

  if (!session) {
    //The followign resets the state of the app?
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const userEmail = session.user.email;
  const user = await usersCollection.findOne({ email: userEmail });
  const campaigns = user.campaigns;
  let campaign = {};
  let campaignList = [];

  if (campaigns !== undefined) {
    campaigns.forEach((item) => {
      campaign = {};
      console.log(`THE NAME IS ${item.campaignName}`);

      campaign['campaignName'] = `${item.campaignName}`;
      campaign['platform'] = `${item.platform}`;
      campaign['fundMethod'] = `${item.fundMethod}`;
      campaign['fundGoal'] = `${item.fundGoal}`;
      campaign['fundDeadline'] = `${item.fundDeadline}`;
      campaign['addNotes'] = `${item.addNotes}`;

      campaignList.push(campaign);
    });
  }

  return {
    props: { session, campaignList },
  };
}

class Dashboard extends Component {
  state = {
    percent: 50,
  };

  //redirect away if not authorized

  renderRows() {
    return this.props.campaignList.map((campaign, index) => {
      return <CampaignRow campaign={campaign} />;
    });
  }

  render() {
    const { session } = this.props;
    const { percent } = this.state;
    const currentItem = 'pendingCampaigns';
    return (
      <DashBar session={session} currentItem={currentItem}>
        <br />
        <Segment color="red" raised padded>
          <Header
            as="h2"
            style={{ fontSize: '2em', color: 'rgba(182, 12, 12, 0.9)' }}
          >
            Pending Campaigns
          </Header>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Campaign Name</Table.HeaderCell>
                <Table.HeaderCell singleLine>Platform</Table.HeaderCell>
                <Table.HeaderCell>Funding Deadline</Table.HeaderCell>
                <Table.HeaderCell singleLine style={{ width: '200px' }}>
                  Funding Goal
                </Table.HeaderCell>
                <Table.HeaderCell singleLine>Funding Method</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{this.renderRows()}</Table.Body>
          </Table>
        </Segment>
      </DashBar>
    );
  }
}

export default Dashboard;
