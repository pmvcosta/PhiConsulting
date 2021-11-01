import React, { Component } from 'react';
import {
  Form,
  Button,
  Input,
  Message,
  Grid,
  Transition,
  Segment,
  Divider,
  Header,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import Newsletter from './newsletter';
import { Link, Router } from '../routes'; //Not going to use Link, but it exists
import { PopupButton } from '@typeform/embed-react';
import ScrollAppear from '../components/ScrollLayout';
import ServiceScroll from './preCampServices';
import { useSession, getSession } from 'next-auth/client';

export async function getServerSideProps(context) {
  //getSession automatically looks into request
  const session = await getSession({ req: context.req });
  console.log(session);

  //const router = useRouter();

  return {
    props: { session },
  };
}

class Subscribe extends Component {
  state = {
    email: '',
    errorMessage: '',
    successMessage: '',
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault(); //keeps browser from submitting form to backed server

    this.setState({
      loading: true,
      errorMessage: '',
      successMessage: '',
    });

    try {
      // 3. Send a request to our API with the user's email address.
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: this.state.email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      this.setState({
        errorMessage: '',
        successMessage: 'Success! 🎉 You are now subscribed to the newsletter.',
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({
      loading: false,
    });
  };

  render() {
    const { session } = this.props;
    return (
      <Layout session={session}>
        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '6em 0em' }}
        >
          <Grid.Row centered>
            <Transition
              animation="scale"
              transitionOnMount={true}
              duration={500}
            >
              <Header
                as="h3"
                style={{ fontSize: '4em', color: ' rgba(28, 173, 229, 1.0)' }}
              >
                Oops! <br />
                We are not quite ready yet!
              </Header>
            </Transition>
            <br />
            <br />
          </Grid.Row>
        </Grid>

        <Segment
          fluid
          style={{ padding: '8em 0em' }}
          vertical
          style={{
            backgroundColor: 'rgba(28, 173, 229, 0.9)',
          }}
        >
          <Grid
            container
            stackable
            verticalAlign="middle"
            style={{ padding: '6em 0em' }}
          >
            <Grid.Row>
              <Grid.Column width={8}>
                <Header
                  as="h3"
                  style={{ fontSize: '2em', color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  Stay up to date with the latest developments{' '}
                </Header>
                <Newsletter />
              </Grid.Column>
              <Grid.Column floated="right" width={7}>
                <Header
                  as="h3"
                  style={{ fontSize: '2em', color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  Interested in our initiative?
                </Header>
                <p
                  style={{
                    fontSize: '1.33em',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Become an early adopter to help shape the future and be part
                  of what comes next. Subscribe to the newsletter to stay up to
                  date with our progress!
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '6em 0em' }}
        >
          <Grid.Row centered>
            <br />
            <br />
            <ScrollAppear>
              <Header as="h3" style={{ fontSize: '3em' }}>
                You can also help us <br />
                by taking part in our investor inquiry:
              </Header>
            </ScrollAppear>
            <br />
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign="center">
              <br />
              <PopupButton
                id="CnjqMpxq"
                style={{
                  fontSize: 20,
                  'background-color': ' rgba(28, 173, 229, 1.0)  ',
                  color: 'white',
                  'font-size': '20px',
                  padding: '10px 60px',
                  'border-radius': '10px',
                  margin: '10px 0px',
                  cursor: 'pointer',
                }}
              >
                Open Form
              </PopupButton>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default Subscribe;
