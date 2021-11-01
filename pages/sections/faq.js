import React, { Component, useEffect, useState } from "react";
import {
  Menu,
  Sidebar,
  Button,
  Segment,
  Container,
  Visibility,
  Transition,
  Header,
  Icon,
  Grid,
  Embed,
  Divider,
  Accordion,
  List,
  Image,
} from "semantic-ui-react";
import { Link } from "../../routes";

import ScrollAppear from "../../components/ScrollLayout";

class LayoutMenu extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { isTop, fixed, logoutHandler, session } = this.props;
    const { activeIndex } = this.state;

    return (
      <Grid
        stretched
        stackable
        verticalAlign="middle"
        style={{
          padding: "9em 0em",
          /*backgroundImage: 'url(/backgnd.jpg)',*/
          backgroundColor: "rgba(255,255,255,1.0)",
          /* Create the parallax scrolling effect */
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no - repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid.Row
          fluid
          style={{
            backgroundColor: "rgba(28, 173, 229, 1.0)",
            height: "250px",
          }}
        >
          <Grid.Column
            floated="left"
            width={16}
            style={{
              paddingLeft: "18em",
              paddingRight: "18em",
              textAlign: "center",
            }}
          >
            <Header as="h1" style={{ marginBottom: "40px", marginTop: "60px" }}>
              High-Growth Companies Trust Us <br />
              to Obtain Funding To Grow
              <Header.Subheader
                style={{ marginTop: "15px", fontSize: "0.6em" }}
              >
                We believe it's important for everyone to have access to the
                funding they need
                <br />
                <br /> and in the way they want it.
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          fluid
          style={{
            backgroundColor: "rgba(28, 173, 229, 1.0)",
            height: "350px",
          }}
        >
          <Grid.Column
            floated="left"
            width={16}
            style={{
              paddingLeft: "20em",
              paddingRight: "18em",
              textAlign: "left",
            }}
          >
            <Transition
              transitionOnMount="true"
              animation="fade"
              duration={500}
            >
              <Accordion
                inverted
                exclusive={false}
                style={{ marginBottom: "80px" }}
              >
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  What is a dog?
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 0}
                  animation="fade down"
                  unmountOnHide={true}
                  duration={400}
                >
                  <Accordion.Content
                    active={activeIndex === 0}
                    style={{
                      overflow: "hidden",
                      transition: "max-height 1s ease-in-out",
                    }}
                  >
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </Accordion.Content>
                </Transition>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  What kinds of dogs are there?
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 1}
                  animation="fade down"
                  duration={400}
                >
                  <Accordion.Content active={activeIndex === 1}>
                    <p>
                      There are many breeds of dogs. Each breed varies in size
                      and temperament. Owners often select a breed of dog that
                      they find to be compatible with their own lifestyle and
                      desires from a companion.
                    </p>
                  </Accordion.Content>
                </Transition>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  How do you acquire a dog?
                </Accordion.Title>
                <Transition
                  visible={activeIndex === 2}
                  animation="fade down"
                  duration={400}
                >
                  <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Three common ways for a prospective owner to acquire a dog
                      is from pet shops, private owners, or shelters.
                    </p>
                    <p>
                      A pet shop may be the most convenient way to buy a dog.
                      Buying a dog from a private owner allows you to assess the
                      pedigree and upbringing of your dog before choosing to
                      take it home. Lastly, finding your dog from a shelter,
                      helps give a good home to a dog who may not find one so
                      readily.
                    </p>
                  </Accordion.Content>
                </Transition>
              </Accordion>
            </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutMenu;
