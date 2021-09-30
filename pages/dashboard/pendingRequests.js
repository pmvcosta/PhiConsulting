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
import RequestRow from '../../components/RequestRow';

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
  const requests = user.requests;
  const profileType = session.user.name;
  let request = {};
  let requestList = [];

  if (requests !== undefined) {
    requests.forEach((item) => {
      request = {};
      console.log(`THE NAME IS ${item.campaignName}`);

      request['reqName'] = `${item.reqName}`;
      request['reqType'] = `${item.reqType}`;
      request['maxSpend'] = `${item.maxSpend}`;
      request['reqDeadline'] = `${item.reqDeadline}`;
      request['payMethod'] = `${item.payMethod}`;
      request['addNotes'] = `${item.addNotes}`;

      requestList.push(request);
    });
  }

  client.close();
  return {
    props: { session, requestList, profileType },
  };
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, percent: 100 };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  //redirect away if not authorized

  renderRows() {
    return this.props.requestList.map((request, index) => {
      return <RequestRow request={request} />;
    });
  }

  render() {
    const { session, requestList, profileType } = this.props;
    const { percent, isLoading } = this.state;
    const currentItem = 'pendingRequests';
    return (
      <DashBar
        session={session}
        currentItem={currentItem}
        profileType={profileType}
        isLoading={isLoading}
      >
        <br />
        <Segment color="red" raised padded>
          <Header
            as="h2"
            style={{ fontSize: '2em', color: 'rgba(182, 12, 12, 0.9)' }}
          >
            Pending Requests
          </Header>
          <Table celled padded color="red">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Request Name</Table.HeaderCell>
                <Table.HeaderCell singleLine>Request Type</Table.HeaderCell>
                <Table.HeaderCell>Maximum Budget</Table.HeaderCell>
                <Table.HeaderCell singleLine style={{ width: '200px' }}>
                  Delivery Deadline
                </Table.HeaderCell>
                <Table.HeaderCell singleLine>Payment Method</Table.HeaderCell>
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
