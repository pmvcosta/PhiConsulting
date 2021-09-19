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
  Popup,
  Radio,
  Message,
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
import { connectToDatabase } from "../../lib/db";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1080,
  },
});

const options = [
  { key: "m", text: "Within next 3 months", value: "3" },
  { key: "f", text: "3-6 months", value: "3-6" },
  { key: "o", text: "6+ months", value: "6+" },
];

const optionsPay = [
  { key: "m", text: "Credit Card", value: "Credit Card" },
  { key: "l", text: "Bank Transfer", value: "Bank Transfer" },
  { key: "f", text: "Paypal", value: "Paypal" },
  {
    key: "o",
    text: "Percentage of Campaign Funds",
    value: "Percentage of Funds",
  },
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

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const userEmail = session.user.email;
  const user = await usersCollection.findOne({ email: userEmail });
  const campaigns = user.campaigns;
  let campaign = {};
  let optionsCamp = [];

  campaigns.forEach((item) => {
    campaign = {};
    console.log(`THE NAME IS ${item.campaignName}`);

    campaign["key"] = `${item.campaignName}`;
    campaign["text"] = `${item.campaignName}`;
    campaign["value"] = `${item.campaignName}`;

    optionsCamp.push(campaign);
  });

  return {
    props: { session, optionsCamp },
  };
}

class Dashboard extends Component {
  state = {
    open: false,
    activeIndex: 0,
    campaignName: "",
    reqName: "",
    maxSpend: "",
    reqDeadline: "",
    addNotes: "",
    payMethod: "",
    errorMessage: "",
    loading: false,
  };

  createRequest = async (
    campaignName,
    reqName,
    reqType,
    maxSpend,
    reqDeadline,
    addNotes,
    payMethod
  ) => {
    const response = await fetch("/api/user/newRequest", {
      method: "PATCH",
      body: JSON.stringify({
        campaignName,
        reqName,
        reqType,
        maxSpend,
        reqDeadline,
        addNotes,
        payMethod,
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
      const result = await this.createRequest(
        this.state.campaignName,
        this.state.reqName,
        this.state.value,
        this.state.maxSpend,
        this.state.reqDeadline,
        this.state.addNotes,
        this.state.payMethod
      );
      console.log(result);
      Router.pushRoute("/dashboard/pendingRequests");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  handleNumberChange = (e, { name, value }) =>
    this.setState({ [name]: value.replace(/\D/, "") });

  handleTextChange = (e, { name, value }) => this.setState({ [name]: value });

  handleChange = (e, { value }) => this.setState({ value });

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
      reqName,
      maxSpend,
      reqDeadline,
      addNotes,
      payMethod,
      loading,
    } = this.state;
    const { session, optionsCamp } = this.props;
    return (
      <DashBar session={session}>
        <br />
        <Segment color="red" padded raised fluid>
          <Header
            as="h2"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 1.0)" }}
          >
            New Request
          </Header>
          <Form
            size={"large"}
            onSubmit={this.onSubmit}
            error={!!this.state.errorMessage}
          >
            <Form.Field
              required
              control={Input}
              label="Request Name:"
              name="reqName"
              value={reqName}
              onChange={this.handleTextChange}
              placeholder="e.g.: MyFirstRequest"
            />
            <Form.Group>
              <Form.Field
                required
                control={Select}
                label="Target Campaign:"
                name="campaignName"
                value={campaignName}
                onChange={this.handleTextChange}
                options={optionsCamp}
                placeholder="Please Select One"
                style={{ width: "295px" }}
              />
            </Form.Group>
            <Form.Field required>
              <label required>
                <b> Service Required:</b>
              </label>
              <Form.Group>
                <Popup
                  trigger={
                    <Form.Field
                      control={Radio}
                      label="Visual Media Creation"
                      value="Visual Media"
                      checked={value === "Visual Media"}
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
                      label="Company Valuation"
                      value="Company Valuation"
                      checked={value === "Company Valuation"}
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
                      label="Legal Services"
                      value="Legal"
                      checked={value === "Legal"}
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
                      label="Business Analysis"
                      value="Business Analysis"
                      checked={value === "Business Analysis"}
                      onChange={this.handleChange}
                    />
                  }
                  content="Collect donations with the promise to pay them back until a set date. Typically used by businesses that prefer to pay back the funds rather than give out equity. "
                  position="top left"
                />
                <Form.Field
                  control={Radio}
                  label="Digital Marketing"
                  value="Digital Marketing"
                  checked={value === "Digital Marketing"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Field>

            <Form.Field
              required
              control={Input}
              name="maxSpend"
              type="text"
              pattern="[0-9]*"
              value={maxSpend}
              onChange={this.handleNumberChange}
              label="What is your target spending(€) for this service ?"
              placeholder="e.g.: 5000"
              style={{ width: "295px" }}
            />

            {value == 1 && (
              <Form.Field
                required
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
            <Form.Group>
              <Form.Field
                required
                control={Select}
                label="What deadline do you want to set?"
                name="reqDeadline"
                value={reqDeadline}
                onChange={this.handleTextChange}
                options={options}
                placeholder="Please Select One"
                style={{ width: "295px" }}
              />
            </Form.Group>
            <Form.TextArea
              label="Additional Information"
              name="addNotes"
              value={addNotes}
              onChange={this.handleTextChange}
              placeholder="Tell us more about what you need from this request..."
            />

            <Form.Group>
              <Form.Field
                required
                control={Select}
                label="Payment Method:"
                name="payMethod"
                value={payMethod}
                onChange={this.handleTextChange}
                options={optionsPay}
                placeholder="Please Select One"
                style={{ width: "295px" }}
              />
            </Form.Group>
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
