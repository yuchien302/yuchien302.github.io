var React = require('react');

// Twitter Bootstrap
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

// My Components
var ProjectBaseSystem = require('./ProjectBaseSystem.jsx');
var Project = require('./Project.jsx');


var Projects = React.createClass({
  render: function() {
    return (
      <div style={this.props.style}>
        <Grid>
          <Row>
            <Col xs={12} md={4}><ProjectBaseSystem /><br/></Col>
            <Col xs={12} md={4}><Project /><br/></Col>
            <Col xs={12} md={4}><Project /><br/></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}><Project /><br/></Col>
            <Col xs={12} md={6}><Project /><br/></Col>
          </Row>              
        </Grid>  
      </div>
    );
  }
});

module.exports = Projects;