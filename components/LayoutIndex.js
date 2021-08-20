import React from 'react';
import Header from './HeaderIndex';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it

import HomePageHeading from './HomePageHeading';
// is best to import this here

const LayoutIndex = (props) => {
  return (
    <Container fluid={true}>
      <Header>{props.children}</Header>
      <Footer />
    </Container>
  );
};

export default LayoutIndex;
