import React, { Component } from 'react';
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Image,
  Reveal,
  Icon,
  Sidebar,
  Menu,
  Checkbox,
} from 'semantic-ui-react';
import { Link } from '../../routes';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import DashBar from '../../components/DashLayout';
import Featured from './featured';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1080,
  },
});

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <DashBar>
        <Segment basic textAlign="center">
          <Header
            as="h2"
            style={{ fontSize: '3em', color: 'rgba(212, 32, 32, 0.9)' }}
          >
            <br />
            Invest in Yourself, Seek your Vocation
          </Header>
          <br />
          <br />
        </Segment>
        <Segment basic textAlign="center">
          <Header
            as="h2"
            style={{ fontSize: '2em', color: 'rgba(182, 12, 12, 0.9)' }}
          >
            Featured Events
          </Header>
        </Segment>
        <Container>
          <Featured />
          <br />
          <br />
          <Card.Group itemsPerRow={4}>
            <Card color="red" image={'/Logo2.png'} />
            <Card color="orange" image={'/Logo2.png'} />
            <Card color="yellow" image={'/Logo2.png'} />
            <Card color="olive" image={'/Logo2.png'} />
            <Card color="green" image={'/Logo2.png'} />
            <Card color="teal" image={'/Logo2.png'} />
            <Card color="blue" image={'/Logo2.png'} />
            <Card color="violet" image={'/Logo2.png'} />
            <Card color="purple" image={'/Logo2.png'} />
            <Card color="pink" image={'/Logo2.png'} />
            <Card color="brown" image={'/Logo2.png'} />
            <Card color="grey" image={'/Logo2.png'} />
          </Card.Group>
        </Container>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </DashBar>
    );
  }
}

export default Dashboard;
