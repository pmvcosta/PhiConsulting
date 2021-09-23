import React, { Component } from 'react';
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
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import Details from './details';
import KitPopUp from './popUp';
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
        <Card.Group itemsPerRow={4} centered>
          <Card color="red" style={{ width: '280px', textAlign: 'left' }}>
            <Card.Content>
              <Details width="250px" />
              <br />
              <Card.Header syle={{ fontSize: '5em' }}>
                Media Production
              </Card.Header>
              <Card.Description>
                Request the creation of videos or images for the campaign"{' '}
              </Card.Description>
            </Card.Content>
            {profileType == 'Funding Platform' && (
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

          <Card color="red" style={{ width: '280px', textAlign: 'left' }}>
            <Card.Content>
              <Details width="250px" />
              <br />
              <Card.Header syle={{ fontSize: '5em' }}>
                Media Production
              </Card.Header>
              <Card.Description>
                Request the creation of videos or images for the campaign"{' '}
              </Card.Description>
            </Card.Content>
            {profileType == 'Funding Platform' && (
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

          <Card color="red" style={{ width: '280px', textAlign: 'left' }}>
            <Card.Content>
              <Details width="250px" />
              <br />
              <Card.Header syle={{ fontSize: '5em' }}>
                Media Production
              </Card.Header>
              <Card.Description>
                Request the creation of videos or images for the campaign"{' '}
              </Card.Description>
            </Card.Content>
            {profileType == 'Funding Platform' && (
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

          <Card color="red" style={{ width: '280px', textAlign: 'left' }}>
            <Card.Content>
              <Details width="250px" />
              <br />
              <Card.Header syle={{ fontSize: '5em' }}>
                Media Production
              </Card.Header>
              <Card.Description>
                Request the creation of videos or images for the campaign"{' '}
              </Card.Description>
            </Card.Content>
            {profileType == 'Funding Platform' && (
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

          <Card color="red" style={{ width: '280px', textAlign: 'left' }}>
            <Card.Content>
              <Details width="250px" />
              <br />
              <Card.Header syle={{ fontSize: '5em' }}>
                Media Production
              </Card.Header>
              <Card.Description>
                Request the creation of videos or images for the campaign"{' '}
              </Card.Description>
            </Card.Content>
            {profileType == 'Funding Platform' && (
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
        </Card.Group>
        <Transition visible={open} animation="scale" duration={500}>
          <KitPopUp open={open} hideModal={this.hideModal} />
        </Transition>
        <br />
      </Segment>
    );
  }
}

export default CampaignList;
