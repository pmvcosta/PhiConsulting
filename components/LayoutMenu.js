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
  Divider,
  List,
  Image,
} from "semantic-ui-react";
import { Link } from "../routes";
import { HashLink, NavHashLink } from "react-router-hash-link";

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
          fixed={"top"}
          inverted={isTop}
          pointing
          size="large"
          style={{
            shadowColor: "rgba(0, 0, 0, 0.9)",
            shadowRadius: "20",
            border: "0px",
            outline: "0px",
            backgroundColor: isTop
              ? "rgba(0, 0, 0, 0.0)"
              : "rgba(28, 173, 229, 1.0)",
          }}
        >
          <Container fluid>
            <Menu.Item>
              <Link route="/">
                <a>
                  <Image
                    src={isTop ? "/LogoS2.png" : "/LogoS21.png"}
                    centered
                    style={{
                      marginTop: "-2%",
                      height: "45px",
                      width: "auto",
                    }}
                  />
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/#Intro">
                <a
                  style={{
                    color: isTop
                      ? "rgba(28, 173, 229, 0.9)"
                      : "rgba(74, 74, 74, 0.9)",
                  }}
                >
                  Solutions
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/#ServiceGrid">
                <a
                  style={{
                    color: isTop
                      ? "rgba(28, 173, 229, 0.9)"
                      : "rgba(74, 74, 74, 0.9)",
                  }}
                >
                  Financing
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/#Platforms">
                <a
                  style={{
                    color: isTop
                      ? "rgba(28, 173, 229, 0.9)"
                      : "rgba(74, 74, 74, 0.9)",
                  }}
                >
                  Platforms
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/#Juryconsult">
                <a
                  style={{
                    color: isTop
                      ? "rgba(28, 173, 229, 0.9)"
                      : "rgba(74, 74, 74, 0.9)",
                  }}
                >
                  Legal Consultancy
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link route="/#Contact">
                <a
                  style={{
                    color: isTop
                      ? "rgba(28, 173, 229, 0.9)"
                      : "rgba(74, 74, 74, 0.9)",
                  }}
                >
                  Contact Us
                </a>
              </Link>
            </Menu.Item>
            {session && (
              <Menu.Item>
                <Link route="/dashboard">
                  <a
                    style={{
                      color: isTop
                        ? "rgba(28, 173, 229, 0.9)"
                        : "rgba(74, 74, 74, 0.9)",
                    }}
                  >
                    Dashboard
                  </a>
                </Link>
              </Menu.Item>
            )}
            {!session && (
              <Menu.Item position="right">
                <Link route="/#Contact">
                  <a>
                    <Button
                      onMouseEnter={() => this.setState({ isInvertedL: true })}
                      onMouseLeave={() => this.setState({ isInvertedL: false })}
                      secondary={!isTop}
                      basic={isInvertedL}
                      color={isInvertedL ? "red" : ""}
                      style={{
                        backgroundColor: !isTop
                          ? "rgba(28, 173, 229, 0.9)"
                          : "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      Log in
                    </Button>
                  </a>
                </Link>

                <Link route="/#Contact">
                  <a>
                    <Button
                      onMouseEnter={() => this.setState({ isInverted: true })}
                      onMouseLeave={() => this.setState({ isInverted: false })}
                      secondary={!isTop}
                      basic={isInverted}
                      color={isInverted ? "red" : ""}
                      style={{
                        marginLeft: "5px",
                        backgroundColor: !isTop
                          ? "rgba(28, 173, 229, 0.9)"
                          : "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {" "}
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
                    color={isInvertedOut ? "red" : ""}
                    style={{
                      backgroundColor: !isTop
                        ? "rgba(28, 173, 229, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
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
