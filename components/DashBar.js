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
  List,
  Image,
  Dropdown,
} from "semantic-ui-react";
import { Link } from "../routes";
import PropTypes from "prop-types";
import HomePageHeading from "./HomePageHeading";

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
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    const trigger = (
      <span>
        <Icon name="user" /> Hello, Bob
      </span>
    );

    const options = [
      {
        key: "user",
        text: (
          <span>
            Signed in as <strong>Bob Smith</strong>
          </span>
        ),
        disabled: true,
      },
      { key: "profile", text: "Your Profile", href: "/subscribe" },
      { key: "stars", text: "Your Stars" },
      { key: "explore", text: "Explore" },
      { key: "integrations", text: "Integrations" },
      { key: "help", text: "Help" },
      { key: "settings", text: "Settings" },
      { key: "sign-out", text: "Sign Out" },
    ];

    return (
      <Media as={Sidebar.Pushable} greaterThan="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            style={{
              border: "0px",
              outline: "0px",
              backgroundColor: "rgba(182, 12, 12, 0.9)",
            }}
          >
            <Menu.Item centered>
              <Link route="/">
                <a>
                  <Image src="/LogoS2.png" size="tiny" centered />
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/">
                <a>
                  <Icon name="home" style={{ marginRight: "10px" }} />
                  Home
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/OpenCampaigns">
                <a>
                  <Icon name="trophy" style={{ marginRight: "10px" }} />
                  Ongoing Events
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/OpenCampaigns">
                <a>
                  <Icon
                    name="calendar alternate"
                    style={{ marginRight: "10px" }}
                  />
                  Calendar
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/OpenCampaigns">
                <a>
                  <Icon name="envelope" style={{ marginRight: "10px" }} />
                  Inbox
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/dashboard">
                <a>
                  <Icon name="compass" style={{ marginRight: "10px" }} />
                  Open Events
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/aboutUs">
                <a>
                  <Icon name="archive" style={{ marginRight: "10px" }} />
                  Past Events
                </a>
              </Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Menu
              inverted
              pointing
              secondary
              size="large"
              style={{
                border: "0px",
                outline: "0px",

                backgroundColor: "rgba(212, 32, 32, 0.9)",
              }}
            >
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" style={{ marginBottom: "10px" }} />
              </Menu.Item>
              <Menu.Item position="right">
                <Dropdown trigger={trigger} options={options} />
                <Link route="/register">
                  <a>
                    <Button inverted style={{ marginLeft: "1.8em" }}>
                      Sign Up
                    </Button>
                  </a>
                </Link>
              </Menu.Item>
            </Menu>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const trigger = (
      <span>
        <Icon name="user" /> Hello, Bob
      </span>
    );

    const options = [
      {
        key: "user",
        text: (
          <span>
            Signed in as <strong>Bob Smith</strong>
          </span>
        ),
        disabled: true,
      },
      { key: "profile", text: "Your Profile" },
      { key: "stars", text: "Your Stars" },
      { key: "explore", text: "Explore" },
      { key: "integrations", text: "Integrations" },
      { key: "help", text: "Help" },
      { key: "settings", text: "Settings" },
      { key: "sign-out", text: "Sign Out" },
    ];

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
            backgroundColor: "rgba(182, 12, 12, 1.0)",
          }}
        >
          <Menu.Item centered>
            <Link route="/">
              <a>
                <Image src="/logoGrayOutline.png" size="tiny" centered />
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/">
              <a>
                <Icon name="home" style={{ marginRight: "10px" }} />
                Home
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/OpenCampaigns">
              <a>
                <Icon name="trophy" style={{ marginRight: "10px" }} />
                Ongoing Events
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/OpenCampaigns">
              <a>
                <Icon
                  name="calendar alternate"
                  style={{ marginRight: "10px" }}
                />
                Calendar
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/OpenCampaigns">
              <a>
                <Icon name="envelope" style={{ marginRight: "10px" }} />
                Inbox
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/dashboard">
              <a>
                <Icon name="compass" style={{ marginRight: "10px" }} />
                Open Events
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/aboutUs">
              <a>
                <Icon name="archive" style={{ marginRight: "10px" }} />
                Past Events
              </a>
            </Link>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Menu
            inverted
            pointing
            secondary
            size="large"
            style={{
              border: "0px",
              outline: "0px",
              backgroundColor: "rgba(212, 32, 32, 0.9)",
            }}
          >
            <Menu.Item onClick={this.handleToggle}>
              <Icon name="sidebar" style={{ marginBottom: "10px" }} />
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown trigger={trigger} options={options} />
              <Link route="/register">
                <a>
                  <Button inverted style={{ marginLeft: "1.8em" }}>
                    Sign Up
                  </Button>
                </a>
              </Link>
            </Menu.Item>
          </Menu>

          {children}
        </Sidebar.Pusher>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to
   put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
