import React, { Component } from "react";
import { Link, Router } from "../routes";
import { Table, Button, Progress, Header, List } from "semantic-ui-react";

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
            <Link route={`/dashboard/${campaign.campaignName}`}>
              <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                {campaign.campaignName}
              </a>
            </Link>
          </Header>
        </Cell>
        <Cell singleLine>{campaign.platform}</Cell>
        <Cell>{campaign.fundDeadline}</Cell>
        <Cell>{campaign.fundGoal} €</Cell>
        <Cell>{campaign.fundMethod}</Cell>
        <Cell>
          {" "}
          <List>
            <List.Item>
              {campaign.hasMedia === "true" && (
                <List.Icon name="check circle" style={{ color: "green" }} />
              )}
              {campaign.hasMedia === "false" && (
                <List.Icon name="times circle" style={{ color: "red" }} />
              )}
              <List.Content>Visual Media</List.Content>
            </List.Item>
            <List.Item>
              {campaign.hasMarketingCampaign === "true" && (
                <List.Icon name="check circle" style={{ color: "green" }} />
              )}
              {campaign.hasMarketingCampaign === "false" && (
                <List.Icon name="times circle" style={{ color: "red" }} />
              )}
              <List.Content>Marketing Campaign</List.Content>
            </List.Item>
            <List.Item>
              {campaign.hasCommunity === "true" && (
                <List.Icon name="check circle" style={{ color: "green" }} />
              )}
              {campaign.hasCommunity === "false" && (
                <List.Icon name="times circle" style={{ color: "red" }} />
              )}
              <List.Content>Online Community</List.Content>
            </List.Item>
            <List.Item>
              {campaign.hasValuation === "true" && (
                <List.Icon name="check circle" style={{ color: "green" }} />
              )}
              {campaign.hasValuation === "false" && (
                <List.Icon name="times circle" style={{ color: "red" }} />
              )}
              <List.Content>Business Valuation</List.Content>
            </List.Item>
          </List>
        </Cell>
        {campaign.addNotes !== "null" && <Cell>{campaign.addNotes}</Cell>}
        {campaign.addNotes === "null" && <Cell>-</Cell>}
      </Row>
    );
  }
}

export default CampaignRow;
