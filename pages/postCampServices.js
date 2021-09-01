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

import CustomCardSlide from '../components/CustomTwoFaceCardSlide';
import CustomDotGroup from '../components/CustomDotGroup';

const CardCarousel = () => (
  <Container>
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.3}
      isIntrinsicHeight="false"
      touchEnabled="false"
      infinite="false"
      isPlaying="true"
      interval="4000"
      totalSlides={3}
      visibleSlides={1}
    >
      <Slider
        style={{
          width: '350px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maskImage:
            'linear-gradient(transparent, black 10%, black 80%, transparent 100%)',
          webkitMaskImage:
            'linear-gradient( to right,transparent, black 10%, black 80%, transparent 100%)',
        }}
      >
        <CustomCardSlide
          icon="tasks"
          index={0}
          title="Long Term Support"
          text="Your funding doesn't stop once your campaign is over. With our long term support, we ensure your business keeps going onwards and upwards!"
        />

        <CustomCardSlide
          icon="shop"
          index={1}
          title="E-Commerce Setup/Development"
          text="We continue to market to your new backers by taking them through expertly crafted upsell funnels."
        />

        <CustomCardSlide
          icon="bullseye"
          index={2}
          title="Post-Campaign Marketing"
          text="Why stop marketing when your campaign is over? We setup marketing and  pre-order systems on your own website and other crowdfunding websites to maximize traction and sales."
        />
      </Slider>
      <br />
      <CustomDotGroup slides={3} />
    </CarouselProvider>
  </Container>
);

export default CardCarousel;
