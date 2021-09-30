import React, { Component, useEffect, useState } from 'react';
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
  Statistic,
  Rating,
} from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import DashBar from '../../../components/DashLayout';
import Featured from './../featured';
import { useSession, getSession } from 'next-auth/client';

class BasicDetails extends Component {
  render() {
    const { campaign, isEditing } = this.props;
    return (
      <Tab.Pane attached={false} color="red">
        <List divided relaxed>
          <List.Item>
            <List.Content style={{ marginBottom: '5px' }}>
              <List.Header
                style={{ color: 'rgba(182, 12, 12, 0.9)', marginBottom: '5px' }}
              >
                Funding Method
              </List.Header>
              {campaign.fundMethod}
            </List.Content>
          </List.Item>
          <List.Item style={{ marginBottom: '5px' }}>
            <List.Content>
              <List.Header
                style={{ color: 'rgba(182, 12, 12, 0.9)', marginBottom: '5px' }}
              >
                Funding Goal
              </List.Header>
              {campaign.fundGoal} €
            </List.Content>
          </List.Item>
          <List.Item style={{ marginBottom: '5px' }}>
            <List.Content>
              <List.Header
                style={{ color: 'rgba(182, 12, 12, 0.9)', marginBottom: '5px' }}
              >
                Platform
              </List.Header>
              {campaign.platform}
            </List.Content>
          </List.Item>
          <List.Item style={{ marginBottom: '5px' }}>
            <List.Content>
              <List.Header
                style={{ color: 'rgba(182, 12, 12, 0.9)', marginBottom: '5px' }}
              >
                Deadline
              </List.Header>
              {campaign.fundDeadline}
            </List.Content>
          </List.Item>
        </List>
      </Tab.Pane>
    );
  }
}

export default BasicDetails;
