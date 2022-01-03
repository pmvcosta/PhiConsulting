import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import {
  Menu,
  Sidebar,
  Button,
  Segment,
  Container,
  Visibility,
  Header,
  Icon,
  Grid,
  Divider,
  Dimmer,
  Loader,
  List,
  Image,
  Dropdown,
} from "semantic-ui-react";
import { Link, Router } from "../routes";
import PropTypes from "prop-types";
import HomePageHeading from "./HomePageHeading";
import { signOut } from "next-auth/client"; //To keep track of wether user is logged in

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1080,
  },
});

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a
 responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: props.currentItem, loading: false };
  }

  beginLoading = () => this.setState({ loading: true });

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  handleItemClick = (e, { name }) => {
    if (name !== this.state.activeItem) {
      try {
        if (name === undefined || name == "dashboard") {
          Router.pushRoute("/dashboard");
        } else {
          Router.pushRoute(`/dashboard/${name}`);
        }
      } catch (e) {
        Router.pushRoute("/dashboard");
      }

      this.setState({ activeItem: name });
      this.setState({ loading: true });
    }
  };

  logoutHandler = () => {
    signOut();
  };

  render() {
    const {
      children,
      session,
      currentItem,
      profileType,
      isLoading,
    } = this.props;
    const { sidebarOpened, activeItem, loading } = this.state;

    const trigger = (
      <span
        style={{
          color: "rgba(28, 173, 229, 1.0)",
        }}
      >
        <Icon
          name="user"
          style={{
            color: "rgba(28, 173, 229, 1.0)",
          }}
        />{" "}
        User Profile
      </span>
    );

    return (
      <Media greaterThan="mobile">
        <Dimmer.Dimmable as={Segment} blurring dimmed={loading}>
          <Dimmer
            active={loading}
            inverted
            fluid
            verticalAlign="top"
            style={{
              width: "100%",
              height: "100%",
              marginTop: "0px",
            }}
          >
            <Loader inline="centered" style={{ marginTop: "40vh" }}>
              {" "}
              Loading{" "}
            </Loader>
          </Dimmer>

          <Grid
            fluid
            style={{
              backgroundImage: "url(/backgnd.jpg)",
              /* Set a specific height */
              minHeight: "100vh",

              /* Create the parallax scrolling effect */
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no - repeat",
              backgroundSize: "cover",
            }}
          >
            <Grid.Row>
              <Grid.Column stretched width={3}></Grid.Column>
              <Grid.Column
                width={12}
                style={{
                  marginTop: "80px",
                }}
              >
                {children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Menu
            vertical
            color="blue"
            pointing
            secondary
            fixed="top"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              height: "100%",
              marginTop: "45px",
              borderRight: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <Menu.Item centered>
              <br />
              <br />
            </Menu.Item>

            <Menu.Item name="dashboard" onClick={this.handleItemClick}>
              <Image src="/LogoS2.png" size="tiny" centered />
            </Menu.Item>

            {profileType == "Borrower" && (
              <Menu.Item style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}>
                <a
                  style={{
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                >
                  <Icon
                    name="flag"
                    size="large"
                    style={{
                      marginRight: "6px",
                      color: "rgba(240, 240, 240, 1.0)",
                    }}
                  />
                  Funding Campaigns
                  <Link route="/dashboard/newCampaign">
                    <Icon
                      name="plus circle"
                      link="/dashboard/newCampaign"
                      style={{
                        marginLeft: "6px",
                        height: "10px",
                        width: "auto",
                        color: "rgba(240, 240, 240, 1.0)",
                      }}
                    />
                  </Link>
                </a>
              </Menu.Item>
            )}

            {profileType == "Borrower" && (
              <Menu.Item
                name="activeCampaigns"
                active={activeItem === "activeCampaigns"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Active</a>
              </Menu.Item>
            )}

            {profileType == "Borrower" && (
              <Menu.Item
                name="pendingCampaigns"
                active={activeItem === "pendingCampaigns"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Pending</a>
              </Menu.Item>
            )}

            {profileType == "Borrower" && (
              <Menu.Item
                name="completedCampaigns"
                active={activeItem === "completedCampaigns"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Completed</a>
              </Menu.Item>
            )}

            {profileType == "Borrower" && (
              <Menu.Item style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}>
                <a
                  style={{
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                >
                  <Icon
                    name="paper plane"
                    size="large"
                    style={{
                      marginRight: "10px",
                      color: "rgba(240, 240, 240, 1.0)",
                    }}
                  />
                  Service Requests
                  <Link route="/dashboard/newRequest">
                    <Icon
                      name="plus circle"
                      link="/dashboard/newRequest"
                      style={{
                        marginLeft: "10px",
                        height: "10px",
                        width: "auto",
                        color: "rgba(240, 240, 240, 1.0)",
                      }}
                    />
                  </Link>
                </a>
              </Menu.Item>
            )}

            {profileType == "Borrower" && (
              <Menu.Item
                name="pendingRequests"
                active={activeItem === "pendingRequests"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Pending</a>
              </Menu.Item>
            )}

            {profileType == "Borrower" && (
              <Menu.Item
                name="completedRequests"
                active={activeItem === "completedRequests"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Completed</a>
              </Menu.Item>
            )}

            {profileType == "Funding Platform" && (
              <Menu.Item style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}>
                <a
                  style={{
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                >
                  <Icon
                    name="flag"
                    size="large"
                    style={{
                      marginRight: "6px",
                      color: "rgba(240, 240, 240, 1.0)",
                    }}
                  />
                  Funding Campaigns
                  <Link route="/dashboard">
                    <Icon
                      name="plus circle"
                      link="/dashboard/newCampaign"
                      style={{
                        marginLeft: "6px",
                        height: "10px",
                        width: "auto",
                        color: "rgba(240, 240, 240, 1.0)",
                      }}
                    />
                  </Link>
                </a>
              </Menu.Item>
            )}

            {profileType == "Funding Platform" && (
              <Menu.Item
                name="activeCampaigns"
                active={activeItem === "activeCampaigns"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Active</a>
              </Menu.Item>
            )}

            {profileType == "Funding Platform" && (
              <Menu.Item
                name="pendingCampaigns"
                active={activeItem === "pendingCampaigns"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Pending</a>
              </Menu.Item>
            )}

            {profileType == "Funding Platform" && (
              <Menu.Item
                name="completedCampaigns"
                active={activeItem === "completedCampaigns"}
                onClick={this.handleItemClick}
              >
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Completed</a>
              </Menu.Item>
            )}
          </Menu>
          <Menu
            borderless
            fixed="top"
            size="large"
            style={{
              shadowColor: "rgba(0, 0, 0, 0.9)",
              shadowRadius: "20",
              marginTop: "48px",
              height: "45px",
              backgroundColor: "rgba(240, 240, 240, 1.0)",
            }}
          >
            <Menu.Item>
              <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>Profile Type: </a>
              <a style={{ color: "rgba(0, 0, 0, 1.0)" }}>
                &nbsp; {profileType}
              </a>
            </Menu.Item>

            <Menu.Item>
              <Link route="/dashboard">
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                  Available Platforms
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/dashboard">
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                  Funding Methods
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/dashboard">
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                  Service Providers
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/dashboard">
                <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                  Terms & Conditions
                </a>
              </Link>
            </Menu.Item>
          </Menu>
          <Menu
            borderless
            fixed="top"
            size="large"
            style={{
              shadowColor: "rgba(0, 0, 0, 0.9)",
              shadowRadius: "20",
              height: "48px",
              backgroundColor: "rgba(210, 210, 210, 1.0)",
              /*backgroundImage: "url(/backgnd.jpg)",*/
              /* Set a specific height */
              minHeight: "48px",

              /* Create the parallax scrolling effect */
            }}
          >
            <Menu.Item>
              <Link route="/">
                <a>
                  <Image
                    src="/logo.png"
                    centered
                    style={{ marginTop: "-2%", height: "45px", width: "auto" }}
                  />
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown
                direction="left"
                trigger={trigger}
                style={{
                  marginRight: "10px",
                  color: "rgba(28, 173, 229, 1.0)",
                }}
              >
                <Dropdown.Menu>
                  <Dropdown.Header
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Image centered src="/LogoS2.png" size="tiny" />
                  </Dropdown.Header>
                  <Dropdown.Header
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Signed in as: <br />
                    <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                      {session.user.email}
                    </a>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Header>Settings and Options</Dropdown.Header>
                  <Dropdown.Item>
                    <Icon name="cogs" />
                    User Preferences
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name="book" />
                    Documentation
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name="help" />
                    Support
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name="bullhorn" />
                    Give us feedback
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.logoutHandler}>
                    <Icon name="log out" />
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Dimmer.Dimmable>
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  handleItemClick = (e, { name }) => {
    if (name !== this.state.activeItem) {
      try {
        if (name === undefined || name == "dashboard") {
          Router.pushRoute("/dashboard");
        } else {
          Router.pushRoute(`/dashboard/${name}`);
        }
      } catch (e) {
        Router.pushRoute("/dashboard");
      }

      this.setState({ activeItem: name });
      this.setState({ loading: true });
    }
  };

  logoutHandler = () => {
    signOut();
  };

  render() {
    const {
      children,
      session,
      isLoading,
      profileType,
      activeItem,
    } = this.props;
    const { sidebarOpened } = this.state;
    const trigger = (
      <span
        style={{
          color: "rgba(240, 240, 240, 1.0)",
        }}
      >
        <Icon
          name="user"
          style={{
            color: "rgba(240, 240, 240, 1.0)",
          }}
        />{" "}
        User Profile
      </span>
    );

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{
            border: "0px",
            outline: "0px",
            backgroundColor: "deepskyblue",
          }}
        >
          <Menu.Item centered>
            <Link route="/dashboard">
              <a>
                <Image src="/LogoS21.png" size="tiny" centered />
              </a>
            </Link>
          </Menu.Item>

          {profileType == "Borrower" && (
            <Menu.Item style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}>
              <a
                style={{
                  color: "rgba(240, 240, 240, 1.0)",
                }}
              >
                <Icon
                  name="flag"
                  size="large"
                  style={{
                    marginRight: "6px",
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                />
                Funding Campaigns
                <Link route="/dashboard/newCampaign">
                  <Icon
                    name="plus circle"
                    link="/dashboard/newCampaign"
                    style={{
                      marginLeft: "6px",
                      height: "10px",
                      width: "auto",
                      color: "rgba(240, 240, 240, 1.0)",
                    }}
                  />
                </Link>
              </a>
            </Menu.Item>
          )}

          {profileType == "Borrower" && (
            <Link route="/dashboard/activeCampaigns">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Active</a>
              </Menu.Item>
            </Link>
          )}

          {profileType == "Borrower" && (
            <Link route="/dashboard/pendingCampaigns">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Pending</a>
              </Menu.Item>
            </Link>
          )}

          {profileType == "Borrower" && (
            <Link route="/dashboard/completedCampaigns">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Completed</a>
              </Menu.Item>
            </Link>
          )}

          {profileType == "Borrower" && (
            <Menu.Item style={{ backgroundColor: "rgba(28, 173, 229, 1.0)" }}>
              <a
                style={{
                  color: "rgba(240, 240, 240, 1.0)",
                }}
              >
                <Icon
                  name="paper plane"
                  size="large"
                  style={{
                    marginRight: "10px",
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                />
                Service Requests
                <Link route="/dashboard/newRequest">
                  <Icon
                    name="plus circle"
                    link="/dashboard/newRequest"
                    style={{
                      marginLeft: "10px",
                      height: "10px",
                      width: "auto",
                      color: "rgba(240, 240, 240, 1.0)",
                    }}
                  />
                </Link>
              </a>
            </Menu.Item>
          )}

          {profileType == "Borrower" && (
            <Link route="/dashboard/pendingRequests">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Pending</a>
              </Menu.Item>
            </Link>
          )}

          {profileType == "Borrower" && (
            <Link route="/dashboard/completedRequests">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Completed</a>
              </Menu.Item>
            </Link>
          )}

          {profileType == "Funding Platform" && (
            <Menu.Item style={{ backgroundColor: "rgba(240, 240, 240, 1.0)" }}>
              <a
                style={{
                  color: "rgba(240, 240, 240, 1.0)",
                }}
              >
                <Icon
                  name="flag"
                  size="large"
                  style={{
                    marginRight: "6px",
                    color: "rgba(240, 240, 240, 1.0)",
                  }}
                />
                Funding Campaigns
                <Link route="/dashboard">
                  <Icon
                    name="plus circle"
                    link="/dashboard/newCampaign"
                    style={{
                      marginLeft: "6px",
                      height: "10px",
                      width: "auto",
                      color: "rgba(240, 240, 240, 1.0)",
                    }}
                  />
                </Link>
              </a>
            </Menu.Item>
          )}

          {profileType == "Funding Platform" && (
            <Link route="/dashboard/activeCampaigns">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Active</a>
              </Menu.Item>
            </Link>
          )}

          {profileType == "Funding Platform" && (
            <Link route="/dashboard/pendingCampaigns">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Pending</a>
              </Menu.Item>
            </Link>
          )}

          {profileType == "Funding Platform" && (
            <Link route="/dashboard/completedCampaigns">
              <Menu.Item>
                <a style={{ color: "rgba(240, 240, 240, 1.0)" }}>Completed</a>
              </Menu.Item>
            </Link>
          )}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Menu
            inverted
            pointing
            secondary
            fixed="top"
            size="large"
            style={{
              border: "0px",
              outline: "0px",
              backgroundColor: "rgba(28, 173, 229, 0.9)",
            }}
          >
            <Menu.Item onClick={this.handleToggle}>
              <Icon name="sidebar" style={{ marginBottom: "10px" }} />
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown
                direction="left"
                trigger={trigger}
                style={{
                  marginRight: "10px",
                  color: "rgba(240, 240, 240, 1.0)",
                }}
              >
                <Dropdown.Menu>
                  <Dropdown.Header
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Image centered src="/LogoS2.png" size="tiny" />
                  </Dropdown.Header>
                  <Dropdown.Header
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Signed in as: <br />
                    <a style={{ color: "rgba(28, 173, 229, 1.0)" }}>
                      {session.user.email}
                    </a>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Header>Settings and Options</Dropdown.Header>
                  <Dropdown.Item>
                    <Icon name="cogs" />
                    User Preferences
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name="book" />
                    Documentation
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name="help" />
                    Support
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name="bullhorn" />
                    Give us feedback
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.logoutHandler}>
                    <Icon name="log out" />
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
          <br />
          <br />
          {children}
        </Sidebar.Pusher>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

//const ResponsiveContainer = ({ children }) => (
class ResponsiveContainer extends Component {
  state = {};

  render() {
    const {
      children,
      session,
      currentItem,
      profileType,
      isLoading,
    } = this.props;
    /* Heads up!
   * For large applications it may not be best option to
   put all page into these containers at
   * they will be rendered twice for SSR.
   */
    return (
      <MediaContextProvider>
        <DesktopContainer
          session={session}
          currentItem={currentItem}
          profileType={profileType}
          isLoading={isLoading}
        >
          {children}
        </DesktopContainer>
        <MobileContainer
          session={session}
          currentItem={currentItem}
          profileType={profileType}
          isLoading={isLoading}
        >
          {children}
        </MobileContainer>
      </MediaContextProvider>
    );
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
