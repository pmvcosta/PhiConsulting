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
      isPlaying="true"
      interval="4000"
      touchEnabled="false"
      infinite="false"
      totalSlides={8}
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
          icon="chart line"
          index={0}
          title="Market Analysis and Strategy"
          text="Our understanding of the market is the key for brand building and delivering the right messages to the  target audiences."
        />

        <CustomCardSlide
          icon="users"
          index={1}
          title="Community Generation"
          text="We use paid Internet advertising to drive traffic and build your following. Our advertising team are experts at deploying your advertising dollars to maximize ROI and campaign outcome."
        />

        <CustomCardSlide
          icon="bullhorn"
          index={2}
          title="Lead Generation"
          text="Through landing page creation and the growth of your social media following, our team will collect qualified leads for your funding campaign that want to adhere to your business as soon as possible."
        />

        <CustomCardSlide
          icon="balance"
          index={3}
          title="Regulations and Contracts"
          text="Contracts and legal documents are a common source of headaches. With our assistance, you can be sure all documentation is in perfect order. This way you can focus solely on your business needs!"
        />

        <CustomCardSlide
          icon="share alternate"
          index={4}
          title="Social Media Advertising"
          text="Social media is where the conversation is happening. We design opportunities for your product to be presented in unique and creative ways, resulting in a larger and more interactive following."
        />

        <CustomCardSlide
          icon="film"
          index={5}
          title="Media Production"
          text="Visual media is undoubtedly a powerful means to communicate your ideas, products or services. We work with the best media production agencies and supervise the creation process every step away to have the perfect message."
        />

        <CustomCardSlide
          icon="globe"
          index={6}
          title="Website Creation"
          text="We are creating a dedicated website or landing page with extremely high subscription rates for further efficient execution of email marketing"
        />

        <CustomCardSlide
          icon="rocket"
          index={7}
          title="Funding Freedom"
          text="Pick whatever crowdfunding means best fits your business: rewards-based, equity-based, loan, bond, donations or revenue-based"
        />
      </Slider>
      <br />
      <CustomDotGroup slides={8} />
    </CarouselProvider>
  </Container>
);

export default CardCarousel;
