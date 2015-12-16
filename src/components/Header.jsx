var React = require('react');
var Vivus = require('vivus');

// Twitter Bootstrap
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var Sticky = require('react-sticky');

var Tab = require('material-ui/lib/tabs/tab');
var Tabs = require('material-ui/lib/tabs/tabs');

var PlaceIcon = require('react-material-icons/icons/maps/place');

var style = {
  header: {
    height: "360px", 
    backgroundImage: "url('/src/images/bg5@1x.jpg')", 
    // backgroundAttachment:"fixed", 
    backgroundSize: "cover",
    backgroundPosition:"center bottom",
    width: "100%"
  },
  subheader: {
    height: "198px", 
    position: "relative",
    marginTop: "-60px",
    // background: "white"
  },  
  avatar: {
    width: 150,
    borderRadius: "100%",
    border: "4px solid white"
  },
  desc: {

  },
  tabs: {
    // width:"100%",
  },
  tab: {
    backgroundColor: "white",
    color: "gray"
  }
}

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div style={style.header}>
        </div>
        <div style={style.subheader}>
          <Grid>
            <Row>

              <Col xs={12} sm={3} md={2} style={{textAlign: "center"}}>
                <img style={style.avatar} src="/src/images/yuchien@2x.jpg"/>
              </Col>

              <Col className="hidden-xs" xs={12} sm={9} md={10}>
                <h2 style={{color: "white", padding: 0}}>Yu Chien Chan</h2>
                <h4 style={style.desc}>Master in CS at Cornell University (Expected May 2016)</h4>
                <h4><PlaceIcon />Full-stack Developer</h4>
              </Col>              
            </Row>

            <Row>
              <Col xs={12} sm={9} smOffset={3} md={10} mdOffset={2}>
                <Tabs onChange={this.props.onChangeTabs} value={this.props.slideIndex + ''}>
                  <Tab style={style.tab} label="Projects" value="0" />
                  <Tab style={style.tab} label="About Me" value="1" />
                  <Tab style={style.tab} label="Hire Me" value="2" />
                </Tabs>
              </Col>
            </Row>


          </Grid>
        </div>
      </div>
    );
  }
});

module.exports = Header;