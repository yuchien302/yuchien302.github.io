var React = require('react');
var ReactDOM = require('react-dom');

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
    var tags = JSON.parse(data).tags
    
    projects.forEach(function(p){ 
      p.tags = p.tags.map(function(t){ return tags[t] })
      p.markdown = descriptions[p.markdown]
    })

    var ps = projects.map(function(p, i){
      return ( <Col xs={12} sm={6} md={4} key={i}><Project project={p}/></Col> )
    })

    return (
      <div style={{margin: "0 4px"}}>
        <Grid>
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