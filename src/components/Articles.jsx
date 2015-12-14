var React = require('react');


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
                <a className="m-story" data-collapsed="false" data-width="100%" href="https://medium.com/@yuchien/test-716e20a2930a">Test</a><br/>
              </Col> 

              <Col xs={12} sm={6} md={4}>
                <a className="m-story" data-collapsed="false" data-width="100%" href="https://medium.com/@ReactJS_News/react-vs-angularjs-how-the-two-compare-reactjs-news-reactjs-news-angularjs-news-9122c70d240f">React vs AngularJS — How the two Compare — ReactJS News — ReactJS News — AngularJS News</a><br/>
              </Col> 

              <Col xs={12} sm={6} md={4}>
                <a className="m-story" data-collapsed="false" data-width="100%" href="https://medium.com/keep-learning-keep-growing/the-answer-is-yes-4de724503e6">The Answer is Yes</a><br/>
              </Col> 
            </Masonry>
          </Row>
        </Grid>
        
      </div>
    );
  }
});

module.exports = Articles;