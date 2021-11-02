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
        id="Platforms"
        stretched
        stackable
        verticalAlign="top"
        style={{
          padding: "0em 0em",
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: "rgba(0,0,0,1.0)",
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
            padding: "2em 0em",
            backgroundColor: "rgba(0, 0, 0, 1.0)",
            marginTop: "70px",
            marginBottom: "20px",
          }}
        >
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          />
          <Grid.Column
            floated="left"
            width={12}
            style={{ paddingLeft: "0em", textAlign: "center" }}
          >
            <Header as="h1" style={{ color: "rgba(240,240,240,1.0)" }}>
              Platforms
              <Header.Subheader style={{ fontSize: "0.7em" }}>
                Enter the Blockchain: Join the new technological revolution!
              </Header.Subheader>
            </Header>
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
            backgroundColor: "rgba(0, 0, 0, 1.0)",
            marginTop: "15px",
            paddingBottom: "8em",
          }}
        >
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          />
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          >
            <List>
              <List.Item style={{ marginBottom: "10px" }}>
                <List.Header
                  style={{
                    fontSize: "1.3em",
                    paddingBottom: "1em",
                    color: "rgba(240,240,240,1.0)",
                  }}
                >
                  <Icon
                    name="check circle"
                    style={{ color: "rgba(28, 173, 229, 1.0)" }}
                  />
                  Multi-service applications for on-demand services
                </List.Header>
                <List.Description
                  style={{
                    fontSize: "1.2em",
                    lineHeight: "22px",
                    color: "rgba(200,200,200,1.0)",
                  }}
                >
                  The concept of{" "}
                  <b style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                    on-demand services
                  </b>{" "}
                  exploded with the advent of Uber. PHI supports companies that
                  want to transport their business to digital using an on-demand
                  delivery model, through a compatible, white-branded Android
                  and iOS application, allowing them to scale their business and
                  retain their clientele.
                </List.Description>
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
                <List.Header
                  style={{
                    fontSize: "1.3em",
                    paddingBottom: "1em",
                    color: "rgba(240,240,240,1.0)",
                  }}
                >
                  <Icon
                    name="check circle"
                    style={{ color: "rgba(28, 173, 229, 1.0)" }}
                  />
                  Logistics, Fleet Management, IoT and Telematics
                </List.Header>
                <List.Description
                  style={{
                    fontSize: "1.2em",
                    lineHeight: "22px",
                    color: "rgba(200,200,200,1.0)",
                  }}
                >
                  The{" "}
                  <b style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                    turnkey solutions
                  </b>{" "}
                  we facilitate using blockchain technology enable you to build
                  features that elevate the efficiency of your supply chain or
                  the management your fleet to new levels, with high added value
                  and monitoring power.
                </List.Description>
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
                <List.Header
                  style={{
                    fontSize: "1.3em",
                    paddingBottom: "1.8em",
                    color: "rgba(240,240,240,1.0)",
                  }}
                >
                  <Icon
                    name="check circle"
                    style={{ color: "rgba(28, 173, 229, 1.0)" }}
                  />
                  <b>Crypto-store</b>
                </List.Header>
                <List.Description
                  style={{
                    fontSize: "1.2em",
                    lineHeight: "22px",
                    color: "rgba(200,200,200,1.0)",
                  }}
                >
                  Don't miss out on the most advanced global trend of industries
                  adhering to crypto-currency payment methods. Create your very
                  own{" "}
                  <b style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                    crypto e-commerce store
                  </b>
                  .
                </List.Description>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "left" }}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
