import React from 'react';
import { createMedia } from '@artsy/fresnel';
import {
  Menu,
  Sidebar,
  Button,
  Segment,
  Container,
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

/* Heads up!
 * HomepageHeading uses inline styling,
 however it's not the best practice. Use CSS or styled
 * components for such things.
 */

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content=""
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: '900',
        marginBottom: 0,
        marginTop: mobile ? '1.3em' : '2.8em',
      }}
    />
    <Image src="/logo.png" size="large" centered />
    <Header
      as="h2"
      content="Democratise your property! Reach new investors!"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: '900',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Link route="/subscribe">
      <a>
        <Button
          primary
          size="huge"
          style={{ marginBottom: mobile ? '4.5em' : '5.5em' }}
        >
          Get Started
          <Icon name="right arrow" />
        </Button>
      </a>
    </Link>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
