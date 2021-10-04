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
  Loader,
  Tab,
  Dimmer,
  Rating,
} from 'semantic-ui-react';
import { Link, Router } from '../../routes';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import DashBar from '../../components/DashLayout';
import Featured from './featured';
import { useSession, getSession } from 'next-auth/client';
import { connectToDatabase } from '../../lib/db';
import BasicDetails from './campaignInfo/basicDetails';
import Community from './campaignInfo/community';
import Marketing from './campaignInfo/marketing';
import VisualMedia from './campaignInfo/visualMedia';

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
  //console.log(context.query);
  let selectedCampaign;

  if (context.query.campaignName !== undefined) {
    selectedCampaign = context.query.campaignName;
  }

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
  const profileType = session.user.name;
  let campaign = {};

  if (campaigns !== undefined) {
    campaigns.forEach((item) => {
      campaign = {};
      console.log(`THE NAME IS ${item.campaignName}`);

      if (item.campaignName === selectedCampaign) {
        campaign['campaignName'] = `${item.campaignName}`;
        campaign['platform'] = `${item.platform}`;
        campaign['fundMethod'] = `${item.fundMethod}`;
        campaign['fundGoal'] = `${item.fundGoal}`;
        campaign['fundDeadline'] = `${item.fundDeadline}`;
        campaign['addNotes'] = `${item.addNotes}`;
        campaign['hasMedia'] = `${item.hasMedia}`;
        campaign['hasValuation'] = `${item.hasValuation}`;
        campaign['hasMarketingCampaign'] = `${item.hasMarketingCampaign}`;
        campaign['hasCommunity'] = `${item.hasCommunity}`;
      }
    });
  }

  client.close();
  return {
    props: { session, campaign, profileType },
  };
}

class CampaignShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  changeEditState = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    //MAKE THIS A F***** POP UP, using a new page is bound to crash
    console.log(`Props are${this.props}`);
    const { campaign, session, profileType } = this.props;
    const currentItem = 'IDK';
    const panes = [
      {
        menuItem: {
          key: 'Basic Details',
          content: 'Basic Details',
          icon: 'info circle',
        },
        render: () => (
          <BasicDetails
            fundMethod={campaign.fundMethod}
            fundGoal={campaign.fundGoal}
            platform={campaign.platform}
            fundDeadline={campaign.fundDeadline}
            isEditing={this.state.isEditing}
          />
        ),
      },
      {
        menuItem: {
          key: 'Visual Media',
          content: 'Visual Media',
          icon: 'camera retro',
        },
        render: () => (
          <VisualMedia
            hasMedia={campaign.hasMedia}
            isEditing={this.state.isEditing}
          />
        ),
      },
      {
        menuItem: { key: 'Community', content: 'Community', icon: 'users' },
        render: () => (
          <Community
            hasCommunity={campaign.hasCommunity}
            isEditing={this.state.isEditing}
          />
        ),
      },
      {
        menuItem: { key: 'Marketing', content: 'Marketing', icon: 'bullhorn' },
        render: () => (
          <Marketing
            hasMarketingCampaign={campaign.hasMarketingCampaign}
            isEditing={this.state.isEditing}
          />
        ),
      },
    ];
    return (
      <DashBar
        session={session}
        currentItem={currentItem}
        profileType={profileType}
      >
        <br />
        <Segment color="red" raised padded>
          <Header
            as="h2"
            style={{ fontSize: '2em', color: "rgba(182, 12, 12, 0.9)" }}
          >
            {campaign.campaignName}
            <Button
              secondary
              floated="right"
              onClick={this.changeEditState}
              style={{ backgroundColor: "rgba(212, 32, 32, 1.0)" }}
            >
              Edit
            </Button>
          </Header>
          <Tab
            menu={{ color: "red", secondary: true, pointing: true }}
            panes={panes}
            renderActiveOnly={true}
          />
        </Segment>
      </DashBar>
    );
  }
}

export default CampaignShow;
