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
  Table,
  Modal,
  Icon,
  Image,
  Header,
} from "semantic-ui-react";
import { Link } from "../../routes";
import Details from "./details";

class KitPopUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.hideModal}>
        <Modal.Header
          style={{
            fontSize: "2em",
            color: "rgba(255, 255, 255, 1.0)",
            backgroundColor: "rgba(212, 32, 32, 1.0)",
          }}
        >
          Campaign Acquisition
        </Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <Grid style={{ width: "850px" }}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Table
                    basic="very"
                    celled
                    collapsing
                    style={{ width: "420px" }}
                  >
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell
                          colSpan="2"
                          style={{
                            fontSize: "1.5em",
                            color: "rgba(212, 32, 32, 0.9)",
                          }}
                        >
                          Campaign Details
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              Description
                              <Header.Subheader>Core Concept</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>
                          This borrower aims to introduce a new concept into the
                          market, by using new methods
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              Funding Goal
                              <Header.Subheader>How much?</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>150.000€</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              Funding Method
                              <Header.Subheader>How?</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>Equity Crowdfunding</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              Preferred Platform
                              <Header.Subheader>
                                As indicated by borrower
                              </Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>No Preference</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              Additional Information
                              <Header.Subheader>Executive</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>-</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
                <Grid.Column style={{ marginTop: "40px" }}>
                  <Details width="350px" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <br />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.hideModal}
            primary
            style={{
              backgroundColor: "rgba(212, 32, 32, 1.0)",
            }}
          >
            Proceed <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default KitPopUp;
