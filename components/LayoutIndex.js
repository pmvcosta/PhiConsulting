import React from 'react';
import Header from './HeaderIndex';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it
// is best to import this here

export default (props) => {
  return (
    <Container fluid={true}>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};
