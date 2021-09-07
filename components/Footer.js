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
        color="green"
        inverted
        vertical
        style={{
          padding: '5em 0em',
          backgroundImage: 'url(/backgnd.jpg)',
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
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header
                  as="h4"
                  content="About"
                  style={{
                    color: 'rgba(74, 74, 74, 0.9)',
                  }}
                />
                <List link>
                  <List.Item as="a" href="/subscribe">
                    About us
                  </List.Item>
                  <List.Item as="a" href="/subscribe">
                    Contact Us
                  </List.Item>
                  <List.Item as="a" href="/subscribe">
                    Roadmap
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header
                  as="h4"
                  content="Services"
                  style={{
                    color: 'rgba(74, 74, 74, 0.9)',
                  }}
                />
                <List link>
                  <List.Item as="a" href="/subscribe">
                    Subscribe to Newsletter
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://hellolisbon.typeform.com/to/CnjqMpxq"
                    target="_blank"
                  >
                    Participate in Survey
                  </List.Item>
                  <List.Item as="a" href="/subscribe">
                    How To Access
                  </List.Item>
                  <List.Item as="a" href="/subscribe">
                    FAQ
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header
                  as="h4"
                  style={{
                    color: 'rgba(74, 74, 74, 0.9)',
                  }}
                >
                  Additional Information
                </Header>
                <p
                  style={{
                    color: 'rgba(74, 74, 74, 0.9)',
                  }}
                >
                  Become an early adopter to help shape the future and be part
                  of what comes next. Subscribe to the newsletter to stay up to
                  date with our progress!
                </p>
                <Header
                  as="h4"
                  style={{
                    color: 'rgba(74, 74, 74, 0.9)',
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
