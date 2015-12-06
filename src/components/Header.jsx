var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div style={{height: "100px", backgroundImage: "url('/src/images/bg.png')", backgroundAttachment:"fixed" }}>
        <h2 style={{color: "white", margin: 0, padding: 0}}>Yu-Chien Chan</h2>
      </div>
    );
  }
});

module.exports = Header;