import React, { Component } from 'react';
import {
  Grid,Col, Row,
  Thumbnail
} from 'react-bootstrap';
import Header from './components/Header';

import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from './config';
import 'whatwg-fetch';

class App extends Component {

  constructor() {
    super();

    this.state = {
      serverInfo: {},
      clientInfo: {
        version: CLIENT_VERSION,
        react: REACT_VERSION
      }
    }
  }

  componentDidMount() {
    fetch(SERVER_URL + '/application')
      .then(r => r.json())
      .then(json => this.setState({ serverInfo: json }))
      .catch(error => console.error('Error connecting to server: ' + error));

  }

  render() {

    return (
      <div>
        <Header />

        <Grid>
          <div id="content">
            <section className="row colset-2-its">
              <h1 style={{ textAlign: 'center' }}>Sprout.Inc</h1>
              <br />
              <p>
                Welcome to the dashboard
              </p>

              <div className="images-section" role="navigation">
                <Row>
                  <Col xs={6} md={3}>
                    <Thumbnail href="/employee" alt="employee management" src={require("./images/employee.png") }/>
                    <h3 className="text-center">Employee Management</h3>
                  </Col>
                  <Col xs={6} md={3}>
                    <Thumbnail href="#" alt="salary management" src={require("./images/salaries.png")} />
                    <h3 className="text-center">Salary Management</h3>
                  </Col>
                  <Col xs={6} md={3}>
                    <Thumbnail href="#" alt="heirachy" src={require("./images/hierachy.png")} />
                    <h3 className="text-center">Company Heirachy</h3>
                  </Col>
                  <Col xs={6} md={3}>
                    <Thumbnail href="#" alt="report" src={require("./images/report.png")}/>
                    <h3 className="text-center">Report</h3>
                  </Col>
                </Row>
              </div>
            </section>

          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
