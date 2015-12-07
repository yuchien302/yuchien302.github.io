'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _reactMotion = require('react-motion');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var styles = {
  root: {
    overflowX: 'hidden',
    height: '100%'
  },
  container: {
    display: 'flex',
    height: '100%'
  },
  slide: {
    width: '100%',
    flexShrink: 0,
    overflow: 'scroll',
    willChange: 'transform',
    height: '100%',
    WebkitOverflowScrolling: "touch",
    paddingTop: "162px"
  }
};

var resistanceCoef = 0.7;

var SwipeableViews = _react2['default'].createClass({
  displayName: 'SwipeableViews',

  propTypes: {
    children: _react2['default'].PropTypes.node,

    /**
     * If true, it will disable touch events.
     * This is useful when you want to prohibit the user from changing slides.
     */
    disabled: _react2['default'].PropTypes.bool,

    /**
     * This is the index of the slide to show.
     * This is useful when you want to change the default slide shown.
     * Or when you have tabs linked to each slide.
     */
    index: _react2['default'].PropTypes.number,

    /**
     * This is callback prop. It's call by the
     * component when the shown slide change after a swipe made by the user.
     * This is useful when you have tabs linked to each slide.
     */
    onChangeIndex: _react2['default'].PropTypes.func,

    onScrollSlide: _react2['default'].PropTypes.func,

    /**
     * If true, it will add bounds effect on the edges.
     */
    resistance: _react2['default'].PropTypes.bool,

    /**
     * This is the inlined style that will be applied
     * to each slide container.
     */
    style: _react2['default'].PropTypes.object,

    /**
     * This is the threshold used for detecting a quick swipe.
     * If the computed speed is above this value, the index change.
     */
    threshold: _react2['default'].PropTypes.number
  },
  mixins: [_reactAddonsPureRenderMixin2['default']],
  getDefaultProps: function getDefaultProps() {
    return {
      index: 0,
      threshold: 5,
      resistance: false,
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      index: this.props.index,
      indexLatest: this.props.index,
      isDragging: false,
      isFirstRender: true
    };
  },
  componentDidMount: function componentDidMount() {
    this.setState({
      isFirstRender: false
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var index = nextProps.index;

    if (typeof index === 'number' && index !== this.props.index) {
      this.setState({
        index: index,
        indexLatest: index
      });
    }
  },
  slides: [],
  handleTouchStart: function handleTouchStart(event) {
    var touch = event.touches[0];

    this.startWidth = _reactDom2['default'].findDOMNode(this).getBoundingClientRect().width;
    this.startIndex = this.state.index;
    this.startX = touch.pageX;
    this.lastX = touch.pageX;
    this.deltaX = 0;
    this.startY = touch.pageY;
    this.isScrolling = undefined;
  },
  handleTouchMove: function handleTouchMove(event) {
    var touch = event.touches[0];

    // This is a one time test
    if (this.isScrolling === undefined) {
      this.isScrolling = Math.abs(this.startY - touch.pageY) > Math.abs(this.startX - touch.pageX);
    }

    if (this.isScrolling) {
      return;
    }

    // Prevent native scrolling
    event.preventDefault();

    this.deltaX = this.deltaX * 0.5 + (touch.pageX - this.lastX) * 0.5;
    this.lastX = touch.pageX;

    var indexMax = _react2['default'].Children.count(this.props.children) - 1;

    var index = this.startIndex + (this.startX - touch.pageX) / this.startWidth;

    if (!this.props.resistance) {
      if (index < 0) {
        index = 0;
        this.startX = touch.pageX;
      } else if (index > indexMax) {
        index = indexMax;
        this.startX = touch.pageX;
      }
    } else {
      if (index < 0) {
        index = Math.exp(index * resistanceCoef) - 1;
      } else if (index > indexMax) {
        index = indexMax + 1 - Math.exp((indexMax - index) * resistanceCoef);
      }
    }

    this.setState({
      isDragging: true,
      index: index
    });
  },
  handleTouchEnd: function handleTouchEnd() {
    if (this.isScrolling) {
      return;
    }

    var indexNew = undefined;

    // Quick movement
    if (Math.abs(this.deltaX) > this.props.threshold) {
      if (this.deltaX > 0) {
        indexNew = Math.floor(this.state.index);
      } else {
        indexNew = Math.ceil(this.state.index);
      }
    } else {
      // Some hysteresis with startIndex
      if (Math.abs(this.startIndex - this.state.index) > 0.6) {
        indexNew = Math.round(this.state.index);
      } else {
        indexNew = this.startIndex;
      }
    }

    var indexMax = _react2['default'].Children.count(this.props.children) - 1;

    if (indexNew < 0) {
      indexNew = 0;
    } else if (indexNew > indexMax) {
      indexNew = indexMax;
    }

    this.setState({
      index: indexNew,
      indexLatest: indexNew,
      isDragging: false
    });

    if (this.props.onChangeIndex && indexNew !== this.startIndex) {
      this.props.onChangeIndex(indexNew);
    }
  },
  getHeightSlide: function getHeightSlide(index) {
    var slide = this.slides[index];
    if (slide !== undefined) {
      var child = slide.children[0];
      if (child !== undefined) {
        return child.clientHeight;
      }
    }
    return 0;
  },
  renderContainer: function renderContainer(interpolatedStyle) {
    var _this = this;

    var _props = this.props;
    var children = _props.children;
    var style = _props.style;
    var isFirstRender = this.state.isFirstRender;

    this.slides = [];
    var childrenToRender = undefined;

    childrenToRender = _react2['default'].Children.map(children, function (element, i) {
      if (isFirstRender && i > 0) {
        return null;
      }

      return _react2['default'].createElement(
        'div',
        { ref: function (s) {
            return _this.slides[i] = s;
          }, style: styles.slide, onScroll: _this.props.onScrollSlide },
        element
      );
    });

    var translate = -interpolatedStyle.translate;

    return _react2['default'].createElement(
      'div',
      { style: (0, _objectAssign2['default'])({
          WebkitTransform: 'translate3d(' + translate + '%, 0, 0)',
          transform: 'translate3d(' + translate + '%, 0, 0)',
          height: interpolatedStyle.height
        }, styles.container, style)},
      childrenToRender
    );
  },
  render: function render() {
    var _this2 = this;

    var _props2 = this.props;
    var disabled = _props2.disabled;
    var style = _props2.style;
    var _state = this.state;
    var index = _state.index;
    var indexLatest = _state.indexLatest;
    var isDragging = _state.isDragging;

    var translate = index * 100;

    var height = 0;
    // There is no point to animate if we already provide a height
    if (!style || !style.height) {
      height = this.getHeightSlide(indexLatest);
    }

    var motionStyle = isDragging ? {
      translate: translate,
      height: height
    } : {
      translate: (0, _reactMotion.spring)(translate, [300, 30]),
      height: height !== 0 ? (0, _reactMotion.spring)(height, [300, 30]) : 0
    };

    var touchEvents = disabled ? {} : {
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd
    };

    return _react2['default'].createElement(
      'div',
      _extends({ style: styles.root }, touchEvents),
      _react2['default'].createElement(
        _reactMotion.Motion,
        { style: motionStyle },
        function (interpolatedStyle) {
          return _this2.renderContainer(interpolatedStyle);
        }
      )
    );
  }
});

exports['default'] = SwipeableViews;
module.exports = exports['default'];