import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row,
  Col,
  Alert,
  Button
} from 'react-bootstrap';
import CommonNavbar from './CommonNavbar.jsx';
import CommonTable from './CommonTable.jsx';

class HelloWorld extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <CommonNavbar />
        <CommonTable />
        <Row className='show-grid'>
          <Col md={12}>
          </Col>
        </Row>
      </Grid>
    );
  }
}

HelloWorld.propTypes = {
};

export default HelloWorld;
