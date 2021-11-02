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
        id="Juryconsult"
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
        }}
      >
        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
            marginTop: '50px',
            paddingTop: '3em',
          }}
        >
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: '4em', textAlign: 'left' }}
          />
          <Grid.Column
            floated="left"
            width={12}
            style={{ paddingLeft: '2em', textAlign: 'center' }}
          >
            <Header as="h1" style={{ color: 'rgba(240,240,240,1.0)' }}>
              Legal Consultancy
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={2}
            style={{ paddingLeft: '4em', textAlign: 'left' }}
          />
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            padding: '1em 0em',
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
            paddingBottom: '2em',
          }}
        >
          <Grid.Column
            floated="left"
            width={4}
            style={{
              textAlign: 'center',
            }}
          />
          <Grid.Column
            floated="left"
            width={8}
            style={{
              textAlign: 'center',
            }}
          >
            <Header as="h2" style={{ marginBottom: '10px', marginTop: '0px' }}>
              Innovate, the safe way!
              <Header.Subheader
                style={{ marginTop: '15px', fontSize: '0.6em' }}
              >
                Our team of jurisconsults has extensive experience in:
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{
              textAlign: 'center',
            }}
          />
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
            paddingBottom: '10em',
          }}
        >
          <Grid.Column
            floated="left"
            width={4}
            style={{
              textAlign: 'center',
            }}
          />
          <Grid.Column
            floated="left"
            width={8}
            style={{
              textAlign: 'left',
            }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <Accordion inverted exclusive={false}>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b style={{ fontSize: '1.3em' }}>Regulation</b>
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 0}
                  animation="fade down"
                  unmountOnHide={true}
                  duration={160}
                >
                  <Accordion.Content
                    active={activeIndex === 0}
                    style={{
                      overflow: 'hidden',
                      transition: 'max-height 1s ease-in-out',
                      marginBottom: '0.8em',
                    }}
                  >
                    <p>
                      We frame your project and support the preparation of
                      contractual parts and information reporting, depending on
                      the legal order where you want to design your activity.
                    </p>
                  </Accordion.Content>
                </Transition>
                <br />
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b style={{ fontSize: '1.3em' }}>Tax legislation</b>
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 1}
                  animation="fade down"
                  duration={160}
                >
                  <Accordion.Content
                    active={activeIndex === 1}
                    style={{ marginBottom: '0.8em' }}
                  >
                    <p>Ensure compliance with all applicable tax laws.</p>
                  </Accordion.Content>
                </Transition>
                <br />
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b style={{ fontSize: '1.3em' }}>Fraud and crime</b>
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 2}
                  animation="fade down"
                  duration={160}
                >
                  <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Protect your business against fraud and possible criminal
                      offences.
                    </p>
                  </Accordion.Content>
                </Transition>
              </Accordion>
            </Transition>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={4}
            style={{
              textAlign: 'center',
            }}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
