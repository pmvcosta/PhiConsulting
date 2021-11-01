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
        id="Platforms"
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
          marginRight: '10px',
          marginTop: '30px',
        }}
      >
        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(212, 32, 32, 0.0)',
            marginTop: '30px',
          }}
        >
          <Grid.Column
            floated="left"
            width={8}
            style={{ paddingLeft: '4em', textAlign: 'left' }}
          >
            <Header as="h1">
              Enter the Blockchain
              <Header.Subheader
                style={{
                  fontSize: '0.7em',
                  color: 'rgba(28, 173, 229, 1.0)',
                  marginBottom: '5px',
                  marginTop: '5px',
                }}
              >
                Join the new technological revolution!
              </Header.Subheader>
            </Header>

            <List>
              <List.Item style={{ marginBottom: '10px' }}>
                <List.Header
                  style={{
                    fontSize: '1.3em',
                  }}
                >
                  <Icon
                    name="check circle"
                    size="large"
                    style={{ color: 'rgba(28, 173, 229, 1.0)' }}
                  />
                  Multi-service applications for on-demand services
                </List.Header>
                <List.Description>
                  The concept of on-demand services exploded with the advent of
                  Uber. PHI supports companies that want to transport their
                  business to digital using an on-demand delivery model, through
                  a compatible, white-branded Android and iOS application,
                  allowing them to scale their business and retain their
                  clientele.
                </List.Description>
              </List.Item>
              <List.Item style={{ marginBottom: '10px' }}>
                <List.Header
                  style={{
                    fontSize: '1.3em',
                  }}
                >
                  <Icon
                    name="check circle"
                    size="large"
                    style={{ color: 'rgba(28, 173, 229, 1.0)' }}
                  />
                  Logistics, Fleet Management, IoT and Telematics
                </List.Header>
                <List.Description>
                  The turnkey solutions we facilitate using blockchain
                  technology enable you to build features that elevate the
                  efficiency of your supply chain or the management your fleet
                  to new levels, with high added value and monitoring power.
                </List.Description>
              </List.Item>
              <List.Item style={{ marginBottom: '10px' }}>
                <List.Header
                  style={{
                    fontSize: '1.3em',
                  }}
                >
                  <Icon
                    name="check circle"
                    size="large"
                    style={{ color: 'rgba(28, 173, 229, 1.0)' }}
                  />
                  Crypto-store
                </List.Header>
                <List.Description>
                  Don't miss out on the most advanced global trend of industries
                  adhering to crypto-currency payment methods. Create your very
                  own crypto e-commerce store.
                </List.Description>
              </List.Item>
            </List>
          </Grid.Column>
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
                src="/business-3d-profit.png"
                size="small"
                centered
                style={{ marginBottom: '3px', height: '450px', width: 'auto' }}
              />
            </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
