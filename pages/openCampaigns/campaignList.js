import React, { Component } from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import {
  Popup,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Segment,
  Select,
  Card,
  TextArea,
  Transition,
  Grid,
  Modal,
  Container,
  Icon,
  Image,
  Header,
  Accordion,
} from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import KitPopUp from './popUp';
import CustomCardSlide from '../../components/CustomCardSlide';
import CustomDotGroup from '../../components/CustomDotGroup';
//const { countryOptions } = require("./countryList");

class CampaignList extends Component {
  state = {
    open: false,
  };

  showModal = () => {
    this.setState({ open: true });
  };

  hideModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { profileType } = this.props;
    return (
      <Segment color="blue" raised padded style={{ textAlign: 'center' }}>
        <Header
          as="h2"
          style={{ fontSize: '3em', color: 'rgba(28, 173, 229, 1.0)' }}
        >
          Available Campaigns
        </Header>
        <br />
        <CarouselProvider
          naturalSlideWidth={1}
          naturalSlideHeight={1.3}
          isIntrinsicHeight="false"
          touchEnabled={false}
          infinite={true}
          totalSlides={6}
          visibleSlides={3}
        >
          <Slider>
            <CustomCardSlide
              header="Verve Tech"
              profileType={profileType}
              image="/backgnd.jpg"
              index={1}
              meta="SME"
            />
            <CustomCardSlide
              header="Genose"
              profileType={profileType}
              image="/backgnd.jpg"
              index={2}
              meta="SME"
            />
            <CustomCardSlide
              image="/backgnd.jpg"
              profileType={profileType}
              index={3}
              header="Omnimm"
              meta="SME"
            />
            <CustomCardSlide
              header="Equizzy"
              profileType={profileType}
              image="/backgnd.jpg"
              index={4}
              meta="SME"
            />
            <CustomCardSlide
              header="Yagen"
              profileType={profileType}
              image="/backgnd.jpg"
              index={5}
              meta="SME"
            />
            <CustomCardSlide
              image="/backgnd.jpg"
              profileType={profileType}
              index={6}
              header="Perilane"
              meta="SME"
            />
          </Slider>

          <CustomDotGroup slides={6} />
        </CarouselProvider>

        <br />
      </Segment>
    );
  }
}

export default CampaignList;
