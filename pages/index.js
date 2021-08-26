import React, { Component } from "react";
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
} from "semantic-ui-react";
import Layout from "../components/LayoutIndex";
import { Link } from "../routes";
import Newsletter from "./newsletter";
import ScrollAppear from "../components/ScrollLayout";

class MainIndex extends Component {
  //Next.js adds requirements for data loading.

  //Cant be done in componentDidMount
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  //"primary" as written below is the same as primary={true}
  renderCard(icon, title, text) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Reveal animated="fade">
          <Reveal.Content visible centered style={{ pointerEvents: "none" }}>
            <Card centered style={{ width: "250px", height: "210px" }}>
              <Card.Content textAlign="center">
                <br />
                <Icon
                  name={icon}
                  size="massive"
                  style={{ color: "rgba(212, 32, 32, 0.9)" }}
                />

                <Card.Header as="h2" centered style={{ fontSize: "1.2em" }}>
                  <br />
                  {title}
                </Card.Header>
              </Card.Content>
            </Card>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Card
              centered
              style={{
                width: "250px",
                height: "210px",
                backgroundColor: "rgba(212, 32, 32, 0.9)",
              }}
            >
              <Card.Content textAlign="center">
                <Card.Header
                  as="h2"
                  style={{ fontSize: "1em", color: "white" }}
                >
                  <br />
                  {text}
                </Card.Header>
                <Link route="/subscribe">
                  <a>
                    <Button color="white">Learn More</Button>
                  </a>
                </Link>
              </Card.Content>
            </Card>
          </Reveal.Content>
        </Reveal>
      </div>
    );
  }

  render() {
    const { fixed } = this.state;
    return (
      <Layout>
        <Segment
          fluid
          style={{ padding: "8em 0em" }}
          vertical
          style={{
            backgroundColor: "rgba(212, 32, 32, 0.9)",
          }}
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row fluid>
              <Grid.Column width={7}>
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    Obtain Funding and Validate Consumer Demand
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p style={{ fontSize: "1.33em" }}>
                    If you’re looking to for an alternative to classical banking
                    services, we can help. As one of the first portuguese
                    crowdfunding agencies, we have experience with every type of
                    project, and at every stage of the funding process. When it
                    comes to alternative finance, we’re the easy choice.
                  </p>
                </ScrollAppear>
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <br />
                    <br />
                    How We Can Support You
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p style={{ fontSize: "1.33em" }}>
                    If you are looking for an alternative means of raising funds
                    via crowdfunding and crowdlending, we can help you plan,
                    manage and optimise your approach. We assist ambitious
                    businesses in all sectors, helping you to communicate with
                    potential investors and portray your business in the best
                    possible light!
                  </p>
                </ScrollAppear>
              </Grid.Column>
              <Grid.Column floated="right" width={7}>
                <Transition
                  animation="scale"
                  transitionOnMount={true}
                  duration={500}
                >
                  <Image bordered rounded size="big" src="/indexPic.jpg" />
                </Transition>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment
          fluid
          style={{
            padding: "8em 0em",
            backgroundImage: "url(/backgnd.jpg)",
            /* Create the parallax scrolling effect */
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
          }}
          vertical
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row centered></Grid.Row>
            <Grid.Row centered>
              <Grid.Column textAlign="center" centered>
                <ScrollAppear>
                  <Header
                    as="h3"
                    style={{ fontSize: "4em", color: "rgba(212, 32, 32, 0.9)" }}
                    textAlign="center"
                  >
                    What do we offer?
                    <br />
                  </Header>
                </ScrollAppear>
                <p style={{ fontSize: "1.5em" }} textAlign="center">
                  Our full-service capabilities allow us to handle every step of
                  the process completely in-house, from discover and strategy to
                  manufacturing social media and public relations.
                </p>
                <ScrollAppear>
                  <Divider
                    as="h4"
                    className="header"
                    horizontal
                    style={{
                      fontSize: "2em",
                      margin: "3em 0em",
                      textTransform: "uppercase",
                    }}
                  >
                    <a href="#" style={{ color: "rgba(212, 32, 32, 0.9)" }}>
                      Pre-Campaign
                    </a>
                  </Divider>
                </ScrollAppear>
                <br />
                <Card.Group stackable centered itemsPerRow={4}>
                  {this.renderCard(
                    "chart line",
                    "Market Analysis and Strategy",
                    "Our understanding of the market is the key for brand building and delivering the right messages to the  target audiences."
                  )}

                  {this.renderCard(
                    "users",
                    "Community Generation",
                    "We use paid Internet advertising to drive traffic and build your following. Our advertising team are experts at deploying your advertising dollars to maximize ROI and campaign outcome."
                  )}

                  {this.renderCard(
                    "bullhorn",
                    "Lead Generation",
                    "Through landing page creation and the growth of your social media following, our team will collect qualified leads for your funding campaign that want to adhere to your business as soon as possible."
                  )}

                  {this.renderCard(
                    "balance",
                    "Regulations and Contracts",
                    "Contracts and legal documents are a common source of headaches. With our assistance, you can be sure all documentation is in perfect order. This way you can focus solely on your business needs!"
                  )}

                  {this.renderCard(
                    "share alternate",
                    "Social Media Advertising",
                    "Social media is where the conversation is happening. We design opportunities for your product to be presented in unique and creative ways, resulting in a larger and more interactive following."
                  )}

                  {this.renderCard(
                    "film",
                    "Media Production",
                    "Visual media is undoubtedly a powerful means to communicate your ideas, products or services. We work with the best media production agencies and supervise the creation process every step away to have the perfect message."
                  )}

                  {this.renderCard(
                    "globe",
                    "Website Creation",
                    "We are creating a dedicated website or landing page with extremely high subscription rates for further efficient execution of email marketing"
                  )}

                  {this.renderCard(
                    "rocket",
                    "Funding Freedom",
                    "Pick whatever crowdfunding means best fits your business: rewards-based, equity-based, loan, bond, donations or revenue-based"
                  )}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column centered>
                <ScrollAppear>
                  <Divider
                    as="h4"
                    className="header"
                    horizontal
                    style={{
                      fontSize: "2em",
                      margin: "3em 0em",
                      textTransform: "uppercase",
                    }}
                  >
                    <a href="#" style={{ color: "rgba(212, 32, 32, 0.9)" }}>
                      Campaign Launch
                    </a>
                  </Divider>
                </ScrollAppear>
                <br />
                <Card.Group stackable centered itemsPerRow={3}>
                  {this.renderCard(
                    "dashboard",
                    "Active Campaign Management",
                    "Witht the campaign now up and running, you can easily check up on its status, and of the various channels promoting it to ensure it is always performing excellently."
                  )}

                  {this.renderCard(
                    "pie graph",
                    "Realtime Analytics",
                    "Grab a chair, sit back, relax and watch us release the floodgates. With the audience we've built up, your campaign is pushed to the top, and our analytics pinpoints where to focus our efforts to keep the momentum going. "
                  )}

                  {this.renderCard(
                    "signal",
                    "Concurrent Marketing",
                    "Even during an ongoing campaign, our team deploys additional advertising, email marketing, and social media to continue the momentum. The end result is a campaign many times its original goal."
                  )}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column centered>
                <ScrollAppear>
                  <Divider
                    as="h4"
                    className="header"
                    horizontal
                    style={{
                      fontSize: "2em",
                      margin: "3em 0em",
                      textTransform: "uppercase",
                    }}
                  >
                    <a href="#" style={{ color: "rgba(212, 32, 32, 0.9)" }}>
                      Post-Campaign
                    </a>
                  </Divider>
                </ScrollAppear>
                <br />
                <Card.Group stackable centered itemsPerRow={3}>
                  {this.renderCard(
                    "tasks",
                    "Long Term Support",
                    "Your funding doesn't stop once your campaign is over. With our long term support, we ensure your business keeps going onwards and upwards! "
                  )}

                  {this.renderCard(
                    "shop",
                    "E-Commerce Setup/Development",
                    "We continue to market to your new backers by taking them through expertly crafted upsell funnels"
                  )}

                  {this.renderCard(
                    "bullseye",
                    "Post-Campaign Marketing",
                    "Why stop marketing when your campaign is over? We setup marketing and  pre-order systems on your own website and other crowdfunding websites to maximize traction and sales."
                  )}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <ScrollAppear>
                  <Header as="h3" style={{ fontSize: "1.5em" }}>
                    "Crowdfunding is coming of age. What started as a novel way
                    to raise money from large numbers of people to fund projects
                    has evolved into an industry that generated approximately
                    $89 billion worldwide in 2020."
                  </Header>
                </ScrollAppear>
                <ScrollAppear>
                  <p style={{ fontSize: "1.33em" }}>
                    Delloite,{" "}
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
                  <p style={{ fontSize: "1.33em" }}>MIT Technology Review</p>
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
              <p style={{ fontSize: "1.33em" }}>
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
