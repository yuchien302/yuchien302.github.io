var React = require('react');

// Twitter Bootstrap
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

// My Components
var ProjectBaseSystem = require('./ProjectBaseSystem.jsx');
var ProjectUSBSystem = require('./ProjectUSBSystem.jsx');
var ProjectWonderLens = require('./ProjectWonderLens.jsx');
var ProjectSeeSS = require('./ProjectSeeSS.jsx');
var Project = require('./Project.jsx');


var Projects = React.createClass({

  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={6}><ProjectBaseSystem /><br/><br/></Col>
            <Col xs={12} md={6}><ProjectUSBSystem /><br/><br/></Col>
          </Row>
          <Row>
            <Col xs={12} md={4}><ProjectWonderLens /><br/><br/></Col>
            <Col xs={12} md={4}><ProjectSeeSS /><br/><br/></Col>
            <Col xs={12} md={4}><Project /><br/><br/></Col>
          </Row>              
        </Grid>  
      </div>
    );
  }
});

module.exports = Projects;