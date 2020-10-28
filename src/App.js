import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Mapas } from './Mapas';
import { Descarga } from './Descarga';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Map, TileLayer } from 'react-leaflet';
import { Side } from './components/Sidebar'
import L from 'leaflet';
import './asssets/Dashboard.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Row>
            <Col style={{width: '350px'}} id="sidebar-wrapper">
              <Side />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/mapas" component={Mapas} />
                  <Route path="/descarga" component={Descarga} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
                </Switch>
              </Layout>
            </Col>
          </Row>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;