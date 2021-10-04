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
  Rating,
} from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import DashBar from '../../../components/DashLayout';
import Featured from './../featured';
import { useSession, getSession } from 'next-auth/client';

class Marketing extends Component {
  render() {
    const { hasMarketingCampaign, isEditing } = this.props;
    return (
      <Tab.Pane attached={false} color="red">
        <List divided relaxed>
          <List.Item>
            <List.Content style={{ marginBottom: '5px' }}>
              {hasMarketingCampaign === 'true' && (
                <List.Header
                  style={{
                    fontSize: '1.5em',
                    marginBottom: '5px',
                    marginTop: '5px',
                  }}
                >
                  Marketing Campaign already in place
                </List.Header>
              )}
              {hasMarketingCampaign === 'false' && (
                <List.Header
                  style={{
                    fontSize: '1.5em',
                    marginBottom: '5px',
                    marginTop: '5px',
                  }}
                >
                  No Marketing Campaign set up
                </List.Header>
              )}
            </List.Content>
          </List.Item>
        </List>
      </Tab.Pane>
    );
  }
}

export default Marketing;
