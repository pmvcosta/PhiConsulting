import React, { Component, useEffect, useState } from "react";
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Image,
  Reveal,
  Icon,
  Sidebar,
  Message,
  Popup,
  Radio,
  Input,
  Select,
  Menu,
  Form,
  Checkbox,
  Transition,
} from "semantic-ui-react";
import { Link, Router } from "../../routes";
import { useRouter } from "next/router";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import DashBar from "../../components/DashLayout";
import Featured from "./featured";
import KitPopUp from "./servicePopUp";
import { useSession, getSession } from "next-auth/client";
//import { connectToDatabase } from '../../lib/db';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1080,
  },
});

const options = [
  { key: "m", text: "Within next 3 months", value: "3mo" },
  { key: "f", text: "3-6 months", value: "3-6mo" },
  { key: "o", text: "6+ months", value: "6mo+" },
];

const optionsPlat = [
  { key: "s", text: "Seedrs", value: "Seedrs" },
  { key: "r", text: "Raize", value: "Raize" },
  { key: "r", text: "Crowdcube", value: "Crowdcube" },
  { key: "r", text: "PPL", value: "PPL" },
  { key: "o", text: "No Preference", value: "NoPref" },
];

export async function getServerSideProps(context) {
  //getSession automatically looks into request
  const session = await getSession({ req: context.req });
  console.log(session);

  if (!session) {
    //The followign resets the state of the app?
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  //const client = await connectToDatabase();
  //const usersCollection = client.db().collection("users");

  const userEmail = session.user.email;
  //const user = await usersCollection.findOne({ email: userEmail });
  const profileType = session.user.name;

  //client.close();
  return {
    props: { session, profileType },
  };
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      open: false,
      shares: "",
      value: "",
      budget: "",
      fundDate: "",
      funding: "",
      hasMedia: false,
      hasValuation: false,
      hasMarketingCampaign: false,
      hasCommunity: false,
      activeIndex: 0,
      errorMessage: "",
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  createCampaign = async (
    campaignName,
    fundMethod,
    platform,
    fundGoal,
    fundDeadline,
    addNotes,
    hasMedia,
    hasValuation,
    hasMarketingCampaign,
    hasCommunity
  ) => {
    const response = await fetch("/api/user/newCampaign", {
      method: "PATCH",
      body: JSON.stringify({
        campaignName,
        fundMethod,
        platform,
        fundGoal,
        fundDeadline,
        addNotes,
        hasMedia,
        hasValuation,
        hasMarketingCampaign,
        hasCommunity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  };

  onSubmit = async (event) => {
    event.preventDefault(); //keeps browser from submitting form to backed server

    this.setState({
      loading: true,
      errorMessage: "",
    });

    try {
      const result = await this.createCampaign(
        this.state.campaignName,
        this.state.value,
        this.state.platform,
        this.state.fundGoal,
        this.state.fundDeadline,
        this.state.addNotes,
        this.state.hasMedia,
        this.state.hasValuation,
        this.state.hasMarketingCampaign,
        this.state.hasCommunity
      );
      console.log(result);
      Router.pushRoute("/dashboard/pendingCampaigns");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  handleNumberChange = (e, { name, value }) =>
    this.setState({ [name]: value.replace(/\D/, "") });

  handleTextChange = (e, { name, value }) => this.setState({ [name]: value });

  handleChange = (e, { value }) => this.setState({ value });

  handleCheck = (e, { name, value }) => {
    this.setState({ [name]: !value });
    console.log(`${name} value: ${this.state.name}`);
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  showModal = () => {
    this.setState({ open: true });
  };

  hideModal = () => this.setState({ open: false });

  //redirect away if not authorized

  render() {
    const {
      open,
      value,
      campaignName,
      platform,
      fundGoal,
      fundDeadline,
      addNotes,
      shares,
      loading,
      isLoading,
    } = this.state;
    const { session, profileType = { profileType } } = this.props;
    return (
      <DashBar
        session={session}
        profileType={profileType}
        isLoading={isLoading}
      >
        <br />
        <Segment color="blue" padded raised fluid>
          <Header
            as="h2"
            style={{ fontSize: "2em", color: "rgba(28, 173, 229, 1.0)" }}
          >
            New Campaign
          </Header>
          <Form
            size={"large"}
            onSubmit={this.onSubmit}
            error={!!this.state.errorMessage}
          >
            <Form.Field
              required
              control={Input}
              label="Campaign Name:"
              name="campaignName"
              value={campaignName}
              onChange={this.handleTextChange}
              placeholder="e.g.: MyFirstCampaign"
            />
            <Form.Field required>
              <label required>
                <b> Crowdfunding Method:</b>
              </label>
              <br />
              <Form.Group>
                <Popup
                  trigger={
                    <Form.Field
                      control={Radio}
                      label="Rewards-Based"
                      value="Rewards"
                      checked={value === "Rewards"}
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
                      value="Equity"
                      checked={value === "Equity"}
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
                      value="Donation"
                      checked={value === "Donation"}
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
                      value="Debt"
                      checked={value === "Debt"}
                      onChange={this.handleChange}
                    />
                  }
                  content="Collect donations with the promise to pay them back until a set date. Typically used by businesses that prefer to pay back the funds rather than give out equity. "
                  position="top left"
                />
                <Form.Field
                  control={Radio}
                  label="No Preference"
                  value="NoPref"
                  checked={value === "NoPref"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Field>

            <Form.Group>
              <Form.Field
                required
                control={Select}
                label="Preferred Platform:"
                name="platform"
                value={platform}
                onChange={this.handleTextChange}
                options={optionsPlat}
                placeholder="Please Select One"
                style={{ width: "295px" }}
              />
            </Form.Group>

            <br />
            <Form.Field
              required
              control={Input}
              name="fundGoal"
              type="text"
              pattern="[0-9]*"
              value={fundGoal}
              onChange={this.handleNumberChange}
              label="What is your funding goal(€)?"
              placeholder="e.g.: 5000"
              style={{ width: "295px" }}
            />
            {value == "Equity" && (
              <Form.Field
                control={Input}
                name="shares"
                type="text"
                pattern="[0-9]*"
                value={shares}
                onChange={this.handleNumberChange}
                label="How many shares do you expect to sell?"
                placeholder="e.g.: 5000"
                style={{ width: "295px" }}
              />
            )}
            <br />
            <Form.Group>
              <Form.Field
                required
                control={Select}
                label="When are you looking to receive the funds?"
                name="fundDeadline"
                value={fundDeadline}
                onChange={this.handleTextChange}
                options={options}
                placeholder="Please Select One"
                style={{ width: "295px" }}
              />
              <br />
            </Form.Group>

            {(value === "Equity" ||
              value === "Rewards" ||
              value === "Donation" ||
              value === "Debt") && (
              <label required style={{ marginTop: "20px" }}>
                <b> Requirements met:</b>
                <br />
              </label>
            )}
            {(value === "Equity" ||
              value === "Rewards" ||
              value === "Donation" ||
              value === "Debt") && (
              <Form.Group
                inline
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <Form.Field
                  control={Checkbox}
                  label="Visual Media"
                  name="hasMedia"
                  value={this.state.hasMedia}
                  onChange={this.handleCheck}
                />

                {value === "Equity" && (
                  <Form.Field
                    control={Checkbox}
                    label="Business Valuation"
                    name="hasValuation"
                    value={this.state.hasValuation}
                    onChange={this.handleCheck}
                  />
                )}
                <Form.Field
                  control={Checkbox}
                  label="Marketing Campaign"
                  name="hasMarketingCampaign"
                  value={this.state.hasMarketingCampaign}
                  onChange={this.handleCheck}
                />
                <Form.Field
                  control={Checkbox}
                  label="Online Community"
                  name="hasCommunity"
                  value={this.state.hasCommunity}
                  onChange={this.handleCheck}
                />
              </Form.Group>
            )}

            <Form.TextArea
              label="Additional Information"
              name="addNotes"
              value={addNotes}
              onChange={this.handleTextChange}
              placeholder="Tell us more about what you need from this request..."
            />

            <Form.Checkbox
              required
              label="I agree to the Terms and Conditions"
            />

            <Form.Field>
              <Button type="submit" loading={loading} primary>
                {" "}
                Submit <Icon name="chevron right" />{" "}
              </Button>
            </Form.Field>
            <Message error header="Oops" content={this.state.errorMessage} />
          </Form>
        </Segment>
      </DashBar>
    );
  }
}

export default Dashboard;
