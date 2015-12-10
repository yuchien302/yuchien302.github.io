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
    return {slideIndex: 0, sticky: false, prevScrollTop: 0};
  },
  shouldComponentUpdate: function(nextProps, nextState){
    return (this.state.slideIndex !== nextState.slideIndex) || (this.state.sticky !== nextState.sticky)
  },
  onChangeTabs: function(value) {
    var index = parseInt(value, 10)
    var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 10
    this.setState({
      slideIndex: parseInt(value, 10), sticky: sticky
    });
  },
  onChangeIndex: function(index) {
    var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 10
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
    var scrollTop = e.target.scrollTop;

    if( scrollTop > 10 && (scrollTop - this.state.prevScrollTop) > 0 && !this.state.sticky){
      this.setState({
        sticky: true, prevScrollTop: scrollTop
      });
    } else if( scrollTop <= 100 && (scrollTop - this.state.prevScrollTop) < 0 && this.state.sticky){
      this.setState({
        sticky: false, prevScrollTop: scrollTop
      });
    } else{
      this.setState({
        prevScrollTop: scrollTop
      });
    }
  },
  render: function() {
    style = {position: "fixed", width: "100%", zIndex: 10, transition: "0.3s"}
    
    if(this.state.sticky){
      style.boxShadow = "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
      style.top = "-100px"
    } else {
      style.boxShadow = "none"
      style.top = "-10px"
    }
    return (

      <div style={{height: "100%"}}>
        <div style={style}>
          <div style={{height: "100px", backgroundImage: "url('/src/images/bg2.jpg')", backgroundAttachment:"fixed", backgroundSize: "cover",
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