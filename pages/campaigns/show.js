import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button, Header } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    //address is in the url due to routing
    //const address = props.query.address; //this is the address of the campaign we want to show
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call(); //this is an object, not an array
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address, //belongs to class, not its instances, thus it must be put here to be accessable by instances
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of manager',
        description:
          'The manager created thus campaign and can create requests to withdraw money. ',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Balance of campaign (ether)',
        description:
          'The amount of money raised for the campaign, that has not yet been spent. ',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'The least amount of wei that must be contributed in order to become an approver.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved. ',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of people who have already donated to this campaign. ',
        style: { overflowWrap: 'break-word' },
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '8em 0em' }}
        >
          <Header as="h3" style={{ fontSize: '2em' }}>
            Campaign Details
          </Header>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
                  <Grid.Column width={5}>
                    <ContributeForm address={this.props.address} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Link route={`/campaigns/${this.props.address}/requests`}>
                      <a>
                        <Button primary>View Requests </Button>
                      </a>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}
/*
<h1>
  {' '}
  {this.props.minimumContribution} {this.props.balance}{' '}
  {this.props.requestsCount} {this.props.approversCount}{' '}
  {this.props.manager}{' '}
</h1>
*/
export default CampaignShow;
