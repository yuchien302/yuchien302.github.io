var React = require('react');
var ReactDOM = require('react-dom');
var objectAssign = require('object-assign');
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
    // var index = parseInt(value, 10)
    // var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 12
    this.setState({
      slideIndex: parseInt(value, 10) //, sticky: sticky
    });
  },
  onChangeIndex: function(index) {
    // var sticky = ReactDOM.findDOMNode(this.refs["swipeview"]).children[0].children[index].scrollTop > 12
    this.setState({
      slideIndex: index //, sticky: sticky
    });
  }, 
  onScrollSlide: function(e){
    // console.log(e.target.scrollTop)
    if(e.target.scrollTop > 12 && !this.state.sticky){
      this.setState({
        sticky: true
      });
    } else if(e.target.scrollTop <= 12 && this.state.sticky){
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
          height: '100%',
        },
        container: {
          display: '-webkit-box; display: flex',
          height: '100%',
        },
        slide: {
          width: '100vw',
          height: '100%',
          flexShrink: 0,
          
          overflow: 'scroll',
          overflowScrolling: 'touch',
          WebkitOverflowScrolling: "touch",
          willChange: 'transform',          
          backgroundColor: Colors.grey200
        }
      },

      tabs:{
        position: "fixed", 
        top: 0, 
        transition: "all 0.3s, position 1ms",
        width:"100vw",
        zIndex: 15,
      },
      default_tab:{
        color: Colors.grey500,
        backgroundColor: Colors.grey50,
        fontWeight: 400,
      },
      active_tab:{
        color: Colors.deepOrange700,
      }
    };
    
    if(this.state.sticky){
      styles.tabs.top = 0;
      styles.tabs.boxShadow = "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)";
    }


    styles.tab = []
    styles.tab[0] = styles.default_tab;
    styles.tab[1] = styles.default_tab;
    styles.tab[2] = styles.default_tab;
    styles.tab[this.state.slideIndex] = objectAssign({}, styles.tab[this.state.slideIndex], styles.active_tab);

    return (

      <div style={{marginTop: "48px", height: "calc(100% - 48px)"}}>

        <Tabs style={styles.tabs} onChange={this.onChangeTabs} value={this.state.slideIndex + ''}>
          <Tab style={styles.tab[0]} label="ABOUT ME" value="0" />
          <Tab style={styles.tab[1]} label="PROJECTS" value="1" />
          <Tab style={styles.tab[2]} label="ARTICLES" value="2" />
        </Tabs>
        
      

        <SwipeableViews styles={styles.swipeable_views} ref="swipeview" onScrollSlide={this.onScrollSlide} index={this.state.slideIndex} onChangeIndex={this.onChangeIndex} resistance={true}>
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