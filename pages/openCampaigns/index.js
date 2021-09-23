import React, { Component } from 'react';
import {
  Popup,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Segment,
  Select,
  Card,
  TextArea,
  Transition,
  Grid,
  Modal,
  Container,
  Icon,
  Image,
  Header,
  Accordion,
} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import Details from './details';
import KitPopUp from './popUp';
import CampaignList from './campaignList';
//const { countryOptions } = require("./countryList");
import { useSession, getSession } from 'next-auth/client';

export async function getServerSideProps(context) {
  //getSession automatically looks into request
  const session = await getSession({ req: context.req });
  console.log(session);
  let profileType;

  //const router = useRouter();
  if (session) {
    //Verify if this works!
    //const client = await connectToDatabase();
    //const usersCollection = client.db().collection('users');
    const userEmail = session.user.email;
    //const user = await usersCollection.findOne({ email: userEmail });
    profileType = session.user.name;
  }

  return {
    props: { session, profileType },
  };
}

class OpenCampaigns extends Component {
  render() {
    const { session, profileType } = this.props;
    return (
      <Layout session={session}>
        <br />
        <Container>
          <CampaignList profileType={profileType} />
          <br />
        </Container>
      </Layout>
    );
  }
}

export default OpenCampaigns;
