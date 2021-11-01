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
  TextArea,
  Transition,
  Grid,
  Modal,
  Icon,
  Image,
  Header,
} from 'semantic-ui-react';
import { Link } from '../../routes';

class KitPopUp extends Component {
  constructor(props) {
    super(props);
  }

  renderPlatform(value) {
    if (value == '1' || value == '3') {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: '2em', color: 'rgba(28, 173, 229, 0.9)' }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./PPL.png" wrapped />

          <p style={{ width: '50%' }}>
            <br />
            PPL is the reference crowdfunding platform in Portugal, launched in
            2011. It specializes in rewards-based crowdfunding and donation
            campaigns.
          </p>
        </div>
      );
    } else if (value == '2' || value == '5') {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: '2em', color: 'rgba(28, 173, 229, 0.9)' }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./logoSeedrs.png" wrapped />

          <p style={{ width: '50%' }}>
            <br />
            Seedrs is a well-established crowdfunding platform launched in 2012.
            The platform allows new businesses to raise capital by promoting to
            the crowd who buy the company’s shares.
          </p>
        </div>
      );
    } else if (value == '4') {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: '2em', color: 'rgba(28, 173, 229, 0.9)' }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./crowdcube.png" wrapped />

          <p style={{ width: '50%' }}>
            <br />
            Crowdcube is an equity and debt crowdfunding platform for
            entrepreneurs of start-ups and growing businesses, started i 2011.
            Crowdcube enables individuals to invest or loan in small companies
            in return for equity or an annual return.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: '2em', color: 'rgba(28, 173, 229, 0.9)' }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./logoSeedrs.png" wrapped />
          <br />
          <p style={{ width: '50%' }}>
            Seedrs is a well-established crowdfunding platform launched in 2012.
            The platform allows new businesses to raise capital by promoting to
            the crowd who buy the company’s shares.
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.hideModal}>
        <Modal.Header
          style={{
            fontSize: '2em',
            color: 'rgba(255, 255, 255, 1.0)',
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
          }}
        >
          Service Request
        </Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            {this.renderPlatform(this.props.value)}

            <Header
              as="h3"
              style={{ fontSize: '2em', color: 'rgba(28, 173, 229, 0.9)' }}
              textAlign="left"
            >
              Reccomended Services and Estimated Costs
            </Header>

            <Grid divided="vertically" style={{ width: '100' }}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <b>
                    <Header
                      as="h3"
                      style={{
                        fontSize: '1.5em',
                        color: 'rgba(28, 173, 229, 0.9)',
                      }}
                      textAlign="left"
                    >
                      <Icon name="checkmark box" />
                      <Header.Content>Service</Header.Content>
                    </Header>
                  </b>
                </Grid.Column>
                <Grid.Column>
                  <b>
                    <Header
                      as="h3"
                      style={{
                        fontSize: '1.5em',
                        color: 'rgba(28, 173, 229, 0.9)',
                      }}
                      textAlign="left"
                    >
                      <Icon name="eur" />
                      <Header.Content>Cost(€)</Header.Content>
                    </Header>
                  </b>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  Visual Media Creation (Videos & Promotional Imagery)
                </Grid.Column>
                <Grid.Column>
                  {Math.round(this.props.budget * 0.25)}
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid style={{ width: '100' }}>
              <Grid.Row columns={2}>
                <Grid.Column>Business Valuation</Grid.Column>
                <Grid.Column>{Math.round(this.props.budget * 0.1)}</Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>Social Media Marketing </Grid.Column>
                <Grid.Column>{Math.round(this.props.budget * 0.3)}</Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid style={{ width: '100' }}>
              <Grid.Row columns={2}>
                <Grid.Column>Community Building</Grid.Column>
                <Grid.Column>{Math.round(this.props.budget * 0.2)}</Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>Website/Landing Page Creation </Grid.Column>
                <Grid.Column>{Math.round(this.props.budget * 0.1)}</Grid.Column>
              </Grid.Row>
            </Grid>
            <br />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            href="/subscribe"
            primary
            style={{
              backgroundColor: 'rgba(28, 173, 229, 1.0)',
            }}
          >
            I'd Like to Know More! <Icon name="chevron right" />
          </Button>
          <Button
            onClick={this.props.hideModal}
            primary
            style={{
              backgroundColor: 'rgba(28, 173, 229, 1.0)',
            }}
          >
            Proceed <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default KitPopUp;
