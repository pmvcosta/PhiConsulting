import React, { Component } from 'react';
import Header from './HeaderIndex';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import { Provider } from 'next-auth/client';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it

import HomePageHeading from './HomePageHeading';

// is best to import this here^

class LayoutIndex extends Component {
  render() {
    const { children, session } = this.props;
    return (
      <Provider session={session}>
        <Container fluid={true}>
          <Header>{children}</Header>
          <Footer />
        </Container>
      </Provider>
    );
  }
}

export default LayoutIndex;
