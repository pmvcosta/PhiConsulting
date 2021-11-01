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
        id="Intro"
        stretched
        stackable
        verticalAlign="middle"
        style={{
          padding: '2em 0em',
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: 'rgba(28, 173, 229, 1.0)',
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
            padding: '0em 3em',
            marginBottom: '40px',
          }}
        >
          <Grid.Column
            floated="left"
            width={16}
            style={{ paddingLeft: '4em', textAlign: 'center' }}
          >
            <Header as="h1" style={{ color: 'rgba(240,240,240,1.0)' }}>
              <b>An extended portfolio to meet your needs.</b>
              <Header.Subheader
                style={{ color: 'rgba(210,210,210,1.0)', padding: '0em 1em' }}
              >
                <br />
                PHI is a consulting agency that, through a network of
                established partners in the market, supports companies or
                individuals to benefit from the potential of blockchain and
                crypto assettechnology.
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(212, 32, 32, 0.0)',
            padding: '0em 1em',
            marginBottom: '70px',
          }}
        >
          <Grid.Column
            floated="left"
            width={8}
            style={{ paddingLeft: '4em', textAlign: 'center' }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={3000}
            >
              <Image
                src="/business-3d.png"
                size="large"
                centered
                style={{ marginBottom: '3px' }}
              />
            </Transition>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={8}
            style={{ paddingLeft: '4em', textAlign: 'left' }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <p
                style={{
                  fontSize: '1.5em',
                  color: 'rgba(240, 240, 240, 1.0)',
                  marginBottom: '20px',
                }}
              >
                <b>We provide everything you need, from A to Z!</b>
              </p>
            </Transition>
            <List>
              <List.Item style={{ marginBottom: '10px' }}>
                <List.Icon
                  name="check circle"
                  size="large"
                  style={{ color: 'rgba(240, 240, 240, 1.0)' }}
                />
                <List.Content
                  style={{
                    fontSize: '1.1em',
                    color: 'rgba(240, 240, 240, 1.0)',
                  }}
                >
                  PHI's portfolio includes access to the <b>financing models</b>{' '}
                  of companies and people in the alternative finance markets
                  (Alt-Fi), crowdsourcing platforms, peer-to-peer financing
                  (private-to-private), initial crypto-currency offering (ICO),
                  and various modalities of Decentralized Finance.
                </List.Content>
              </List.Item>
              <List.Item style={{ marginBottom: '10px' }}>
                <List.Icon
                  name="check circle"
                  size="large"
                  style={{ color: 'rgba(240, 240, 240, 1.0)' }}
                />
                <List.Content
                  style={{
                    fontSize: '1.1em',
                    color: 'rgba(240, 240, 240, 1.0)',
                  }}
                >
                  Nowadays the use of crypto-currency payment methods is
                  developing: we provide the means to create your own{' '}
                  <b>e-commerce</b> in crypto-currency.
                </List.Content>
              </List.Item>
              <List.Item style={{ marginBottom: '10px' }}>
                <List.Icon
                  name="check circle"
                  size="large"
                  style={{ color: 'rgba(240, 240, 240, 1.0)' }}
                />
                <List.Content
                  style={{
                    fontSize: '1.1em',
                    color: 'rgba(240, 240, 240, 1.0)',
                  }}
                >
                  The exponential growth of Uber-type on-demand services fuels
                  the <b>platform industry</b>. Bring your business into that
                  dimension and exponentiate your growth.
                </List.Content>
              </List.Item>
              <List.Item style={{ marginBottom: '10px' }}>
                <List.Icon
                  name="check circle"
                  size="large"
                  style={{ color: 'rgba(240, 240, 240,1.0)' }}
                />
                <List.Content
                  style={{
                    fontSize: '1.1em',
                    color: 'rgba(240, 240, 240, 1.0)',
                  }}
                >
                  It is still difficult to navigate these waters in terms of
                  legal framework: we have an international network of experts
                  to offer <b>legal consultancy</b> in the fields of our
                  products and services, so you feel safe in the steps you are
                  taking.
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
