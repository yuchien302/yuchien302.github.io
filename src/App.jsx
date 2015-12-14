var React = require('react');
var ReactDOM = require('react-dom');
var Colors = require('material-ui/lib/styles/colors');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Material-UI
var Tab = require('material-ui/lib/tabs/tab');
var Tabs = require('material-ui/lib/tabs/tabs');
var SwipeableViews = require('./components/lib/SwipeableViews.jsx');
var ThemeManager = require('material-ui/lib/styles/theme-manager');

// My Components
var MyTheme = require('./components/MyTheme.jsx');
var Header = require('./components/Header.jsx');

var Projects = require('./components/Projects.jsx');
var AboutMe = require('./components/AboutMe.jsx');
var Articles = require('./components/Articles.jsx');



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
    // var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 10
    this.setState({
      slideIndex: parseInt(value, 10) //, sticky: sticky
    });
  },
  onChangeIndex: function(index) {
    // var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 10
    this.setState({
      slideIndex: index //, sticky: sticky
    });
  }, 
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  handleScroll: function(e){
    if(window.pageYOffset >= 450 && this.state.sticky == false){
      this.setState({
        sticky: true
      });
    } 
    else if (window.pageYOffset < 450 && this.state.sticky == true){
      this.setState({
        sticky: false
      });
    }
  },

  render: function() {
    var styles = {
      swipeable_views: {
        root: {
          overflowX: 'hidden',
        },
        container: {
          display: '-webkit-box; display: flex',
        },
        slide: {
          width: '100%',
          flexShrink: 0,
          
          overflow: 'auto',
          overflowScrolling: 'touch',
          WebkitOverflowScrolling: "touch",
          willChange: 'transform',          
          background: "#EEE"
        }
      },
      header: {
        position: "relative", 
        height: "498px",
        width: "100%", 
        backgroundColor: "white",
        zIndex: 10
      },
      tabs:{
        position: "fixed", 
        top: -56, 
        transition: "all 0.3s, position 1ms",
        width:"100%",
        zIndex: 15,
        boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
      }
    };
    
    if(this.state.sticky){
      styles.tabs.top = 0;
    }

    return (

      <div>
        <div style={styles.header}>
          <Header onChangeTabs={this.onChangeTabs} slideIndex={this.state.slideIndex + ''}/>
        </div>

        <Tabs style={styles.tabs} onChange={this.onChangeTabs} value={this.state.slideIndex + ''}>
          <Tab style={styles.tab[0]} label="ABOUT ME" value="0" />
          <Tab style={styles.tab[1]} label="PROJECTS" value="1" />
          <Tab style={styles.tab[2]} label="ARTICLES" value="2" />
        </Tabs>
        
        <SwipeableViews styles={styles.swipeable_views} ref="swipeview" index={this.state.slideIndex} onChangeIndex={this.onChangeIndex} resistance={true}>
          <AboutMe ref="0"/>
          <Projects ref="1"/>
          <Articles ref="2"/>
        </SwipeableViews>
        
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);