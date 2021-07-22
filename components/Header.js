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

/*export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};*/

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

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <link rel="shortcut icon" href="/favicon.ico" />

          <Segment
            color="green"
            inverted
            textAlign="center"
            style={{
              minHeight: 10,
              padding: '.2em 0em',
              backgroundImage: 'url(/HeaderPic.webp)',
              /* Create the parallax scrolling effect */
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no - repeat',
              backgroundSize: 'cover',
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              borderless
            >
              <Container>
                <Link route="/">
                  <a>
                    <Image src="/logo.png" size="small" centered />
                  </a>
                </Link>
                <Menu.Item>
                  <Link route="/">
                    <a>Home</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link route="/openCampaigns">
                    <a>Open Campaigns</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link route="/campaigns/new">
                    <a>New Campaign</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link route="/aboutUs">
                    <a>About Us</a>
                  </Link>
                </Menu.Item>
                <Menu.Item position="right">
                  <Link route="/login">
                    <a>
                      <Button inverted={!fixed}>Log in</Button>
                    </a>
                  </Link>
                  <Link route="/register">
                    <a>
                      <Button
                        inverted={!fixed}
                        primary={fixed}
                        style={{ marginLeft: '0.5em' }}
                      >
                        Sign Up
                      </Button>
                    </a>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

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

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item>
              <Link route="/">
                <a>Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/OpenCampaigns">
                <a>Open Campaigns</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/campaigns/new">
                <a>New Campaign</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/aboutUs">
                <a>About Us</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/login">
                <a>Log in</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/register">
                <a>Sign Up</a>
              </Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: '.2em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Link route="/login">
                      <a>
                        <Button inverted>Log in</Button>
                      </a>
                    </Link>
                    <Link route="/register">
                      <a>
                        <Button inverted style={{ marginLeft: '0.5em' }}>
                          Sign Up
                        </Button>
                      </a>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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
