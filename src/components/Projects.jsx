var React = require('react');
var ReactDOM = require('react-dom');

// Twitter Bootstrap
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


var Masonry = require('react-masonry-component')(React);
 
var masonryOptions = {
    transitionDuration: 0
};
// var AutoResponsive = require('autoresponsive-react/dist/index.js')

// My Components
var ProjectBaseSystem = require('./ProjectBaseSystem.jsx');
var ProjectUSBSystem = require('./ProjectUSBSystem.jsx');
var ProjectWonderLens = require('./ProjectWonderLens.jsx');
var ProjectSeeSS = require('./ProjectSeeSS.jsx');
var Project = require('./Project.jsx');

var style = {
  marginBottom: 16
};

var Projects = React.createClass({
  // componentDidMount: function() {
  //   window.addEventListener('resize', () => {
  //     this.setState({
  //       containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth
  //     });
  //   }, false);
  // },
  // getAutoResponsiveProps: function() {
  //   return {
  //     itemMargin: 10,
  //     containerWidth: document.body.clientWidth,
  //     itemClassName: 'item',
  //     gridWidth: 100,
  //     transitionDuration: '.5'
  //   };
  // },
  render: function() {
    return (
      <div style={{margin: "0 4px"}}>
        <Grid>
        <Row>
          <Masonry>

            <Col xs={12} sm={6} md={4}>
              <ProjectBaseSystem style={style}/>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <ProjectUSBSystem style={style} />
            </Col>

            <Col xs={12} sm={6} md={4}>
              <ProjectWonderLens style={style} />
            </Col>

            <Col xs={12} sm={6} md={4}>
              <ProjectSeeSS style={style} /> 
            </Col>

          </Masonry>
        </Row>
        </Grid>
      </div>
    );
  }
});
            // <div className="item" style={style}>123123123</div>
            // <div className="item" style={style}>wfwedwede</div>
            // <div className="item" style={style}>wef</div>
            // <div className="item" style={style}>asdf</div>
          // <ProjectBaseSystem className="item" style={{width: 300}} />
          // <ProjectWonderLens className="item" style={{width: 300}} />
          // <ProjectUSBSystem className="item" style={{width: 300}} />
          // <ProjectSeeSS className="item" style={{width: 300}} /> 
  // <Grid>
  //         <Row>
  //           <Col xs={12} md={4}>
  //             <ProjectBaseSystem /><br/>
  //             <ProjectWonderLens /><br/>
  //           </Col>
  //           <Col xs={12} md={4}>
  //             <ProjectUSBSystem /><br/>
  //             <ProjectSeeSS /><br/>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col xs={12} md={4}><ProjectWonderLens /><br/></Col>
  //           <Col xs={12} md={4}><ProjectSeeSS /><br/></Col>
  //           <Col xs={12} md={4}><Project /><br/></Col>
  //         </Row>              
  //       </Grid>  
module.exports = Projects;