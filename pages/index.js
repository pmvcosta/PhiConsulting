import React, { Component } from 'react';
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Transition,
  Visibility,
  Image,
  Reveal,
  Icon,
} from 'semantic-ui-react';
import Layout from '../components/LayoutIndex';
import { Link } from '../routes';
import Newsletter from './newsletter';
import ScrollAppear from '../components/ScrollLayout';
import PreServiceScroll from './preCampServices';
import ServiceScroll from './campServices';
import PostServiceScroll from './postCampServices';

class MainIndex extends Component {
  //Next.js adds requirements for data loading.

  //Cant be done in componentDidMount
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  //"primary" as written below is the same as primary={true}

  render() {
    const { fixed } = this.state;
    return (
      <Layout>
        <Segment
          fluid
          style={{ padding: '8em 0em' }}
          vertical
          style={{
            backgroundColor: 'rgba(212, 32, 32, 0.0)',
          }}
        >
          <Grid
            stretched
            stackable
            verticalAlign="middle"
            style={{
              padding: '9em 0em',
              backgroundImage: 'url(/backgnd.jpg)',
              /* Create the parallax scrolling effect */
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no - repeat',
              backgroundSize: 'cover',
            }}
          >
            <Grid.Row
              fluid
              style={{
                backgroundColor: 'rgba(212, 32, 32, 1.0)',
              }}
            >
              <Grid.Column width={8} style={{ paddingLeft: '10em' }}>
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: '3em',
                      color: 'rgba(255, 255, 255, 0.9)',
                      paddingBottom: '1em',
                    }}
                  >
                    Obtain Funding and <br /> Validate Consumer Demand
                  </Header>
                </ScrollAppear>
                <br />
                <ScrollAppear>
                  <p
                    style={{
                      fontSize: '1.5em',
                      color: 'rgba(220, 220, 220 , 1.0)',
                    }}
                  >
                    <b>
                      If you’re looking to for an alternative to classical
                      banking services, we can help. As one of the first
                      portuguese crowdfunding agencies, we have experience with
                      every type of project, and at every stage of the funding
                      process. When it comes to alternative finance, we’re the
                      easy choice.
                    </b>
                  </p>
                </ScrollAppear>
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: '3em',
                      color: 'rgba(255, 255, 255, 0.9)',
                      paddingBottom: '1em',
                    }}
                  >
                    <br />
                    <br />
                    How We Can Support You
                  </Header>
                </ScrollAppear>
                <br />
                <ScrollAppear>
                  <p
                    style={{
                      fontSize: '1.5em',
                      color: 'rgba(220, 220, 220 , 1.0)',
                    }}
                  >
                    <b>
                      If you are looking for an alternative means of raising
                      funds via crowdfunding and crowdlending, we can help you
                      plan, manage and optimise your approach. We assist
                      ambitious businesses in all sectors, helping you to
                      communicate with potential investors and portray your
                      business in the best possible light!
                    </b>
                  </p>
                </ScrollAppear>
              </Grid.Column>
              <Grid.Column
                floated="right"
                width={7}
                style={{ paddingRight: '5em' }}
              >
                <Transition
                  animation="scale"
                  transitionOnMount={true}
                  duration={500}
                >
                  <Image bordered rounded size="big" src="/indexPic.jpg" />
                </Transition>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: '2em' }}>
              <Grid.Column>
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: '6em',
                      color: 'rgba(212, 32, 32, 1.0)',
                      textAlign: 'center',
                      paddingTop: '1em',
                      paddingBottom: '1em',
                    }}
                  >
                    What do we offer?
                  </Header>
                </ScrollAppear>
                <br />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row fluid>
              <Grid.Column
                fluid
                width={8}
                style={{
                  backgroundColor: 'rgba(212, 32, 32, 1.0)',
                  paddingLeft: '10em',
                  paddingRight: '10em',
                  paddingTop: '2em',
                  paddingBottom: '5em',
                }}
              >
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: '3em',
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <br />
                    Pre-Campaign
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p
                    style={{
                      fontSize: '1.5em',
                      color: 'rgba(220, 220, 220 , 1.0)',
                    }}
                  >
                    <br />
                    <b>
                      Through a multifaceted approach, we build up the
                      foundation of your crowdfunding campaign. From valuation
                      to marketing, visual media production, financial modelling
                      and investment strategy, we pull out all the stops to
                      maximize the viability of your funding campaign!
                    </b>
                  </p>
                </ScrollAppear>
              </Grid.Column>
              <Grid.Column stretched fluid floated="right" width={7}>
                <PreServiceScroll />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column></Grid.Column>
            </Grid.Row>

            <Grid.Row fluid>
              <Grid.Column
                fluid
                width={8}
                style={{
                  backgroundColor: 'rgba(212, 32, 32, 1.0)',
                  paddingLeft: '10em',
                  paddingRight: '10em',
                  paddingTop: '2em',
                  paddingBottom: '5em',
                }}
              >
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: "3em",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <br />
                    Campaing Launch
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p
                    style={{
                      fontSize: "1.5em",
                      color: "rgba(220, 220, 220 , 1.0)",
                    }}
                  >
                    <br />
                    <b>
                      We understand that keeping constant track of your
                      crowdfunding campaign is time consuming, and often means
                      temporarily neglecting other crucial aspects of your
                      business. That is why we offer to manage your campaign, in
                      keeping with your specifications and ensuring it never
                      runs out of steam!
                    </b>
                  </p>
                </ScrollAppear>
              </Grid.Column>
              <Grid.Column stretched fluid floated="right" width={7}>
                <ServiceScroll />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column></Grid.Column>
            </Grid.Row>

            <Grid.Row fluid>
              <Grid.Column
                fluid
                width={8}
                style={{
                  backgroundColor: "rgba(212, 32, 32, 1.0)",
                  paddingLeft: "10em",
                  paddingRight: "10em",
                  paddingTop: "2em",
                  paddingBottom: "5em",
                }}
              >
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: "3em",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <br />
                    Post Campaign
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p
                    style={{
                      fontSize: "1.5em",
                      color: "rgba(220, 220, 220 , 1.0)",
                    }}
                  >
                    <br />
                    <b>
                      The journey doesn't end once the crowdfunding campaign is
                      successfully completed! Our post-crowdfunding services are
                      designed to maintain and even increase your project's
                      momentum, as well as its revenue and customer base.
                    </b>
                  </p>
                </ScrollAppear>
              </Grid.Column>
              <Grid.Column stretched fluid floated="right" width={7}>
                <PostServiceScroll />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <ScrollAppear>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    "Crowdfunding started as a novel way to raise money to fund
                    projects, and has evolved into an industry that generated
                    $89 billion worldwide in 2020."
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p style={{ fontSize: "1.33em" }}>
                    <br /> Delloite, <br />
                    <b>
                      Crowdfunding: from novelty to viable capital-raising tool{" "}
                    </b>
                  </p>
                </ScrollAppear>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <ScrollAppear>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    "Crowdfunding is shaping up to be the privileged means of
                    funding the commercialization of new technologies."
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p style={{ fontSize: "1.33em" }}>
                    <br />
                    MIT Technology Review
                  </p>
                </ScrollAppear>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment
          fluid
          style={{ padding: "8em 0em" }}
          vertical
          style={{
            backgroundColor: "rgba(212, 32, 32, 0.9)",
          }}
        >
          <Container text>
            <ScrollAppear>
              <Divider
                as="h4"
                className="header"
                horizontal
                style={{
                  fontSize: "2em",
                  margin: "0em 0em",
                  textTransform: "uppercase",
                }}
              >
                <a href="#" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                  Stay Up To Date!
                </a>
              </Divider>
            </ScrollAppear>
            <ScrollAppear>
              <Header
                as="h3"
                style={{ fontSize: "1.5em", color: "rgba(255, 255, 255, 0.9)" }}
              >
                <br />
                Subscribe to our newsletter
              </Header>
            </ScrollAppear>
            <ScrollAppear>
              <p
                style={{
                  fontSize: "1.33em",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                By doing so, you'll also be considered as an early adopter! We
                will only send pertinent information, and at a reasonable pace.
              </p>
            </ScrollAppear>
            <br />
            <Newsletter />
            <br />
          </Container>
        </Segment>
      </Layout>
    );
  }
}

export default MainIndex;

//Always necessary...
