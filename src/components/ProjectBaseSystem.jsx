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


// Twitter Bootstrap
var Modal = require('react-bootstrap/lib/Modal')

// My Components
var Tag = require('./Tag.jsx')

var ProjectBaseSystem = React.createClass({
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
    return (

      <div style={this.props.style}  className="item" key={0}>
        <Card>
          <CardTitle title="BaseSystem" subtitle="Computer asset aggregator" />
          <CardMedia>
            <img src="/dist/images/basesystem.jpg"/>
          </CardMedia>


          
          <CardText>
            <Tag title="Web App" type="category"/>
            <Tag title="React.js" type="tech"/>
            <Tag title="Node.js" type="tech"/>
            <Tag title="Q.js" type="tech"/>
            <Tag title="MSSQL" type="tech"/>
          </CardText>

          <CardText>
            Build a physical gaming product using Arduino, Pumpspark Fountain Development Kit, python. Won 1st Creativity at ACM UIST‘13 Student Innova- tion Contest
          </CardText>

          <CardActions style={{borderTop: "1px solid " + Colors.grey300, textAlign: "right"}}>
            <FlatButton label="MORE" onClick={this.showModal}/>
          </CardActions>

        </Card>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          animation={false}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
             Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis laudantium quibusdam quidem corporis architecto veritatis. Ex facilis minima beatae sunt perspiciatis placeat. Quasi corporis
             odio eaque voluptatibus ratione magnam nulla? Amet cum maiores consequuntur totam dicta! Inventore adipisicing vel vero odio modi doloremque? Vitae porro impedit ea minima laboriosam quisquam neque. Perspiciatis omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum vitae modi reiciendis officiis.
             Quas laudantium laudantium modi corporis nihil provident consectetur omnis, natus nulla distinctio illum corporis. Sit ex earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum illum architecto aspernatur perspiciatis error fuga illum, tempora harum earum, a dolores. Animi facilis inventore harum dolore accusamus
             fuga provident molestiae eum! Odit dicta error dolorem sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat officia culpa sint! Beatae voluptates voluptatem excepturi molestiae alias in tenetur beatae placeat architecto. Sit possimus rerum
             fugiat sapiente aspernatur. Necessitatibus tempora animi dicta perspiciatis tempora a velit in! Doloribus perspiciatis doloribus suscipit nam earum. Deleniti veritatis eaque totam assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur alias ipsum
             repudiandae! Quia omnis quisquam dignissimos a mollitia. Suscipit</p>
          </Modal.Body>
          <Modal.Footer>
            <FlatButton onClick={this.hideModal}>Close</FlatButton>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = ProjectBaseSystem;