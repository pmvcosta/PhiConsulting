import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const CustomCardSlide = ({ index, image, header, meta }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
      <Card>
        <Image wrapped ui={false} src={image} />
        <Card.Content>
          <Card.Header>{header}</Card.Header>
          <Card.Meta>{meta}</Card.Meta>
          <Card.Description>
            {header} wants to add you as a <strong>best friend</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic href={image} color="green">
            Approve
          </Button>
        </Card.Content>
      </Card>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
