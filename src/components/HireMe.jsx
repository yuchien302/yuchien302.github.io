var React = require('react');

var HireMe = React.createClass({
  render: function() {
    return (
      <div>
        <h2>You should hire me!</h2>
            • General Purpose: Python, C++, Matlab, Haskell, Java, Ruby
            • Web General: CoffeeScript, CSS/Sass/Compass, Ruby on Rails, AWS, Heroku
            • Javascript related: ReactJS, BackboneJS, jQuery, NodeJS, AngularJS
            • Visualization: processing, D3.js, OpenGL
            • Others: Swift, Objective-C, Git, LATEX, Arduino, bash, MSSQL, MongoDB
      </div>
    );
  }
});

module.exports = HireMe;