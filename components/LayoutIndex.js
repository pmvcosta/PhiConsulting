import React, { Component } from 'react';
import Header from './HeaderIndex';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it

import HomePageHeading from './HomePageHeading';

// is best to import this here^

class LayoutIndex extends Component {
  render() {
    const { children } = this.props;
    return (
      <Container fluid={true}>
        <Header>{children}</Header>
        <Footer />
      </Container>
    );
  }
}

export default LayoutIndex;
