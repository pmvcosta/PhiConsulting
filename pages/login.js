import React, { Component } from 'react';
import {
  Form,
  Button,
  Input,
  Message,
  Grid,
  Divider,
  Segment,
  Header,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link, Router } from '../routes';
import { signIn, useSession, getSession } from 'next-auth/client';

export async function getServerSideProps(context) {
  //getSession automatically looks into request
  const session = await getSession({ req: context.req });
  //const router = useRouter();

  if (session) {
    //Router.pushRoute('/');
    //router.replace('/');
    //return;

    //The followign resets the state of the app?
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

class CampaignNew extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault(); //keeps browser from submitting form to backed server

    this.setState({
      loading: true,
      errorMessage: '',
    });

    /*try {
      const result = await signIn('credentials', {
        redirect: false,
        email: this.state.email,
        password: this.state.password,
      });
      console.log(result);

      //Router.pushRoute('/dashboard');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }*/

    const result = await signIn('credentials', {
      redirect: false,
      email: this.state.email,
      password: this.state.password,
    });
    console.log(result);

    if (!result.error) {
      Router.pushRoute('/dashboard');
    } else {
      this.setState({ errorMessage: result.error });
    }

    //set some auth State
    //Upon a succesful login, NextJS generates cookies to make it easier
    // to manage an active session

    this.setState({ loading: false });
  };

  render() {
    //Need to redirect away if it is already auth'ed
    const { session } = this.props;
    return (
      <Layout session={session}>
        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '8em 0em' }}
        >
          <Grid.Row>
            <Grid.Column width={8} textAlign="center">
              <Segment color="red" padded raised fluid>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Log In
                </Header>
                <Form
                  onSubmit={this.onSubmit}
                  error={!!this.state.errorMessage}
                >
                  <Form.Field>
                    <Input
                      style={{ marginBottom: '10px', width: '400px' }}
                      className="form-control mb-4 p-4"
                      required
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                    <Input
                      style={{ marginBottom: '10px', width: '400px' }}
                      required
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />
                    <br />
                    <Message
                      error
                      header="Oops"
                      content={this.state.errorMessage}
                    />
                    <Button
                      loading={this.state.loading}
                      style={{ marginTop: '10px' }}
                      primary
                    >
                      Log In
                    </Button>
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column floated="right" width={7}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Connecting the Future of Funding
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We can assist your company in securing funding, by connecting
                you directly to alternative finance platforms. If you're a
                platform we can help you increase the influx of new businesses!
              </p>
              <Link route="/register">
                <a>
                  <Button style={{ marginTop: '10px' }} primary>
                    Let's Go!
                  </Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignNew;
