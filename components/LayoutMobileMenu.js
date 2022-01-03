import React, { Component, useEffect, useState } from 'react';
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

class LayoutMenu extends Component {
  state = {
    isInverted: false,
    isInvertedL: false,
    isInvertedOut: false,
  };
  render() {
    //const { children, session, loading } = this.props;
    const { isTop, fixed, logoutHandler, session } = this.props;
    const { isInverted, isInvertedL, isInvertedOut } = this.state;

    return (
      <Transition visible={fixed} animation="fade" duration={500}>
        <Menu
          borderless
          fixed={'top'}
          inverted={isTop}
          pointing
          size="large"
          style={{
            height: '60px',
            shadowColor: 'rgba(0, 0, 0, 0.9)',
            shadowRadius: '20',
            border: '0px',
            outline: '0px',
            backgroundColor: isTop
              ? 'rgba(0, 0, 0, 0.0)'
              : 'rgba(28, 173, 229, 1.0)',
          }}
        >
          <Container fluid>
            <Menu.Item onClick={this.props.handleToggle}>
              <Icon
                name="sidebar"
                style={{
                  marginLeft: '-10px',
                  color: isTop
                    ? 'rgba(28, 173, 229, 0.9)'
                    : 'rgba(0, 0, 0, 1.0)',
                }}
              />
              <Image
                src={isTop ? '/LogoS2.png' : '/LogoS21.png'}
                centered
                style={{
                  marginTop: '-5%',
                  height: '45px',
                  width: 'auto',
                }}
              />
            </Menu.Item>

            {!session && (
              <Menu.Item position="right">
                <Link route="/login">
                  <a>
                    <Button
                      secondary={fixed}
                      style={{
                        color: !isTop ? 'rgba(28, 173, 229, 0.9)' : '',
                        backgroundColor: isTop
                          ? 'rgba(28, 173, 229, 0.9)'
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
                        color: !isTop ? 'rgba(28, 173, 229, 0.9)' : '',
                        backgroundColor: isTop
                          ? 'rgba(28, 173, 229, 0.9)'
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
                    onClick={logoutHandler}
                    onMouseEnter={() => this.setState({ isInvertedOut: true })}
                    onMouseLeave={() => this.setState({ isInvertedOut: false })}
                    secondary={!isTop}
                    basic={isInvertedOut}
                    color={isInvertedOut ? 'red' : ''}
                    style={{
                      color: !isTop ? 'rgba(28, 173, 229, 0.9)' : '',
                      backgroundColor: !isTop
                        ? 'rgba(28, 173, 229, 0.9)'
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
      </Transition>
    );
  }
}

export default LayoutMenu;
