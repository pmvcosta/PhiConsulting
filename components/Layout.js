import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './seo';
import { Container } from 'semantic-ui-react';
import { Provider } from 'next-auth/client';

import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it
// is best to import this here
class Layout extends Component {
  render() {
    const { children, session } = this.props;

    //The Provider session argument provided below is a bit yiffy, verify it!
    return (
      <Provider session={session}>
        <SEO title="Phi Consulting" />
        <Container fluid={true}>
          <Header session={session}>{children}</Header>
          <Footer />
        </Container>
      </Provider>
    );
  }
}
export default Layout;
