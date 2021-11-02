import React, { Component, useEffect, useState } from "react";
import {
  Menu,
  Sidebar,
  Button,
  Segment,
  Container,
  Visibility,
  Transition,
  Header,
  Icon,
  Grid,
  Divider,
  List,
  Image,
} from "semantic-ui-react";
import { Link } from "../../routes";

class LayoutMenu extends Component {
  state = {
    isInverted: false,
    isInvertedL: false,
    isInvertedOut: false,
  };
  render() {
    const { isTop, fixed, logoutHandler, session } = this.props;
    const { isInverted, isInvertedL, isInvertedOut } = this.state;

    return (
      <Grid
        id="Intro"
        stretched
        stackable
        verticalAlign="top"
        style={{
          padding: "2em 0em",
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: "rgba(28, 173, 229, 1.0)",
          /* Create the parallax scrolling effect */
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no - repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid.Row
          fluid
          style={{
            backgroundColor: "rgba(212, 32, 32, 0.0)",
            marginTop: "80px",
            padding: "0em 3em",
            marginBottom: "40px",
          }}
        >
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          ></Grid.Column>
          <Grid.Column
            floated="left"
            width={12}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          >
            <Header as="h1" style={{ color: "rgba(240,240,240,1.0)" }}>
              <b>An extended portfolio to meet your needs.</b>
              <Header.Subheader
                style={{ color: "rgba(0,33,89, 1.0)", padding: "0em 1em" }}
              >
                <br />
                PHI Consulting is an agency that supports companies and
                individuals making the best out of blockchain, crypto and
                crowdsourcing, through a network of partner providers.
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          ></Grid.Column>
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            backgroundColor: "rgba(212, 32, 32, 0.0)",
            padding: "0em 3em",
            marginBottom: "2em",
          }}
        >
          <Grid.Column
            floated="left"
            width={2}
            style={{
              paddingLeft: "4em",

              textAlign: "left",
            }}
          ></Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{
              paddingLeft: "0em",
              textAlign: "left",
            }}
          >
            <List>
              <List.Item style={{ marginBottom: "10px" }}>
                <List.Icon
                  name="check circle"
                  size="large"
                  style={{ color: "rgba(240, 240, 240, 1.0)" }}
                />
                <List.Content
                  style={{
                    fontSize: "1.3em",
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                >
                  PHI's portfolio includes access to the <b>financing models</b>{" "}
                  of companies and people in the alternative finance markets
                  (AltFi), crowdsourcing platforms, peer-to-peer financing
                  (private-to-private), initial crypto-currency offering (ICO),
                  and various modalities of Decentralized Finance.
                  <br />
                  <a
                    style={{ color: "rgba(0,33,89, 1.0)" }}
                    href="/#ServiceGrid"
                  >
                    Learn More
                    <Icon
                      name="angle right"
                      style={{ color: "rgba(0,33,89, 1.0)" }}
                    />
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          >
            <List>
              <List.Item style={{ marginBottom: "10px" }}>
                <List.Icon
                  name="check circle"
                  size="large"
                  style={{ color: "rgba(240, 240, 240, 1.0)" }}
                />
                <List.Content
                  style={{
                    fontSize: "1.3em",
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                >
                  The exponential growth of Uber-type on-demand services fuels
                  the <b>platform</b> industry. Bring your business into the
                  on-demand platforms and exponentiate your growth.
                  <br />
                  <a style={{ color: "rgba(0,33,89, 1.0)" }} href="/#Platforms">
                    Learn More
                    <Icon
                      name="angle right"
                      style={{ color: "rgba(0,33,89, 1.0)" }}
                    />
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          >
            <List>
              <List.Item style={{ marginBottom: "10px" }}>
                <List.Icon
                  name="check circle"
                  size="large"
                  style={{ color: "rgba(240, 240, 240,1.0)" }}
                />
                <List.Content
                  style={{
                    fontSize: "1.3em",
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                >
                  It is still difficult to navigate these waters in terms of
                  legal framework: we have an international network of experts
                  to offer <b>legal consultancy</b> in the fields of our
                  products and services, so you feel safe in the steps you are
                  taking.
                  <br />
                  <a
                    style={{ color: "rgba(0,33,89, 1.0)" }}
                    href="/#Juryconsult"
                  >
                    Learn More
                    <Icon
                      name="angle right"
                      style={{ color: "rgba(0,33,89, 1.0)" }}
                    />
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          />
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            backgroundColor: "rgba(212, 32, 32, 0.0)",
            padding: "0em 3em",
            marginBottom: "70px",
          }}
        >
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          ></Grid.Column>
          <Grid.Column
            floated="left"
            width={8}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          ></Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
