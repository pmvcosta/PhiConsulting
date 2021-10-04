import React, { Component } from 'react';
import { Table, Button, Progress, Header } from 'semantic-ui-react';

class RequestRow extends Component {
  state = {
    percent: 30,
  };
  render() {
    const { Row, Cell } = Table;
    const { request } = this.props;
    const { percent } = this.state;
    return (
      <Row>
        <Cell>
          <Header as="h3" textAlign="center">
            {request.reqName}
          </Header>
        </Cell>
        <Cell singleLine>{request.campaignName}</Cell>
        <Cell singleLine>{request.reqType}</Cell>
        <Cell>{request.maxSpend} €</Cell>
        <Cell>{request.reqDeadline} months</Cell>
        <Cell>{request.payMethod}</Cell>
        <Cell>{request.addNotes}</Cell>
      </Row>
    );
  }
}

export default RequestRow;
