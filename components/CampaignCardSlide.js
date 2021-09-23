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
    //const numImagesAvailable = 321; //how many total images are in the collection you are pulling from
    //const collectionID = 1788650; //the collection ID from the original url
    const numImagesAvailable = 1300;
    const collectionID = 3348877;

    let imageWidth = 200 + Math.floor(Math.random() * 120) * 10;
    let imageHeight = imageWidth;
    let randomNumber = Math.floor(Math.random() * numImagesAvailable);
    const { index } = this.props;
    return (
      <Slide index={index}>
        <div style={{ padding: 6 }}>
          <Image
            fluid
            src={`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`}
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
