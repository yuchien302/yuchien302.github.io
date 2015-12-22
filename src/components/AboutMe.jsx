var React = require('react');

// Twitter Bootstrap
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

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

  }
}


var AboutMe = React.createClass({

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

              <Col xs={12} sm={9} md={10}>
                <h2 style={{color: "white", padding: 0}}>Yu Chien Chan</h2>
                <h4 style={style.desc}>Master in CS at Cornell University (Expected May 2016)</h4>
                <h4>Full-stack Developer</h4>
              </Col>         


              <div> 
                <p>This mobile-first website is build mainly with reactJS, and is still under development. </p>
                <p>You can see the progress through: </p>

                <a href="https://github.com/yuchien302/yuchien302.github.io">https://github.com/yuchien302/yuchien302.github.io</a>
              </div>
              <a href="/contents/YuChien_Chan.pdf" download>Resume</a>
            </Row>
          </Grid>
        </div>

      </div>
    );
  }
});

module.exports = AboutMe;