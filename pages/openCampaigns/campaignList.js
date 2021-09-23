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
      <Segment color="red" raised padded style={{ textAlign: 'center' }}>
        <Header
          as="h2"
          style={{ fontSize: '3em', color: 'rgba(212, 32, 32, 1.0)' }}
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
              image="/backgnd.jpg"
              index={1}
              meta="SME"
            />
            <CustomCardSlide
              header="Steve Sanders"
              image="/backgnd.jpg"
              index={1}
              meta="SME"
            />
            <CustomCardSlide
              image="/backgnd.jpg"
              index={2}
              header="Matthew House"
              meta="SME"
            />
            <CustomCardSlide
              header="Elliot Baker"
              image="/backgnd.jpg"
              index={2}
              meta="SME"
            />
            <CustomCardSlide
              header="Steve Sanders"
              image="/backgnd.jpg"
              index={2}
              meta="SME"
            />
            <CustomCardSlide
              image="/backgnd.jpg"
              index={2}
              header="Matthew House"
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
