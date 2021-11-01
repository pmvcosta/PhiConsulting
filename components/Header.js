import React, { Component } from 'react';
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
import LayoutMenu from './LayoutMenu';
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
  state = { fixed: false };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  logoutHandler = () => {
    //This is an async function, but here it doesn't need await since
    // we are using session, which will update the components
    // in an automatic manner, as it changes
    signOut();
  };

  render() {
    //session describes the current session, loading indicates whether it is
    // still figuring out the state of the session

    const { children, session } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <link rel="shortcut icon" href="/favicon.ico" />
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 10,
            padding: '.2em 0em',
            backgroundImage: 'url(/backgnd.jpg)',
            /* Set a specific height */
            minHeight: '60px',

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
            <LayoutMenu
              isTop={true}
              fixed={!fixed}
              logoutHandler={this.logoutHandler}
              session={session}
            />

            <LayoutMenu
              isTop={false}
              fixed={fixed}
              logoutHandler={this.logoutHandler}
              session={session}
            />
          </Visibility>
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
            backgroundColor: 'rgba(28, 173, 229, 1.0)',
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
                  backgroundColor: fixed ? 'rgba(255, 255, 255, 0.9)' : '',
                }}
              >
                <Container>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon
                      name="sidebar"
                      style={{
                        color: fixed
                          ? 'rgba(28, 173, 229, 0.9)'
                          : 'rgba(74, 74, 74, 0.9)',
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
                              ? 'rgba(28, 173, 229, 0.9)'
                              : 'rgba(255, 255, 255, 0.9)',
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
                            marginLeft: '0.5em',
                            backgroundColor: fixed
                              ? 'rgba(28, 173, 229, 0.9)'
                              : 'rgba(255, 255, 255, 0.9)',
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
    const { session, children } = this.props;
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
