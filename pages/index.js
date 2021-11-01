import React, { Component } from "react";
import {
  Card,
  Button,
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Transition,
  Visibility,
  Image,
  Reveal,
  Icon,
} from "semantic-ui-react";
import Layout from "../components/LayoutIndex";
import { Link } from "../routes";
import Newsletter from "./newsletter";
import Services from "./sections/services";
import Intro from "./sections/intro";
import Edge from "./sections/feature";
import Video from "./sections/videoOne";
import Faq from "./sections/faq";
import Contact from "./sections/contact";
import Juryconsult from "./sections/juryconsult";
import ScrollAppear from "../components/ScrollLayout";
import PreServiceScroll from "./preCampServices";
import ServiceScroll from "./campServices";
import PostServiceScroll from "./postCampServices";
import { useSession, getSession } from "next-auth/client";

export async function getServerSideProps(context) {
  //getSession automatically looks into request
  const session = await getSession({ req: context.req });
  console.log(session);

  //const router = useRouter();

  return {
    props: { session },
  };
}

class MainIndex extends Component {
  //Next.js adds requirements for data loading.

  //Cant be done in componentDidMount
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  //"primary" as written below is the same as primary={true}

  render() {
    const { fixed } = this.state;
    const { session } = this.props;
    return (
      <Layout session={session}>
        <Intro />
        <Services />
        <Edge />
        <Juryconsult />
        <Video />
        <Contact />
      </Layout>
    );
  }
}

export default MainIndex;

//Always necessary...
