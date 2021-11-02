import React, { Component, useEffect, useState } from 'react';
import { createMedia } from '@artsy/fresnel';
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
  Divider,
  List,
  Image,
} from 'semantic-ui-react';
import { Link } from '../routes';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import LayoutMenu from './LayoutMenu';
import LayoutMobileMenu from './LayoutMobileMenu';
import PropTypes from 'prop-types';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import HomePageHeading from './HomePageHeading';
import { useSession, signOut } from 'next-auth/client'; //To keep track of wether user is logged in
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 767,
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
  state = {
    fixed: false,
  };

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
            /*backgroundImage: 'url(/backgnd.jpg)',*/
            backgroundColor: 'rgba(0,0,0,1.0)',
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
            onTopPassed={this.showFixedMenu}
            onTopPassedReverse={this.hideFixedMenu}
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
  state = {
    fixed: false,
  };

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
                <Image src="/LogoS21.png" size="tiny" centered />
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/#Intro">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/#ServiceGrid">
              <a>Financing</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/#Platforms">
              <a>Platforms</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/#Juryconsult">
              <a>Legal Consultancy</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/#Contact">
              <a>Contact Us</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/#Contact">
              <a>Log in</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link route="/#Contact">
              <a>Sign Up</a>
            </Link>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher
          fluid
          dimmed={sidebarOpened}
          style={{
            height: '60px',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 1.0)',
            /*backgroundImage: 'url(/backgnd.jpg)',*/
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
            <LayoutMobileMenu
              isTop={true}
              fixed={!fixed}
              logoutHandler={this.logoutHandler}
              session={session}
              handleToggle={this.handleToggle}
            />

            <LayoutMobileMenu
              isTop={false}
              fixed={fixed}
              logoutHandler={this.logoutHandler}
              session={session}
              handleToggle={this.handleToggle}
            />
          </Visibility>
        </Sidebar.Pusher>
        <HomePageHeading mobile />

        {children}
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
