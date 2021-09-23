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
  Rating,
} from "semantic-ui-react";
import { Link, Router } from "../../routes";
import { useRouter } from "next/router";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import DashBar from "../../components/DashLayout";
import Featured from "./featured";
import { useSession, getSession } from "next-auth/client";
//import { connectToDatabase } from "../../lib/db";

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

  //const client = await connectToDatabase();
  //const usersCollection = client.db().collection("users");

  //const userEmail = session.user.email;
  //const user = await usersCollection.findOne({ email: userEmail });
  const profileType = session.user.name;

  console.log(`The profileType is ${profileType}`);

  //client.close();
  return {
    props: { session, profileType },
  };
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, percent: 99 };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  //redirect away if not authorized

  render() {
    const { session, profileType } = this.props;
    const { percent, isLoading } = this.state;
    const currentItem = "completedRequests";
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
            style={{ fontSize: "2em", color: "rgba(182, 12, 12, 0.9)" }}
          >
            Completed Requests
          </Header>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Platform</Table.HeaderCell>
                <Table.HeaderCell singleLine>Funding Deadline</Table.HeaderCell>
                <Table.HeaderCell>Efficacy</Table.HeaderCell>
                <Table.HeaderCell singleLine style={{ width: "200px" }}>
                  Funding Progress
                </Table.HeaderCell>
                <Table.HeaderCell singleLine>Campaign Page</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h3" textAlign="center">
                    Seedrs
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>Power Output</Table.Cell>
                <Table.Cell>
                  <Rating
                    icon="star"
                    defaultRating={4}
                    maxRating={5}
                    disabled
                  />
                </Table.Cell>
                <Table.Cell textAlign="right">
                  <Progress percent={percent} progress indicating>
                    <p>{percent * 150 * 0.01}.000/150.000€ </p>
                  </Progress>
                </Table.Cell>
                <Table.Cell textAlign="right">
                  <Button
                    secondary
                    style={{ backgroundColor: "rgba(182, 12, 12, 0.9)" }}
                  >
                    Check Campaign
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  Creatine supplementation is the reference compound for
                  increasing muscular creatine levels; there is variability in
                  this increase, however, with some nonresponders.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h3" textAlign="center">
                    PPL
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>Weight</Table.Cell>
                <Table.Cell>
                  <Rating
                    icon="star"
                    defaultRating={3}
                    maxRating={5}
                    disabled
                  />
                </Table.Cell>
                <Table.Cell textAlign="right">
                  <Progress percent={percent * 0.5} progress indicating>
                    {percent * 0.5 * 25 * 0.01}.000/25.000€
                  </Progress>
                </Table.Cell>
                <Table.Cell textAlign="right">
                  <Button
                    secondary
                    style={{ backgroundColor: "rgba(182, 12, 12, 0.9)" }}
                  >
                    Check Campaign
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  Creatine is the reference compound for power improvement, with
                  numbers from one meta-analysis to assess potency
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </DashBar>
    );
  }
}

export default Dashboard;
