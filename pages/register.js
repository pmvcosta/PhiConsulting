import React, { Component } from 'react';
import {
  Form,
  Button,
  Input,
  Message,
  Grid,
  Radio,
  Popup,
  Divider,
  Segment,
  Header,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link, Router } from '../routes';
import { useSession, getSession, signIn } from 'next-auth/client';

export async function getServerSideProps(context) {
  //getSession automatically looks into request
  const session = await getSession({ req: context.req });

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
    name: '',
    password: '',
    platformOrClient: '',
    platformSite: '',
    businessSite: '',
    confirmPassword: '',
    errorMessage: '',
    loading: false,
  };

  //If a session already exists, there is no need to register
  /*static async getServerSideProps(context) {
    //getSession automatically looks into request
    const session = await getSession({ req: context.req });

    //If a session already exists there is no need to log in
    if (session) {
      //Router.pushRoute('/');
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
  }*/

  createUser = async (email, password) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }

    return data;
  };

  onSubmit = async (event) => {
    event.preventDefault(); //keeps browser from submitting form to backed server

    this.setState({
      loading: true,
      errorMessage: '',
    });

    try {
      //Router.pushRoute('/subscribe');
      if (this.state.password === this.state.confirmPassword) {
        const result = await this.createUser(
          this.state.email,
          this.state.password
        );
        const signResult = await signIn('credentials', {
          redirect: false,
          email: this.state.email,
          password: this.state.password,
        });
        console.log(result);
        console.log(signResult);
        Router.pushRoute('/dashboard');
      } else {
        this.setState({
          errorMessage: 'The password does not match its confirmation!',
        });
      }
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  handleTextChange = (e, { name, value }) => this.setState({ [name]: value });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const {
      value,
      businessSite,
      platformSite,
      fundType,
      email,
      password,
      confirmPassword,
      errorMessage,
      loading,
    } = this.state;
    return (
      <Layout>
        <Grid
          centered
          columns={2}
          textAlign="center"
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '4em 0em' }}
        >
          <Grid.Row>
            <Grid.Column>
              <Segment color="red" padded raised fluid>
                <Header
                  as="h3"
                  centered
                  style={{ textAlign: 'center', fontSize: '2em' }}
                >
                  Sign Up
                </Header>
                <Form onSubmit={this.onSubmit} error={!!errorMessage}>
                  <Form.Field>
                    <Form.Field
                      control={Input}
                      style={{ marginBottom: '10px' }}
                      className="form-control mb-4 p-4"
                      required
                      label="Email Address:"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />

                    <Form.Field required>
                      <label required>
                        <b> I am a:</b>
                      </label>
                      <Form.Group>
                        <Popup
                          trigger={
                            <Form.Field
                              control={Radio}
                              label="Borrower"
                              value="Borrower"
                              checked={value === 'Borrower'}
                              onChange={this.handleChange}
                            />
                          }
                          content="I want to acquire funds via alternative finance platforms."
                          position="top left"
                        />
                        <Popup
                          trigger={
                            <Form.Field
                              control={Radio}
                              label="Funding Platform"
                              value="Funding Platform"
                              checked={value === 'Funding Platform'}
                              onChange={this.handleChange}
                            />
                          }
                          content="I provide alternative means for businesses to obtain funding."
                          position="top left"
                        />
                      </Form.Group>
                    </Form.Field>
                    {value == 'Borrower' && (
                      <Form.Field
                        control={Input}
                        name="businessSite"
                        type="text"
                        value={businessSite}
                        onChange={this.handleTextChange}
                        label="Business Website:"
                        placeholder="e.g.: www.myBusinessSite.com"
                        style={{ width: '295px' }}
                      />
                    )}
                    {value == 'Funding Platform' && (
                      <Form.Field
                        control={Input}
                        name="platformSite"
                        type="text"
                        value={platformSite}
                        onChange={this.handleTextChange}
                        label="Platform Website:"
                        placeholder="e.g.: www.PlatformSite.com"
                        style={{ width: '295px' }}
                      />
                    )}
                    {value == 'Funding Platform' && (
                      <Form.Field
                        control={Input}
                        name="fundType"
                        type="text"
                        value={fundType}
                        onChange={this.handleTextChange}
                        label="What kind of funding methods do you provide?"
                        placeholder="e.g.: Equity Crowdfunding, P2P Loans, etc"
                        style={{ width: '295px' }}
                      />
                    )}
                    <Form.Field
                      control={Input}
                      style={{ marginBottom: '10px' }}
                      className="form-control mb-4 p-4"
                      required
                      label="Password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />

                    <Form.Field
                      control={Input}
                      style={{ marginBottom: '10px' }}
                      className="form-control mb-4 p-4"
                      required
                      label="Confirm Password:"
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(event) =>
                        this.setState({ confirmPassword: event.target.value })
                      }
                    />

                    <Message error header="Oops" content={errorMessage} />
                    <Button
                      loading={loading}
                      style={{ marginTop: '10px' }}
                      primary
                    >
                      Sign Up
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
