import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
import React, { Component } from 'react';
import { Card, Button, Image, Transition } from 'semantic-ui-react';
import KitPopUp from '../pages/dashboard/servicePopUp';

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
    const { index, image, header, meta } = this.props;
    return (
      <Slide index={index}>
        <div style={{ padding: 10 }}>
          <Card>
            <Image wrapped ui={false} src={image} />
            <Card.Content>
              <Card.Header>{header}</Card.Header>
              <Card.Meta>{meta}</Card.Meta>
              <Card.Description>
                {header} wants to add you as a <strong>best friend</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button basic color="green" onClick={this.showModal}>
                Approve
              </Button>
            </Card.Content>
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
