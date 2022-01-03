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
  Menu,
  Checkbox,
  Table,
  Progress,
  Loader,
  List,
  Tab,
  Dimmer,
  Rating,
} from "semantic-ui-react";
import { Link, Router } from "../../../routes";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import DashBar from "../../../components/DashLayout";
import Featured from "./../featured";
import { useSession, getSession } from "next-auth/client";

class VisualMedia extends Component {
  render() {
    const { hasMedia, isEditing } = this.props;
    return (
      <Tab.Pane attached={false} color="blue">
        <List divided relaxed>
          <List.Item>
            <List.Content style={{ marginBottom: "5px" }}>
              {hasMedia === "true" && (
                <List.Header
                  style={{
                    fontSize: "1.5em",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  Visual Media already in place
                </List.Header>
              )}
              {hasMedia === "false" && (
                <List.Header
                  style={{
                    fontSize: "1.5em",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  No videos or photos uploaded to date
                </List.Header>
              )}
            </List.Content>
          </List.Item>
        </List>
      </Tab.Pane>
    );
  }
}

export default VisualMedia;
