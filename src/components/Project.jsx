var React = require('react');

// Material-UI
var Colors = require('material-ui/lib/styles/colors');

var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardExpandable = require('material-ui/lib/card/card-expandable');
var CardHeader = require('material-ui/lib/card/card-header');
var CardMedia = require('material-ui/lib/card/card-media');
var CardText = require('material-ui/lib/card/card-text');
var CardTitle = require('material-ui/lib/card/card-title');
var FlatButton = require('material-ui/lib/flat-button');

var FontIcon = require('material-ui/lib/font-icon');
var IconButton = require('material-ui/lib/icon-button');

// Twitter Bootstrap
var Modal = require('react-bootstrap/lib/Modal')

// Other tools
var Remarkable = require('remarkable');
var md = new Remarkable('commonmark');

// My Components
var Tag = require('./Tag.jsx')
var style = {
  root:{
    marginBottom: 28
  },
  tags:{
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  card:{
    borderRadius: 5
  }
};
    
var Project = React.createClass({
  getInitialState: function() {
    return {show: false};
  },
  showModal: function () {
    this.setState({show: true});
  },

  hideModal: function () {
    this.setState({show: false});
  },
  render: function() {
    var tags_map = { c: "category", t: "tech" }
    var tags = this.props.project.tags.map(function(t, i){
      des = t.substring(2)
      type = tags_map[t.substring(0, 1)]
      return ( <Tag key={i} title={des} type={type} /> )
    })
    var media = (<img src={this.props.project.img}/>)
    // var media = this.props.project.video? (<div dangerouslySetInnerHTML={{__html: this.props.project.video}} />) : (<img src={this.props.project.img}/>)


    return (
      <div style={style.root}>
        <Card style={style.card}>
          <CardTitle title={this.props.project.title} subtitle={this.props.project.subtitle} />
          <CardMedia>
            {media}
          </CardMedia>
          
          <CardText>
            <ul style={style.tags}>{tags}</ul>
          </CardText>
          
          <CardText style={{paddingTop: 0}}>
            {this.props.project.description}
          </CardText>

          <CardActions style={{borderTop: "1px solid " + Colors.grey300, textAlign: "right"}}>
            {/*<IconButton iconClassName="material-icons">code</IconButton>*/}
            <FlatButton label="MORE" onClick={this.showModal}/>
          </CardActions>
        </Card>

        <Modal show={this.state.show} onHide={this.hideModal} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.project.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div dangerouslySetInnerHTML={{__html: md.render(this.props.project.markdown)}} />
          </Modal.Body>

          <Modal.Footer>
            <FlatButton onClick={this.hideModal}>Close</FlatButton>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = Project;