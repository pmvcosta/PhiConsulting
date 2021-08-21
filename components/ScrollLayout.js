import React from 'react';
import ScrollAppear from './ScrollingAppear';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //Since Layout is always loaded it
// is best to import this here

export default (props) => {
  return <ScrollAppear>{props.children}</ScrollAppear>;
};
