import React from 'react';
import DashBar from './DashBar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it
// is best to import this here

const LayoutIndex = (props) => {
  return (
    <Container fluid={true}>
      <DashBar>{props.children}</DashBar>
    </Container>
  );
};

export default LayoutIndex;
