import React, { Component } from 'react';
import {
  Form,
  Button,
  Input,
  Message,
  Grid,
  Divider,
  Header,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import Newsletter from './newsletter';
import { Link, Router } from '../routes'; //Not going to use Link, but it exists
import { PopupButton } from '@typeform/embed-react';

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
    return (
      <Layout>
        <Grid
          container
          stackable
          verticalAlign="middle"
          style={{ padding: '6em 0em' }}
        >
          <Grid.Row centered>
            <Header
              as="h3"
              style={{ fontSize: '3em', color: ' rgba(100, 195, 74, 0.9)' }}
            >
              Oops! <br />
              We are not quite ready yet!
            </Header>
            <br />
            <br />
          </Grid.Row>
          <Grid.Row> </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Stay up to date with the latest developments{' '}
              </Header>
              <Newsletter />
            </Grid.Column>
            <Grid.Column floated="right" width={7}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Interested in our initiative?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Become an early adopter to help shape the future and be part of
                what comes next. Subscribe to the newsletter to stay up to date
                with our progress!
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <br />
            <br />
            <Header as="h3" style={{ fontSize: '3em' }}>
              You can also help us <br />
              by taking part in our investor inquiry:
            </Header>
            <br />
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign="center">
              <br />
              <PopupButton
                id="CnjqMpxq"
                style={{
                  fontSize: 20,
                  'background-color': ' rgba(100, 195, 74, 0.9)  ',
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
