import React, { Component } from 'react';
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
} from 'semantic-ui-react';
import { Link } from '../routes';

import PropTypes from 'prop-types';

class ScrollAppear extends Component {
  //Next.js adds requirements for data loading.

  //Cant be done in componentDidMount
  state = { fixed: false };
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Visibility
        once={true}
        onBottomVisible={this.showFixedMenu}
        offset={[200, 400]}
      >
        <Transition animation="scale" visible={fixed} duration={500}>
          {children}
        </Transition>
      </Visibility>
    );
  }
}

ScrollAppear.propTypes = {
  children: PropTypes.node,
};

const ResponsiveScroll = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to
   put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <ScrollAppear>{children}</ScrollAppear>
);

ResponsiveScroll.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveScroll;
