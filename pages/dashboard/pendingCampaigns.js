import React, { Component, useEffect, useState } from "react";
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
  Dimmer,
  Rating,
} from "semantic-ui-react";
import { Link, Router } from "../../routes";
import { useRouter } from "next/router";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import DashBar from "../../components/DashLayout";
import Featured from "./featured";
import { useSession, getSession } from "next-auth/client";
import { connectToDatabase } from "../../lib/db";
import CampaignRow from "../../components/CampaignRow";

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
        destination: "/",
        permanent: false,
      },
    };
  }

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const userEmail = session.user.email;
  const user = await usersCollection.findOne({ email: userEmail });
  const campaigns = user.campaigns;
  const profileType = session.user.name;
  let campaign = {};
  let campaignList = [];

  if (campaigns !== undefined) {
    campaigns.forEach((item) => {
      campaign = {};
      console.log(`THE NAME IS ${item.campaignName}`);

      campaign["campaignName"] = `${item.campaignName}`;
      campaign["platform"] = `${item.platform}`;
      campaign["fundMethod"] = `${item.fundMethod}`;
      campaign["fundGoal"] = `${item.fundGoal}`;
      campaign["fundDeadline"] = `${item.fundDeadline}`;
      campaign["addNotes"] = `${item.addNotes}`;
      campaign["hasMedia"] = `${item.hasMedia}`;
      campaign["hasValuation"] = `${item.hasValuation}`;
      campaign["hasMarketingCampaign"] = `${item.hasMarketingCampaign}`;
      campaign["hasCommunity"] = `${item.hasCommunity}`;

      campaignList.push(campaign);
    });
  }

  client.close();
  return {
    props: { session, campaignList, profileType },
  };
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, percent: 50 };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  //redirect away if not authorized

  renderRows() {
    return this.props.campaignList.map((campaign, index) => {
      return <CampaignRow campaign={campaign} />;
    });
  }

  render() {
    const { session, profileType } = this.props;
    const { percent, isLoading } = this.state;
    const currentItem = "pendingCampaigns";
    return (
      <DashBar
        session={session}
        currentItem={currentItem}
        profileType={profileType}
        isLoading={isLoading}
      >
        <br />
        <Segment color="blue" raised padded>
          <Header as="h2" style={{ fontSize: "2em", color: "deepskyblue" }}>
            Pending Campaigns
          </Header>
          <Table celled padded color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Campaign Name</Table.HeaderCell>
                <Table.HeaderCell singleLine>Platform</Table.HeaderCell>
                <Table.HeaderCell>Funding Deadline</Table.HeaderCell>
                <Table.HeaderCell singleLine style={{ width: "100px" }}>
                  Funding Goal
                </Table.HeaderCell>
                <Table.HeaderCell singleLine>Funding Method</Table.HeaderCell>
                <Table.HeaderCell singleLine>Checklist</Table.HeaderCell>
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
