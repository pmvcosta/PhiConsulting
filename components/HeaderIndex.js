import React, { Component, useEffect, useState } from 'react';
import { createMedia } from '@artsy/fresnel';
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
} from 'semantic-ui-react';
import { Link } from '../routes';
import PropTypes from 'prop-types';
import HomePageHeading from './HomePageHeading';
import { useSession, signOut } from 'next-auth/client'; //To keep track of wether user is logged in
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
const UseSession = ({ children }) => {
  //const session = useSession();
  const [session, loading] = useSession();
  console.log(session);
  return children(session, loading);
};

class DesktopContainer extends Component {
  state = {};

  logoutHandler = () => {
    //This is an async function, but here it doesn't need await since
    // we are using session, which will update the components
    // in an automatic manner, as it changes
    signOut();
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    //const { children, session, loading } = this.props;
    const { children, session } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <link rel="shortcut icon" href="/favicon.ico" />
        <Segment
          inverted
          textAlign="center"
          style={{
            padding: '.2em 0em',
            backgroundImage: 'url(/backgnd.jpg)',
            /* Set a specific height */
            minHeight: '180px',

            /* Create the parallax scrolling effect */
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no - repeat',
            backgroundSize: 'cover',
          }}
          vertical
        >
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Menu
              borderless
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{
                border: '0px',
                outline: '0px',
                backgroundColor: fixed ? 'rgba(255, 255, 255, 0.9)' : '',
              }}
            >
              <Container fluid>
                <Menu.Item>
                  <Link route="/">
                    <a>
                      <Image src="/logo.png" size="tiny" centered />
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link route="/">
                    <a
                      style={{
                        color: fixed
                          ? 'rgba(212, 32, 32, 0.9)'
                          : 'rgba(74, 74, 74, 0.9)',
                      }}
                    >
                      Home
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link route="/openCampaigns">
                    <a
                      style={{
                        color: fixed
                          ? 'rgba(212, 32, 32, 0.9)'
                          : 'rgba(74, 74, 74, 0.9)',
                      }}
                    >
                      Campaigns
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link route="/subscribe">
                    <a
                      style={{
                        color: fixed
                          ? 'rgba(212, 32, 32, 0.9)'
                          : 'rgba(74, 74, 74, 0.9)',
                      }}
                    >
                      Learn More
                    </a>
                  </Link>
                </Menu.Item>
                {session && (
                  <Menu.Item>
                    <Link route="/dashboard">
                      <a
                        style={{
                          color: fixed
                            ? 'rgba(212, 32, 32, 0.9)'
                            : 'rgba(74, 74, 74, 0.9)',
                        }}
                      >
                        Dashboard
                      </a>
                    </Link>
                  </Menu.Item>
                )}
                {!session && (
                  <Menu.Item position="right">
                    <Link route="/login">
                      <a>
                        <Button
                          secondary={fixed}
                          style={{
                            backgroundColor: fixed
                              ? 'rgba(212, 32, 32, 0.9)'
                              : 'rgba(255, 255, 255, 0.9)',
                          }}
                        >
                          Log in
                        </Button>
                      </a>
                    </Link>
                    <Link route="/register">
                      <a>
                        <Button
                          primary={fixed}
                          style={{
                            marginLeft: '0.5em',
                            backgroundColor: fixed
                              ? 'rgba(212, 32, 32, 0.9)'
                              : 'rgba(255, 255, 255, 0.9)',
                          }}
                        >
                          Sign Up
                        </Button>
                      </a>
                    </Link>
                  </Menu.Item>
                )}
                {session && (
                  <Menu.Item position="right">
                    <a>
                      <Button
                        onClick={this.logoutHandler}
                        secondary={fixed}
                        style={{
                          backgroundColor: fixed
                            ? 'rgba(212, 32, 32, 0.9)'
                            : 'rgba(255, 255, 255, 0.9)',
                        }}
                      >
                        Log Out
                      </Button>
                    </a>
                  </Menu.Item>
                )}
              </Container>
            </Menu>
          </Visibility>
          <HomePageHeading />
        </Segment>

        {children}
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

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, session } = this.props;
    const { sidebarOpened, fixed } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar
          as={Menu}
          animation="overlay"
          fixed={fixed ? 'left' : null}
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{
            border: '0px',
            outline: '0px',
            backgroundColor: 'rgba(212, 32, 32, 1.0)',
          }}
        >
          <Menu.Item>
            <Link route="/">
              <a>
                <Image src="/LogoS2.png" size="tiny" centered />
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/getStarted">
              <a>Solutions</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/subscribe">
              <a>Learn More</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/subscribe">
              <a>Log in</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/subscribe">
              <a>Sign Up</a>
            </Link>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '0.2em 0em' }}
            vertical
            style={{
              minHeight: 10,
              padding: '.2em 0em',
              backgroundImage: 'url(/backgnd.jpg)',
              /* Create the parallax scrolling effect */
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no - repeat',
              backgroundSize: 'cover',
            }}
          >
            <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}
            >
              <Menu
                inverted
                fixed={fixed ? 'top' : null}
                pointing
                secondary
                size="large"
                style={{
                  border: '0px',
                  outline: '0px',
                  backgroundColor: fixed ? 'rgba(255, 255, 255, 0.9)' : "",
                }}
              >
                <Container>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon
                      name="sidebar"
                      style={{
                        color: fixed
                          ? "rgba(212, 32, 32, 0.9)"
                          : "rgba(74, 74, 74, 0.9)",
                      }}
                    />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Link route="/subscribe">
                      <a>
                        <Button
                          secondary={fixed}
                          style={{
                            backgroundColor: fixed
                              ? "rgba(212, 32, 32, 0.9)"
                              : "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          Log in
                        </Button>
                      </a>
                    </Link>
                    <Link route="/subscribe">
                      <a>
                        <Button
                          primary={fixed}
                          style={{
                            marginLeft: "0.5em",
                            backgroundColor: fixed
                              ? "rgba(212, 32, 32, 0.9)"
                              : "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          Sign Up
                        </Button>
                      </a>
                    </Link>
                  </Menu.Item>
                </Container>
              </Menu>
            </Visibility>
            <HomePageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

class ResponsiveContainer extends Component {
  /* Heads up!
   * For large applications it may not be best option to
   put all page into these containers at
   * they will be rendered twice for SSR.
   */
  render() {
    const { children, session } = this.props;
    return (
      <MediaContextProvider>
        <DesktopContainer session={session}>{children}</DesktopContainer>
        <MobileContainer session={session}>{children}</MobileContainer>
      </MediaContextProvider>
    );
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
