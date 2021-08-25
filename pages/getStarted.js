import React, { Component } from "react";
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
} from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
const { countryOptions } = require("./countryList");
const options = [
  { key: "m", text: "Within next 3 months", value: "3" },
  { key: "f", text: "3-6 months", value: "36" },
  { key: "o", text: "6+ months", value: "6" },
];

class FormExampleFieldControl extends Component {
  state = {
    open: false,
    busName: "",
    country: "",
    website: "",
    email: "",
    value: "",
    budget: "",
    fundDate: "",
    funding: "",
  };
  handleNumberChange = (e, { name, value }) =>
    this.setState({ [name]: value.replace(/\D/, "") });
  handleTextChange = (e, { name, value }) => this.setState({ [name]: value });
  handleChange = (e, { value }) => this.setState({ value });
  showModal = () => {
    const {
      busName,
      country,
      website,
      email,
      value,
      budget,
      fundDate,
      funding,
    } = this.state;
    this.setState({ open: true });
  };

  hideModal = () => this.setState({ open: false });

  renderPlatform(value) {
    if (value == "1" || value == "3") {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./PPL.png" wrapped />

          <p style={{ width: "50%" }}>
            <br />
            PPL is the reference crowdfunding platform in Portugal, launched in
            2011. It specializes in rewards-based crowdfunding and donation
            campaigns.
          </p>
        </div>
      );
    } else if (value == "2" || value == "5") {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./logoSeedrs.png" wrapped />

          <p style={{ width: "50%" }}>
            <br />
            Seedrs is a well-established crowdfunding platform launched in 2012.
            The platform allows new businesses to raise capital by promoting to
            the crowd who buy the company’s shares.
          </p>
        </div>
      );
    } else if (value == "4") {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./crowdcube.png" wrapped />

          <p style={{ width: "50%" }}>
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
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./logoSeedrs.png" wrapped />
          <br />
          <p style={{ width: "50%" }}>
            Seedrs is a well-established crowdfunding platform launched in 2012.
            The platform allows new businesses to raise capital by promoting to
            the crowd who buy the company’s shares.
          </p>
        </div>
      );
    }
  }

  render() {
    const { value, open } = this.state;
    const {
      busName,
      country,
      website,
      email,
      budget,
      fundDate,
      funding,
    } = this.state;
    return (
      <Layout>
        <Segment
          fluid
          style={{ padding: "8em 2em" }}
          vertical
          style={{
            border: "0px",
            outline: "0px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <br />
                <Transition
                  animation="scale"
                  transitionOnMount={true}
                  duration={500}
                >
                  <Header
                    as="h3"
                    style={{ fontSize: "3em", color: "rgba(212, 32, 32, 0.9)" }}
                    textAlign="center"
                  >
                    Tell Us About Your Business!
                  </Header>
                </Transition>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid fluid container verticalAlign="middle" columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Form size={"large"} onSubmit={this.showModal}>
                  <Form.Field
                    required
                    control={Input}
                    name="busName"
                    value={busName}
                    onChange={this.handleTextChange}
                    label="What's the name of your business?"
                    placeholder="Business Name"
                  />
                  <br />

                  <Form.Group>
                    <Form.Field
                      required
                      control={Select}
                      name="country"
                      value={country}
                      onChange={this.handleTextChange}
                      label="What country is your business registered in?"
                      options={countryOptions}
                      search
                      placeholder="Country"
                    />
                    <br />
                  </Form.Group>
                  <br />
                  <Form.Field
                    control={Input}
                    name="website"
                    value={website}
                    onChange={this.handleTextChange}
                    label="Enter the business website"
                    placeholder="Business Website"
                  />
                  <br />
                  <Form.Field required>
                    <label>
                      <b>Your business email</b>
                    </label>
                    <Input
                      className="form-control mb-4 p-4"
                      required
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleTextChange}
                    />
                  </Form.Field>

                  <Form.Field required>
                    <label required>
                      <b>Prefered Crowdfunding Method:</b>
                    </label>
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Rewards-Based"
                          value="1"
                          checked={value === "1"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Donors earn rewards based on the amount donated. Common rewards include handmade items, prizes donated by partner companies, or free products or services offered by the fundraiser organizer."
                      position="top left"
                    />
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Equity-Based"
                          value="2"
                          checked={value === "2"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Donors receive a percentage ownership in the company.  Requires larger fundraising minimums, typically into the thousands of dollars."
                      position="top left"
                    />
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Donations"
                          value="3"
                          checked={value === "3"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Asking for a small donation from a large number of people to raise money for personal needs as well as community-based projects."
                      position="top left"
                    />
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Debt"
                          value="4"
                          checked={value === "4"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Collect donations with the promise to pay them back until a set date. Typically used by businesses that prefer to pay back the funds rather than give out equity. "
                      position="top left"
                    />
                    <Form.Field
                      control={Radio}
                      label="No Preference"
                      value="5"
                      checked={value === "5"}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <br />
                  <Form.Field
                    required
                    control={Input}
                    name="budget"
                    type="text"
                    pattern="[0-9]*"
                    value={budget}
                    onChange={this.handleNumberChange}
                    label="What is your estimated buget(€)?"
                    placeholder="e.g.: 5000"
                  />
                  <br />
                  <Form.Field
                    required
                    control={Input}
                    name="funding"
                    type="text"
                    pattern="[0-9]*"
                    value={funding}
                    onChange={this.handleNumberChange}
                    label="What is your funding goal(€)?"
                    placeholder="e.g.: 5000"
                  />
                  <br />
                  <Form.Group>
                    <Form.Field
                      required
                      control={Select}
                      label="When are you looking to receive the funds?"
                      name="fundDate"
                      value={fundDate}
                      onChange={this.handleTextChange}
                      options={options}
                      placeholder="Please Select One"
                    />
                    <br />
                  </Form.Group>

                  <Form.Field>
                    <Button type="submit" primary>
                      {" "}
                      Submit <Icon name="chevron right" />{" "}
                    </Button>
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Transition
                  animation="scale"
                  transitionOnMount={true}
                  duration={500}
                >
                  <Image bordered rounded size="big" src="/indexPic.jpg" />
                </Transition>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Transition visible={open} animation="scale" duration={500}>
          <Modal open={open} onClose={this.hideModal} onOpen={this.showModal}>
            <Modal.Header
              style={{
                fontSize: "2em",
                color: "rgba(255, 255, 255, 1.0)",
                backgroundColor: "rgba(212, 32, 32, 1.0)",
              }}
            >
              Project Campaign Kit
            </Modal.Header>
            <Modal.Content image scrolling>
              <Modal.Description>
                {this.renderPlatform(this.state.value)}

                <Header
                  as="h3"
                  style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
                  textAlign="left"
                >
                  Reccomended Services and Estimated Costs
                </Header>

                <Grid divided="vertically" style={{ width: "100" }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <b>
                        <Header
                          as="h3"
                          style={{
                            fontSize: "1.5em",
                            color: "rgba(212, 32, 32, 0.9)",
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
                            fontSize: "1.5em",
                            color: "rgba(212, 32, 32, 0.9)",
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
                    <Grid.Column>{Math.round(budget * 0.25)}</Grid.Column>
                  </Grid.Row>
                </Grid>

                <Grid style={{ width: "100" }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>Business Valuation</Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.1)}</Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={2}>
                    <Grid.Column>Social Media Marketing </Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.3)}</Grid.Column>
                  </Grid.Row>
                </Grid>

                <Grid style={{ width: "100" }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>Community Building</Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.2)}</Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={2}>
                    <Grid.Column>Website/Landing Page Creation </Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.1)}</Grid.Column>
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
                  backgroundColor: "rgba(212, 32, 32, 1.0)",
                }}
              >
                I'd Like to Know More! <Icon name="chevron right" />
              </Button>
              <Button
                onClick={this.hideModal}
                primary
                style={{
                  backgroundColor: "rgba(212, 32, 32, 1.0)",
                }}
              >
                Proceed <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
        </Transition>
        <br />
      </Layout>
    );
  }
}

export default FormExampleFieldControl;
