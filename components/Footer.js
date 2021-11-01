import React, { Component } from 'react';
import {
  Menu,
  Segment,
  Grid,
  List,
  Header,
  Container,
  Button,
} from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        style={{
          padding: '5em 1em',
          backgroundColor: 'rgba(0,0,0,1.0)',
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          /* Set a specific height */
          minHeight: '400px',

          /* Create the parallax scrolling effect */
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no - repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <Grid divided inverted stackable style={{ marginLeft: '10px' }}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header
                  as="h4"
                  content="About"
                  style={{
                    color: 'rgba(28, 173, 229, 1.0)',
                  }}
                />
                <List link>
                  <List.Item
                    as="a"
                    href="/subscribe"
                    style={{
                      color: 'rgba(230, 230, 230, 1.0)',
                    }}
                  >
                    About us
                  </List.Item>
                  <List.Item
                    as="a"
                    href="/subscribe"
                    style={{
                      color: 'rgba(230, 230, 230, 1.0)',
                    }}
                  >
                    Contact Us
                  </List.Item>
                  <List.Item
                    as="a"
                    href="/subscribe"
                    style={{
                      color: 'rgba(230, 230, 230, 1.0)',
                    }}
                  >
                    Roadmap
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header
                  as="h4"
                  content="Services"
                  style={{
                    color: 'rgba(28, 173, 229, 1.0)',
                  }}
                />
                <List link>
                  <List.Item
                    as="a"
                    href="/subscribe"
                    style={{
                      color: 'rgba(230, 230, 230, 1.0)',
                    }}
                  >
                    Subscribe to Newsletter
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://hellolisbon.typeform.com/to/CnjqMpxq"
                    target="_blank"
                    style={{
                      color: 'rgba(230, 230, 230, 1.0)',
                    }}
                  >
                    Participate in Survey
                  </List.Item>
                  <List.Item
                    as="a"
                    href="/subscribe"
                    style={{
                      color: 'rgba(230, 230, 230, 1.0)',
                    }}
                  >
                    How To Access
                  </List.Item>
                  <List.Item
                    as="a"
                    href="/subscribe"
                    style={{
                      color: 'rgba(230, 230, 230, 1.0)',
                    }}
                  >
                    FAQ
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header
                  as="h4"
                  style={{
                    color: 'rgba(28, 173, 229, 1.0)',
                  }}
                >
                  Additional Information
                </Header>
                <p
                  style={{
                    color: 'rgba(28, 173, 229, 1.0)',
                  }}
                >
                  PHI is a consulting agency, promoting access to software
                  development and ancillary services. PHI is not a registered
                  broker-dealer and does not offer investment advice or advise
                  on the raising of capital through securities offerings. PHI
                  does not recommend or otherwise suggest that any investor make
                  an investment in a particular company, or that any company
                  offer securities to a particular investor. PHI takes no part
                  in the negotiation or execution of transactions for the
                  purchase or sale of securities, and at no time has possession
                  of funds or securities. No money nor securities transactions
                  are executed or negotiated on or through PHI. PHI receives no
                  compensation in connection with the purchase or sale of
                  securities.
                </p>
                <Header
                  as="h4"
                  style={{
                    color: 'rgba(28, 173, 229, 1.0)',
                  }}
                >
                  Reach us at:
                </Header>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
export default Footer;
