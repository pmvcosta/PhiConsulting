import { CarouselProvider, Slider } from 'pure-react-carousel';
import React, { Component } from 'react';
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Message,
  Header,
  Divider,
  Image,
  Reveal,
  Icon,
} from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CustomCardSlide from '../../components/CampaignCardSlide';
import CustomDotGroup from '../../components/CustomDotGroup';

class CardCarousel extends Component {
  render() {
    const { width } = this.props;
    return (
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1.3}
        isIntrinsicHeight="false"
        isPlaying="true"
        interval="4000"
        touchEnabled="false"
        infinite="false"
        totalSlides={5}
        visibleSlides={1}
      >
        <Slider
          style={{
            width: width,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <CustomCardSlide
            header="Elliot Baker"
            image="/backgnd11.jpg"
            index={1}
            meta="Friend"
          />
          <CustomCardSlide
            header="Steve Sanders"
            image="/backgnd11.jpg"
            index={1}
            meta="Friend"
          />
          <CustomCardSlide
            image="/backgnd11.jpg"
            index={2}
            header="Matthew House"
            meta="Friend"
          />
          <CustomCardSlide
            header="Elliot Baker"
            image="/backgnd11.jpg"
            index={2}
            meta="Friend"
          />
          <CustomCardSlide
            header="Steve Sanders"
            image="/backgnd11.jpg"
            index={2}
            meta="Friend"
          />
        </Slider>
      </CarouselProvider>
    );
  }
}

export default CardCarousel;
