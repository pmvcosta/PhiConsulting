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
            padding: '5em 0em',
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
            paddingBottom: '2em',
            paddingTop: '5em',
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
            <Header as="h1" style={{ marginBottom: '10px', marginTop: '30px' }}>
              Innovate, the safe way!
              <Header.Subheader
                style={{ marginTop: '15px', fontSize: '0.6em' }}
              >
                Our team of jurisconsults has extensive experience in:
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
            paddingBottom: '8em',
          }}
        >
          <Grid.Column
            floated="left"
            width={16}
            style={{
              paddingLeft: '20em',
              paddingRight: '18em',
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
                  <b style={{ fontSize: '1.3em' }}>Business Expansion</b>
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
                    <p>
                      The concept of <b>on-demand services</b> exploded with the
                      advent of Uber. PHI supports companies that want to
                      transport their business to digital using an{' '}
                      <b>on-demand delivery</b> model, through a compatible,
                      white-branded Android and iOS application, allowing them
                      to scale their business and retain their clientele.
                    </p>
                  </Accordion.Content>
                </Transition>
                <br />
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b style={{ fontSize: '1.3em' }}>Tax legislation</b>
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 2}
                  animation="fade down"
                  duration={160}
                >
                  <Accordion.Content
                    active={activeIndex === 2}
                    style={{ marginBottom: '0.8em' }}
                  >
                    <p>Ensure compliance with all applicable tax laws.</p>
                  </Accordion.Content>
                </Transition>
                <br />
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b style={{ fontSize: '1.3em' }}>Fraud and crime</b>
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 3}
                  animation="fade down"
                  duration={160}
                >
                  <Accordion.Content active={activeIndex === 3}>
                    <p>
                      Protect your business against fraud and possible criminal
                      offences.
                    </p>
                  </Accordion.Content>
                </Transition>
              </Accordion>
            </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
