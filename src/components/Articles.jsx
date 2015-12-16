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

var Articles = React.createClass({
    
  render: function() {

    return (

      <div style={{margin: "0 4px", paddingTop: "28px"}}>
        <Grid>
          <Row>
            <Masonry>
              <Col xs={12} sm={6} md={4}>
                <a className="m-profile" data-collapsed="false" data-width="100%" href="https://medium.com/@yuchien">Yu-Chien Chan</a><br/>
              </Col> 

              <Col xs={12} sm={6} md={4}>
                <a className="m-story" data-collapsed="true" href="https://medium.com/shopify-ux/so-you-want-to-be-a-front-end-devleoper-f8be110f1d5f">Using React is a Business Decision, Not a Technology Choice</a><br/>
              </Col> 
            </Masonry>
          </Row>
        </Grid>
        
      </div>
    );
  }
});

module.exports = Articles;