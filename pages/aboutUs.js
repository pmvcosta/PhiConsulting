import React, { Component } from 'react';
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Image,
  List,
  Icon,
} from 'semantic-ui-react';
import factory from '../ethereum/factory';

//import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import { Link } from '../routes';

class AboutUs extends Component {
  //static makes it so that function is not assigned to instances of class but

  //to the class itself, CampaignIndex
  /*  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };

    //same as

    //return {campaigns : campaigns} //setting a class variable
  }*/

  //Next.js adds requirements for data loading.

  //Cant be done in componentDidMount

  //"primary" as written below is the same as primary={true}
  render() {
    return (
      <Layout>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '3em' }}>
                  Meet Our Team:
                </Header>
                <br />
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Daniela Antão{' '}
                </Header>
                <Button
                  href="https://www.linkedin.com/in/daniela-bruto-da-costa-antao-7379808/"
                  target="_blank"
                  circular
                  color="linkedin"
                  icon="linkedin"
                  style={{ marginTop: '-.5em' }}
                />
                <List>
                  <List.Item
                    icon="mail"
                    content={<a href="dbruto@gmail.com">dbruto@gmail.com</a>}
                  />
                </List>
                <p style={{ fontSize: '1.33em' }}>
                  Have you met our CEO? She's a woman of great skill and even
                  greater enthusiasm!
                  <br />
                  <b>Qualifications:</b>
                  <List bulleted>
                    <List.Item>
                      {' '}
                      Regulatory Affairs Lawyer in the ICT industry;
                    </List.Item>
                    <List.Item>
                      Extensive inhouse experience with strategy-level corporate
                      world.
                    </List.Item>
                  </List>
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={7}>
                <Image bordered circular size="medium" src="/DAntao.jpg" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <br />
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Pedro Costa{' '}
                </Header>
                <Button
                  href="https://www.linkedin.com/in/pedro-costa-628a4b1b6/"
                  target="_blank"
                  circular
                  color="linkedin"
                  icon="linkedin"
                  style={{ marginTop: '-.5em' }}
                />
                <List>
                  <List.Item
                    icon="mail"
                    content={
                      <a href="pcosta1com@gmail.com">pcosta1com@gmail.com</a>
                    }
                  />
                </List>
                <p style={{ fontSize: '1.33em' }}>
                  And here's our CTO! He's quite green, yet he is still
                  determined to give his all for our initiative!
                  <br />
                  <b>Qualifications:</b>
                  <List bulleted>
                    <List.Item> MSc in Physics Engineering (IST-UL);</List.Item>
                    <List.Item>
                      Basic-Intermediate knowledge of:
                      <List.List>
                        <List.Item> C </List.Item>
                        <List.Item> C++ </List.Item>
                        <List.Item> Python </List.Item>
                        <List.Item> JavaScript </List.Item>
                        <List.Item> Solidity </List.Item>
                        <List.Item> React </List.Item>
                        <List.Item> HTML </List.Item>
                        <List.Item> CSS </List.Item>
                      </List.List>
                    </List.Item>
                  </List>
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={7}>
                <Image bordered circular size="medium" src="/PCosta.jpg" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              What we bring to the table{' '}
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              A new lean middleman in the fintech industry of crowd &
              chain-enabled asset investment. We aim to provide access to
              reliable and liquid asset-backed investments in well performing
              verticals. Currently, we are focused on the{' '}
              <b>Legal Cannabis use case</b>.
            </p>
          </Container>
        </Segment>
      </Layout>
    );
  }
}

export default AboutUs;

//Always necessary...
