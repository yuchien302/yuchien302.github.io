var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div style={{height: "100px", backgroundImage: "url('/dist/images/bg.png')", backgroundAttachment:"fixed",
          paddingTop: "36px", paddingLeft: "50px" }}>
        <h2 style={{color: "white", margin: 0, padding: 0}}>Yu-Chien Chan</h2>
      </div>
    );
  }
});

module.exports = Header;