import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
import React, { Component } from 'react';
import { Card, Button, Image, Transition } from 'semantic-ui-react';

//const CustomCardSlide = ({ index, image, header, meta }) => (
class CustomCardSlide extends Component {
  state = {
    open: false,
  };

  showModal = () => {
    this.setState({ open: true });
  };

  hideModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    const { index } = this.props;
    const numImagesAvailable = 130;
    const collectionID = 3348877;
    let imageWidth = 200 + Math.floor(Math.random() * 60) * 20;
    //let imageHeight = imageWidth;
    let randomNumber = Math.floor(Math.random() * numImagesAvailable) * 10;
    return (
      <Slide index={index}>
        <div style={{ padding: 6 }}>
          <Image
            fluid
            src={`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageWidth}/?sig=${randomNumber}`}
            rounded
            bordered
          />
        </div>
      </Slide>
    );
  }
}

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
