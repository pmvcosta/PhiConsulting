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
import Layout from '../components/Layout';
import { Link } from '../routes';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

class FormExampleFieldControl extends Component {
  state = { open: false };

  handleChange = (e, { value }) => this.setState({ value });
  showModal = () => this.setState({ open: true });
  hideModal = () => this.setState({ open: false });

  render() {
    const { value, open } = this.state;
    return (
      <Layout>
        <Segment
          fluid
          style={{ padding: '8em 2em' }}
          vertical
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row fluid>
              <Grid.Column>
                <Header
                  as="h3"
                  style={{ fontSize: '3em', color: 'rgba(212, 32, 32, 0.9)' }}
                  textAlign="center"
                >
                  What do we offer?
                </Header>
                <br />
                <Form>
                  <Form.Group widths="equal">
                    <Form.Field
                      required
                      control={Input}
                      label="First name"
                      placeholder="First name"
                    />
                    <Form.Field
                      required
                      control={Input}
                      label="Last name"
                      placeholder="Last name"
                    />
                    <Form.Field
                      required
                      control={Select}
                      label="Gender"
                      options={options}
                      placeholder="Gender"
                    />
                    <br />
                  </Form.Group>
                  <label>
                    <b>Quantity</b>
                  </label>
                  <br />
                  <Popup
                    trigger={
                      <Form.Field
                        control={Radio}
                        label="One"
                        value="1"
                        checked={value === '1'}
                        onChange={this.handleChange}
                      />
                    }
                    content="I am positioned to the top left"
                    position="top left"
                  />
                  <Popup
                    trigger={
                      <Form.Field
                        control={Radio}
                        label="Two"
                        value="2"
                        checked={value === '2'}
                        onChange={this.handleChange}
                      />
                    }
                    content="I am positioned to the top left"
                    position="top left"
                  />
                  <Popup
                    trigger={
                      <Form.Field
                        control={Radio}
                        label="Three"
                        value="3"
                        checked={value === '3'}
                        onChange={this.handleChange}
                      />
                    }
                    content="I am positioned to the top left"
                    position="top left"
                  />
                  <br />
                  <Form.Field
                    control={TextArea}
                    label="About"
                    placeholder="Tell us more about you..."
                  />
                  <Form.Field
                    control={Checkbox}
                    label="I agree to the Terms and Conditions"
                  />
                  <Form.Field control={Button}>Submit</Form.Field>
                  <Button onClick={this.showModal} primary>
                    Open <Icon name="chevron right" />
                  </Button>

                  <Transition visible={open} animation="scale" duration={500}>
                    <Modal
                      open={open}
                      onClose={this.hideModal}
                      onOpen={this.showModal}
                    >
                      <Modal.Header>Profile Picture</Modal.Header>
                      <Modal.Content image scrolling>
                        <Modal.Description>
                          <Image
                            size="medium"
                            src="https://react.semantic-ui.com/images/wireframe/image.png"
                            wrapped
                          />
                          <p>
                            This is an example of expanded content that will
                            cause the modal's dimmer to scroll.
                          </p>

                          <Image
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            style={{ marginBottom: 10 }}
                          />
                          <Image
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            style={{ marginBottom: 10 }}
                          />
                          <Image
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            style={{ marginBottom: 10 }}
                          />
                          <Image
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            style={{ marginBottom: 10 }}
                          />
                          <Image
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            style={{ marginBottom: 10 }}
                          />
                          <Image
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            style={{ marginBottom: 10 }}
                          />
                          <Image
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            style={{ marginBottom: 10 }}
                          />
                          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                        </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button href="/subscribe" primary>
                          I'd Like to Know More! <Icon name="chevron right" />
                        </Button>
                        <Button onClick={this.hideModal} primary>
                          Proceed <Icon name="chevron right" />
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </Transition>
                </Form>
                <br />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Layout>
    );
  }
}

export default FormExampleFieldControl;
