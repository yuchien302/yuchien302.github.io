var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Material-UI
var Tab = require('material-ui/lib/tabs/tab');
var Tabs = require('material-ui/lib/tabs/tabs');
var SwipeableViews = require('react-swipeable-views');
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
    return {slideIndex: 0, show: false};
  },
  onChangeTabs: function(value) {
    this.setState({
      slideIndex: parseInt(value, 10),
    });
  },
  onChangeIndex: function(index) {
    this.setState({
      slideIndex: index,
    });
  }, 
  render: function() {
    var style = {
      minHeight: "1000px"
    };

    return (

      <div>
        <Header/>

        <Tabs onChange={this.onChangeTabs} value={this.state.slideIndex + ''}>
          <Tab label="Projects" value="0" />
          <Tab label="About Me" value="1" />
          <Tab label="Hire Me" value="2" />
        </Tabs>

        <br/>

        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.onChangeIndex} resistance={true}>
          <Projects style={style} />
          <AboutMe style={style} />
          <HireMe style={style} />
        </SwipeableViews>

        <footer>
          <span>develop with love</span>
        </footer>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);