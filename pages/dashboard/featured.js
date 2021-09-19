import { CarouselProvider, Slider } from 'pure-react-carousel';
import React from 'react';
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

import CustomCardSlide from '../../components/CustomCardSlide';
import CustomDotGroup from '../../components/CustomDotGroup';

const CardCarousel = () => (
  <Container>
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.3}
      isIntrinsicHeight="false"
      touchEnabled="false"
      infinite="false"
      totalSlides={5}
      visibleSlides={3}
    >
      <Slider>
        <CustomCardSlide
          header="Elliot Baker"
          image="/backgnd.jpg"
          index={1}
          meta="Friend"
        />
        <CustomCardSlide
          header="Steve Sanders"
          image="/backgnd.jpg"
          index={1}
          meta="Friend"
        />
        <CustomCardSlide
          image="/backgnd.jpg"
          index={2}
          header="Matthew House"
          meta="Friend"
        />
        <CustomCardSlide
          header="Elliot Baker"
          image="/backgnd.jpg"
          index={2}
          meta="Friend"
        />
        <CustomCardSlide
          header="Steve Sanders"
          image="/backgnd.jpg"
          index={2}
          meta="Friend"
        />
      </Slider>

      <CustomDotGroup slides={5} />
    </CarouselProvider>
  </Container>
);

export default CardCarousel;
