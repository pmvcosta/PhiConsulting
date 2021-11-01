import React from 'react';
import { createMedia } from '@artsy/fresnel';
import {
  Menu,
  Sidebar,
  Button,
  Segment,
  Container,
  Transition,
  Visibility,
  Header,
  Icon,
  Grid,
  Divider,
  List,
  Image,
} from 'semantic-ui-react';
import { Link } from '../routes';
import PropTypes from 'prop-types';
import ScrollAppear from './ScrollLayout';
import Newsletter from '../pages/newsletter';

/* Heads up!
 * HomepageHeading uses inline styling,
 however it's not the best practice. Use CSS or styled
 * components for such things.
 */

const HomepageHeading = ({ mobile }) => (
  <Segment
    fluid
    style={{ padding: '0em 0em' }}
    vertical
    style={{
      backgroundColor: 'rgba(212, 32, 32, 0.0)',
    }}
  >
    <Grid
      stretched
      stackable
      verticalAlign="middle"
      style={{
        padding: '1em 1em',
        /*backgroundImage: 'url(/backgnd.jpg)',*/
        backgroundColor: 'rgba(0,0,0,1.0)',
        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        marginTop: !mobile ? '20px' : '',
      }}
    >
      <Grid.Row
        fluid
        style={{
          backgroundColor: 'rgba(212, 32, 32, 0.0)',
          marginBottom: '40px',
        }}
      >
        <Grid.Column floated="right" width={9} style={{ paddingRight: '5em' }}>
          <Transition transitionOnMount="true" animation="fade" duration={3000}>
            <Image src="/logo.png" size="big" centered />
          </Transition>
        </Grid.Column>
        <Grid.Column
          floated="left"
          width={7}
          style={{ paddingLeft: '4em', textAlign: 'left' }}
        >
          <Transition transitionOnMount="true" animation="fade" duration={500}>
            <Header
              style={{
                marginBottom: '20px',
              }}
            >
              <h3
                style={{
                  fontSize: '3em',
                  color: 'rgba(28, 173, 229, 1.0)',
                  marginBottom: '-30px',
                  lineHeight: '60px',
                }}
              >
                Business Development in
                <br />
              </h3>
              <h3
                style={{
                  fontSize: '3em',
                  color: 'rgba(255, 255, 255, 1.0)',
                  marginBottom: '-40px',
                }}
              >
                Blockchain
              </h3>
              <h3
                style={{
                  fontSize: '3em',
                  color: 'rgba(28, 173, 229, 1.0)',
                  marginBottom: '-35px',
                }}
              >
                and
              </h3>
              <h3
                style={{
                  fontSize: '3em',
                  color: 'rgba(255, 255, 255, 1.0)',
                }}
              >
                Crowdsourcing
              </h3>
            </Header>
          </Transition>

          <Transition transitionOnMount="true" animation="fade" duration={500}>
            <p
              style={{
                fontSize: '1.5em',
                color: 'rgba(28, 173, 229, 1.0)',
                marginBottom: '20px',
              }}
            >
              The only Iberian business support agency dedicated for Blockchain
              & Crowdsourcing
            </p>
          </Transition>
          <Container
            style={{
              padding: mobile ? '0em 1em' : '',
              paddingRight: !mobile ? '1em' : '1em',
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
      </Grid.Row>
    </Grid>
  </Segment>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
