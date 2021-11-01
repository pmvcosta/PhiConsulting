import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
import React from 'react';
import { Card, Button, Image, Reveal, Icon } from 'semantic-ui-react';
import { Link, Router } from '../routes';

const CustomCardSlide = ({ icon, title, text, index }) => (
  <Slide index={index}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Reveal animated="fade">
        <Reveal.Content visible centered style={{ pointerEvents: 'none' }}>
          <Card centered style={{ width: '300px', height: '250px' }}>
            <Card.Content textAlign="center">
              <br />
              <br />
              <Icon
                name={icon}
                size="massive"
                style={{ color: 'rgba(28, 173, 229, 1.0)' }}
              />

              <Card.Header as="h2" centered style={{ fontSize: '1.5em' }}>
                <br />
                {title}
              </Card.Header>
            </Card.Content>
          </Card>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Card
            centered
            style={{
              width: '300px',
              height: '250px',
              backgroundColor: 'rgba(28, 173, 229, 1.0)',
            }}
          >
            <Card.Content textAlign="center">
              <Card.Header
                as="h2"
                style={{ fontSize: '1.2em', color: 'white' }}
              >
                <br />
                {text}
              </Card.Header>
              <Link route="/subscribe">
                <a>
                  <Button color="white">Learn More</Button>
                </a>
              </Link>
            </Card.Content>
          </Card>
        </Reveal.Content>
      </Reveal>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
