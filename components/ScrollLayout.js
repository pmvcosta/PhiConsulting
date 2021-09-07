import React, { Component } from 'react';
import ScrollAppear from './ScrollingAppear';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it

class ScrollLayout extends Component {
  render() {
    const { children } = this.props;
    return <ScrollAppear>{children}</ScrollAppear>;
  }
}
export default ScrollLayout;
