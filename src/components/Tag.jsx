var React = require('react');
var Colors = require('material-ui/lib/styles/colors');

var Tag = React.createClass({

  render: function() {
    if(this.props.type == "tech") {
      var color = Colors.deepOrange500
    } else {
      var color = Colors.indigo500
    }


    var style = {
      background: color,
      color: "white",
      padding: "3px 5px",
      borderRadius: "3px",
      fontSize: "14px",
      marginRight: "5px"
    }
 
    return (
      <li style={{display: "inline-block", marginBottom: "5px"}}><span style={style}>{this.props.title}</span></li>
    );
  }
});

module.exports = Tag;