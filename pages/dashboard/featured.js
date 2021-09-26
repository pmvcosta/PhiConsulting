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

import CustomCardSlide from '../../components/CustomCardSlide';
import CustomDotGroup from '../../components/CustomDotGroup';

class CardCarousel extends Component {
  render() {
    return (
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
              header="Verve Tech"
              image="/backgnd.jpg"
              index={1}
              meta="SME"
            />
            <CustomCardSlide
              header="Genose"
              image="/backgnd.jpg"
              index={2}
              meta="SME"
            />
            <CustomCardSlide
              image="/backgnd.jpg"
              index={3}
              header="Omnimm"
              meta="SME"
            />
            <CustomCardSlide
              header="Equizzy"
              image="/backgnd.jpg"
              index={4}
              meta="SME"
            />
            <CustomCardSlide
              header="Yagen"
              image="/backgnd.jpg"
              index={5}
              meta="SME"
            />
          </Slider>

          <CustomDotGroup slides={5} />
        </CarouselProvider>
      </Container>
    );
  }
}

export default CardCarousel;
