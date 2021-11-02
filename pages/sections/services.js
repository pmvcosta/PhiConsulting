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
        id="ServiceGrid"
        stretched
        stackable
        verticalAlign="middle"
        style={{
          padding: "2em 0em",
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: "rgba(255,255,255,1.0)",
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
            marginTop: "50px",
            marginRight: "0px",
          }}
        >
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "0em", textAlign: "center" }}
          />
          <Grid.Column width={8} style={{ textAlign: "center" }}>
            <Header as="h1">
              Financing
              <Header.Subheader style={{ fontSize: "0.7em" }}>
                The world doesn't start and end at the bank.
                <br /> There's a whole world of Alt-Fi waiting for you!
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          />
        </Grid.Row>

        <Grid.Row
          fluid
          style={{
            backgroundColor: "rgba(212, 32, 32, 0.0)",
            marginTop: "30px",
          }}
        >
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          />

          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "0em", textAlign: "center" }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Icon
                name="bullhorn"
                size="huge"
                centered
                style={{
                  width: "auto",
                  color: "rgba(28, 173, 229, 1.0)",
                }}
              />
            </Transition>
            <Header as="h3" style={{ color: "rgba(28, 173, 229, 1.0)" }}>
              Crowdsourcing Campaign Creation & Placement
              <Transition
                transitionOnMount="true"
                animation="fade"
                duration={500}
              >
                <Header.Subheader
                  style={{
                    fontSize: "0.9em",
                    marginBottom: "20px",
                  }}
                >
                  Production of pitch for investors, marketing campaign,
                  handling investor relations, ensure compliance, reliable asset
                  valuation
                </Header.Subheader>
              </Transition>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Icon
                name="building outline"
                size="huge"
                centered
                style={{
                  width: "auto",
                  color: "rgba(28, 173, 229, 1.0)",
                }}
              />
            </Transition>
            <Header as="h3" style={{ color: "rgba(28, 173, 229, 1.0)" }}>
              Funding and Monetization of Real estate
              <Transition
                transitionOnMount="true"
                animation="fade"
                duration={500}
              >
                <Header.Subheader
                  style={{
                    fontSize: "0.9em",
                    marginBottom: "20px",
                  }}
                >
                  Finance your real estate project; Trade your rents; Place your
                  asset in the crypto-asset market.
                </Header.Subheader>
              </Transition>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Icon
                name="money bill alternate outline"
                size="huge"
                centered
                style={{
                  width: "auto",
                  color: "rgba(28, 173, 229, 1.0)",
                }}
              />
            </Transition>
            <Header as="h3" style={{ color: "rgba(28, 173, 229, 1.0)" }}>
              Tokens on share capital
              <Transition
                transitionOnMount="true"
                animation="fade"
                duration={500}
              >
                <Header.Subheader
                  style={{
                    fontSize: "0.9em",
                    marginBottom: "20px",
                  }}
                >
                  Issue digital securities to finance your company in exchange
                  for a stake in your share capital.
                </Header.Subheader>
              </Transition>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          />
        </Grid.Row>

        <Grid.Row
          fluid
          style={{
            backgroundColor: "rgba(212, 32, 32, 0.0)",
            marginBottom: "60px",
          }}
        >
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          />
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "0em", textAlign: "center" }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Icon
                name="child"
                size="huge"
                centered
                style={{
                  width: "auto",
                  color: "rgba(28, 173, 229, 1.0)",
                }}
              />
            </Transition>
            <Header as="h3" style={{ color: "rgba(28, 173, 229, 1.0)" }}>
              Finance your cause
              <Transition
                transitionOnMount="true"
                animation="fade"
                duration={500}
              >
                <Header.Subheader
                  style={{
                    fontSize: "0.9em",
                    marginBottom: "20px",
                  }}
                >
                  Obtain funds from the collective for your cause, and choose
                  what benefits to offer as compensation.
                </Header.Subheader>
              </Transition>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Icon
                name="briefcase"
                size="huge"
                centered
                style={{
                  width: "auto",
                  color: "rgba(28, 173, 229, 1.0)",
                }}
              />
            </Transition>
            <Header as="h3" style={{ color: "rgba(28, 173, 229, 1.0)" }}>
              Financing solutions for Micro and SMEs, and Start-Ups.
              <Transition
                transitionOnMount="true"
                animation="fade"
                duration={500}
              >
                <Header.Subheader
                  style={{
                    fontSize: "0.9em",
                    marginBottom: "20px",
                  }}
                >
                  We look for the AltFi solution that best suits your needs and
                  growth requirements.
                </Header.Subheader>
              </Transition>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Icon
                name="industry"
                size="huge"
                centered
                style={{
                  width: "auto",
                  color: "rgba(28, 173, 229, 1.0)",
                }}
              />
            </Transition>
            <Header as="h3" style={{ color: "rgba(28, 173, 229, 1.0)" }}>
              Sector financing
              <Transition
                transitionOnMount="true"
                animation="fade"
                duration={500}
              >
                <Header.Subheader
                  style={{
                    fontSize: "0.9em",
                    marginBottom: "20px",
                  }}
                >
                  If you belong to a sector with associativism and growth
                  potential, make an ICO and finance a group of companies with
                  potential for return for investors.
                </Header.Subheader>
              </Transition>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
