var React = require('react');
var ReactDOM = require('react-dom');
var Colors = require('material-ui/lib/styles/colors');

// Twitter Bootstrap
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

// Masonry
var Masonry = require('react-masonry-component')(React);
var masonryOptions = {
    transitionDuration: 0
};

// My Components
var Project = require('./Project.jsx');

var bulk = require('bulk-require');
// var descriptions = bulk(__dirname+'/descriptions', [ '*.md' ]);
var descriptions = bulk('contents', [ '*.md' ]);

var data = require('../../contents/data.json');

var Projects = React.createClass({

  render: function() {
    var projects = JSON.parse(data).projects
    
    projects.forEach(function(p){ 
      p.markdown = descriptions[p.markdown]
    })

    var ps = projects.filter(function(p){
      return !p.is_feature
    }).map(function(p, i){
      return ( <Col xs={12} sm={6} md={4} key={i}><Project project={p}/></Col> )
    })

    var ps_feature = projects.filter(function(p){
      return p.is_feature
    }).map(function(p, i){
      return ( <Col xs={12} sm={6} md={4} key={i}><Project project={p}/></Col> )
    })

    return (
      <div style={{margin: "0 4px", paddingTop: "28px"}}>
        <Grid>
          <Row><Col md={12} ><h3 style={{color: Colors.grey600}}>Featured Projects</h3></Col></Row>
          <Row>
            <Masonry>
              {ps_feature}
            </Masonry>
          </Row>
        </Grid>      
        <Grid>
          <Row><Col md={12} ><h3 style={{color: Colors.grey600}}>Archived Projects</h3></Col></Row>
          <Row>
            <Masonry>
              {ps}
            </Masonry>
          </Row>
        </Grid>
      </div>
    );
  }
});
 
module.exports = Projects;