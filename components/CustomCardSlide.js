import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
import React, { Component } from 'react';
import { Card, Button, Image, Transition } from 'semantic-ui-react';
import KitPopUp from '../pages/openCampaigns/popUp';
import CampaignSlide from '../pages/openCampaigns/details';

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
    const { index, image, header, meta, profileType } = this.props;
    return (
      <Slide index={index}>
        <div style={{ padding: 10 }}>
          <Card color="red" style={{ width: '320px' }}>
            <CampaignSlide width={'280px'} />
            <Card.Content style={{ textAlign: 'left' }}>
              <Card.Header>{header}</Card.Header>
              <Card.Meta>{meta}</Card.Meta>
              <Card.Description>
                {header} wants to <strong>revolutionise</strong> how we go about
                our daily routine.
              </Card.Description>
            </Card.Content>
            {profileType === 'Funding Platform' && (
              <Card.Content extra style={{ textAlign: 'center' }}>
                <Button
                  centered
                  secondary
                  onClick={this.showModal}
                  style={{ backgroundColor: 'rgba(212, 32, 32, 1.0)' }}
                >
                  Request
                </Button>
              </Card.Content>
            )}
          </Card>
        </div>
        <Transition visible={open} animation="scale" duration={500}>
          <KitPopUp
            budget={0}
            open={open}
            value={0}
            hideModal={this.hideModal}
          />
        </Transition>
      </Slide>
    );
  }
}

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
