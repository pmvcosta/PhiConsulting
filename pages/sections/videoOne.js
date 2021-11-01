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
  List,
  Image,
} from 'semantic-ui-react';
import { Link } from '../../routes';

class LayoutMenu extends Component {
  render() {
    const { isTop, fixed, logoutHandler, session } = this.props;

    return (
      <Grid
        id="Video"
        stretched
        stackable
        verticalAlign="middle"
        style={{
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: 'rgba(28, 173, 229, 0.0)',
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
            padding: '2em 0em',
            backgroundColor: 'rgba(28, 173, 229, 0.0)',
            marginTop: '5em',
            marginRight: '10px',
          }}
        >
          <Grid.Column
            floated="left"
            width={16}
            style={{
              paddingLeft: '18em',
              paddingRight: '18em',
              textAlign: 'center',
            }}
          >
            <Header as="h1" style={{ marginBottom: '40px' }}>
              A Brief Introduction to
              <br /> the World of Alternative Finance
              <Header.Subheader
                style={{ marginTop: '15px', fontSize: '0.6em' }}
              >
                We believe it's important for everyone to be well informed on
                the main alternative sources of funding. This{' '}
                <b>TEDxCambridge talk</b> provides a nice and concise
                introduction:
                <br />
              </Header.Subheader>
            </Header>
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <Embed
                id="gfFvQg5Ivmw"
                placeholder="/video.png"
                source="youtube"
                style={{
                  borderRadius: '0.8rem',
                  overflow: 'hidden',
                }}
              />
            </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
