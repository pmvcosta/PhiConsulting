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
  Embed,
  Divider,
  Accordion,
  List,
  Image,
} from 'semantic-ui-react';
import { Link } from '../../routes';
import Newsletter from '../newsletter';
import ScrollAppear from '../../components/ScrollLayout';

class LayoutMenu extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { isTop, fixed, logoutHandler, session } = this.props;
    const { activeIndex } = this.state;

    return (
      <Grid
        id="Contact"
        stretched
        stackable
        verticalAlign="middle"
        style={{
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: 'rgba(28, 173, 229, 1.0)',
          /* Create the parallax scrolling effect */
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no - repeat',
          backgroundSize: 'cover',
          paddingTop: '3em',
        }}
      >
        <Grid.Row
          fluid
          verticalAlign="middle"
          style={{
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
            padding: '1em 6em',
            width: '30em',
          }}
        >
          <Grid.Column
            floated="left"
            width={16}
            style={{
              padding: '0em 6em',
              textAlign: 'center',
            }}
          >
            <Header
              as="h1"
              style={{
                marginBottom: '10px',
                marginTop: '10px',
                color: 'rgba(240,240,240,1.0)',
              }}
            >
              Contact Us!
              <Header.Subheader
                style={{ marginTop: '15px', fontSize: '0.6em' }}
              >
                Come and explore the possibilities that blockchain crypto-assets
                can offer you!
                <br />
                <br />
                Subscribe to our newsletter! By doing so, we'll be able to
                contact you directly. You'll be kept up to date with the latest
                developments and you'll be able to talk directly to PHI and its
                partners.
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(212, 32, 32, 0.0)',
            marginBottom: '40px',
          }}
        >
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '4em', textAlign: 'left' }}
          ></Grid.Column>
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '1em', textAlign: 'left' }}
          >
            <Container
              style={{
                padding: '0em 1em',
                paddingRight: '1em',
              }}
            >
              <Transition
                transitionOnMount="true"
                animation="fade"
                duration={500}
              >
                <Newsletter />
              </Transition>
            </Container>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={5}
            style={{ paddingLeft: '4em', textAlign: 'left' }}
          ></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;

/*
<Grid.Row
  fluid
  style={{
    backgroundColor: 'rgba(28, 173, 229, 1.0)',
    padding: '0em 8em',
    paddingBottom: '8em',
    textAlign: 'center',
  }}
>
  <Grid.Column width={7}>
    <h1 style={{ fontSize: '1.3em' }}>Tlm:</h1>
  </Grid.Column>
  <Grid.Column width={7}>
    <h1 style={{ fontSize: '1.3em' }}>Email:</h1>
  </Grid.Column>
</Grid.Row>
*/
