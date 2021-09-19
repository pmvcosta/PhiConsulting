import React, { Component } from 'react';
import { Table, Button, Progress, Header } from 'semantic-ui-react';

class CampaignRow extends Component {
  state = {
    percent: 30,
  };
  render() {
    const { Row, Cell } = Table;
    const { campaign } = this.props;
    const { percent } = this.state;
    return (
      <Row>
        <Cell>
          <Header as="h3" textAlign="center">
            {campaign.campaignName}
          </Header>
        </Cell>
        <Cell singleLine>{campaign.platform}</Cell>
        <Cell>{campaign.fundDeadline}</Cell>
        <Cell>{campaign.fundGoal}</Cell>
        <Cell>{campaign.fundMethod}</Cell>
        <Cell>{campaign.addNotes}</Cell>
      </Row>
    );
  }
}

export default CampaignRow;
