import React, { Component, useEffect, useState } from 'react';
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
} from 'semantic-ui-react';
import { Link } from '../../routes';

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
          padding: '2em 0em',
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: 'rgba(255,255,255,1.0)',
          /* Create the parallax scrolling effect */
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no - repeat',
          backgroundSize: 'cover',
        }}
      >
        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(212, 32, 32, 0.0)',
            marginTop: '80px',
            marginRight: '10px',
          }}
        >
          <Grid.Column style={{ textAlign: 'center' }}>
            <Header as="h1">
              Financing Options
              <Header.Subheader>
                The world doesn't start and end at the bank. There's a whole
                world of Alt-Fi waiting for you!
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(212, 32, 32, 0.0)',
            marginTop: '30px',
            marginBottom: '60px',
          }}
        >
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '4em', textAlign: 'center' }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Image
                src="/business-3d-megafon-3.png"
                size="small"
                centered
                style={{ marginBottom: '3px', height: '150px', width: 'auto' }}
              />
            </Transition>
            <Header as="h3">
              Campaign Creation
              <Header.Subheader>and Growth</Header.Subheader>
            </Header>
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <p
                style={{
                  fontSize: '1.1em',
                  color: 'rgba(28, 173, 229, 1.0)',
                  marginBottom: '20px',
                }}
              >
                Compliance, pitch for investors, marketing, promotion, investor
                relations - We can handle it! ;
              </p>
            </Transition>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '4em', textAlign: 'center' }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Image
                src="/business-3d-bitcoin-1.png"
                size="small"
                centered
                style={{ marginBottom: '3px', height: '150px', width: 'auto' }}
              />
            </Transition>
            <Header as="h3">
              Real Estate and REITs Tokens
              <Header.Subheader>Blockchain Technology</Header.Subheader>
            </Header>
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <p
                style={{
                  fontSize: '1.1em',
                  color: 'rgba(28, 173, 229, 1.0)',
                  marginBottom: '20px',
                }}
              >
                Finance your real estate project; Trade your rents; Place your
                fund in the crypto-asset market.
              </p>
            </Transition>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '4em', textAlign: 'center' }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Image
                src="/business-3d-362.png"
                size="small"
                centered
                style={{ marginBottom: '3px', height: '150px', width: 'auto' }}
              />
            </Transition>
            <Header as="h3">
              Tokens on share capital
              <Header.Subheader>Blockchain Technology</Header.Subheader>
            </Header>
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <p
                style={{
                  fontSize: '1.1em',
                  color: 'rgba(28, 173, 229, 1.0)',
                  marginBottom: '20px',
                }}
              >
                Issue digital securities to finance your company in exchange for
                a stake in your share capital.
              </p>
            </Transition>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '4em', textAlign: 'center' }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Image
                src="/business-3d-285.png"
                size="small"
                centered
                style={{ marginBottom: '3px', height: '150px', width: 'auto' }}
              />
            </Transition>
            <Header as="h3">
              Finance your cause
              <Header.Subheader>Crowdsourcing</Header.Subheader>
            </Header>
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <p
                style={{
                  fontSize: '1.1em',
                  color: 'rgba(28, 173, 229, 1.0)',
                  marginBottom: '20px',
                }}
              >
                Obtain funds from the collective for your cause, and choose what
                benefits to offer as compensation.
              </p>
            </Transition>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '4em', textAlign: 'center' }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Image
                src="/business-3d-casual-life-3d-profit-growth.png"
                size="small"
                centered
                style={{ marginBottom: "3px", height: "150px", width: "auto" }}
              />
            </Transition>
            <Header as="h3">
              Financing solutions for Micro and SMEs, and Start-Ups.
              <Header.Subheader>Crowdsourcing</Header.Subheader>
            </Header>
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <p
                style={{
                  fontSize: "1.1em",
                  color: "rgba(28, 173, 229, 1.0)",
                  marginBottom: "20px",
                }}
              >
                We look for the AltFi solution that best suits your needs and
                growth requirements.
              </p>
            </Transition>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: "4em", textAlign: "center" }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Image
                src="/business-3d-briefcase-2.png"
                size="small"
                centered
                style={{ marginBottom: "3px", height: "150px", width: "auto" }}
              />
            </Transition>
            <Header as="h3">
              Sector financing
              <Header.Subheader>Blockchain & Crowdsourcing</Header.Subheader>
            </Header>
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <p
                style={{
                  fontSize: "1.1em",
                  color: "rgba(28, 173, 229, 1.0)",
                  marginBottom: "20px",
                }}
              >
                If you belong to a sector with associativism and growth
                potential, make an ICO and finance a group of companies with
                potential for return for investors.
              </p>
            </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
