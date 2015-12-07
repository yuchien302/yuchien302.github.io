var React = require('react');
var ReactDOM = require('react-dom');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Material-UI
var Tab = require('material-ui/lib/tabs/tab');
var Tabs = require('material-ui/lib/tabs/tabs');
var SwipeableViews = require('./components/lib/SwipeableViews.js');
var ThemeManager = require('material-ui/lib/styles/theme-manager');

// My Components
var MyTheme = require('./components/MyTheme.jsx');
var Header = require('./components/Header.jsx');

var Projects = require('./components/Projects.jsx');
var AboutMe = require('./components/AboutMe.jsx');
var HireMe = require('./components/HireMe.jsx');

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyTheme)
    };
  },
  getInitialState: function() {
    return {slideIndex: 0, sticky: false};
  },
  onChangeTabs: function(value) {
    var index = parseInt(value, 10)
    var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 62
    this.setState({
      slideIndex: parseInt(value, 10), sticky: sticky
    });
  },
  onChangeIndex: function(index) {
    var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 62
    this.setState({
      slideIndex: index, sticky: sticky
    });
  }, 
  componentDidMount: function() {
    document.documentElement.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    document.documentElement.removeEventListener('scroll', this.handleScroll);
  },  
  onScrollSlide: function(e){
    // console.log(e.target.scrollTop)
    if(e.target.scrollTop > 62 && !this.state.sticky){
      this.setState({
        sticky: true
      });
    } else if(e.target.scrollTop <= 62 && this.state.sticky){
      this.setState({
        sticky: false
      });
    }
    
  },
  render: function() {
    if(this.state.sticky){
      var offsetTop = "-100px"
    } else {
      var offsetTop = 0
    }
    return (

      <div style={{height: "100%"}}>
        <div style={{position: "fixed", width: "100%", zIndex: 10, top:offsetTop, transition: "0.3s"}}>
          <div style={{height: "100px", backgroundImage: "url('/dist/images/bg.png')", backgroundAttachment:"fixed",
            paddingTop: "36px", paddingLeft: "50px" }}>
            <h2 style={{color: "white", margin: 0, padding: 0}}>Yu-Chien Chan</h2>
          </div>
          <Tabs onChange={this.onChangeTabs} value={this.state.slideIndex + ''}>
            <Tab label="Projects" value="0" />
            <Tab label="About Me" value="1" />
            <Tab label="Hire Me" value="2" />
          </Tabs>
        </div>

        <SwipeableViews ref="swipeview" onScrollSlide={this.onScrollSlide} index={this.state.slideIndex} onChangeIndex={this.onChangeIndex} resistance={true}>
          <Projects ref="0"/>
          <AboutMe ref="1"/>
          <HireMe ref="2"/>
        </SwipeableViews>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);