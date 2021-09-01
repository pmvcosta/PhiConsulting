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
          icon="dashboard"
          index={0}
          title="Active Campaign Management"
          text="With the campaign now up and running, you can easily check up on its status, and of the various channels promoting it to ensure it is always performing excellently."
        />

        <CustomCardSlide
          icon="pie graph"
          index={1}
          title="Realtime Analytics"
          text="Grab a chair, sit back, relax and watch us release the floodgates. With the audience we've built up, your campaign is pushed to the top, and our analytics pinpoints where to focus our efforts to keep the momentum going."
        />

        <CustomCardSlide
          icon="signal"
          index={2}
          title="Concurrent Marketing"
          text="Even during an ongoing campaign, our team deploys additional advertising, email marketing, and social media to continue the momentum. The end result is a campaign many times its original goal."
        />
      </Slider>
      <br />
      <CustomDotGroup slides={3} />
    </CarouselProvider>
  </Container>
);

export default CardCarousel;
