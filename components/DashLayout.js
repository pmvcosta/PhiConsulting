import React, { Component } from 'react';
import DashBar from './DashBar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import { Router } from '../routes';
import SEO from './seo';
import { Provider } from 'next-auth/client';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it
// is best to import this here

class DashLayout extends Component {
  render() {
    const {
      children,
      session,
      currentItem,
      profileType,
      isLoading,
    } = this.props;
    return (
      <Provider session={session}>
        <SEO title="Phi Consulting" />
        <Container fluid={true}>
          <DashBar
            session={session}
            currentItem={currentItem}
            profileType={profileType}
            isLoading={isLoading}
          >
            {children}
          </DashBar>
        </Container>
      </Provider>
    );
  }
}
export default DashLayout;
