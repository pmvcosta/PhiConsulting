import React, { Component } from 'react';
import DashBar from './DashBar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it
// is best to import this here

class DashLayout extends Component {
  render() {
    const { children, session, currentItem } = this.props;
    return (
      <Container fluid={true}>
        <DashBar session={session} currentItem={currentItem}>
          {children}
        </DashBar>
      </Container>
    );
  }
}
export default DashLayout;
