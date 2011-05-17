(function() {
  var gesture, gestures, goodtouch, gt, log, three_finger_swipe_down, three_finger_swipe_left, three_finger_swipe_right, three_finger_swipe_up;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  log = function(what) {
    return console.log("~gt> " + what);
  };
  goodtouch = (function() {
    function goodtouch() {
      log("goodtouch initialized");
    }
    goodtouch.prototype.initialize_gestures = function(gestures) {};
    goodtouch.prototype.recognize = function(touches, context) {
      var touch, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = touches.length; _i < _len; _i++) {
        touch = touches[_i];
        _results.push(log(touch));
      }
      return _results;
    };
    return goodtouch;
  })();
  gesture = (function() {
    function gesture(name, desc) {
      this.name = name;
      this.desc = desc;
      log("gesture " + this.name + " created");
    }
    return gesture;
  })();
  three_finger_swipe_left = (function() {
    __extends(three_finger_swipe_left, gesture);
    function three_finger_swipe_left() {
      three_finger_swipe_left.__super__.constructor.call(this, "three_finger_swipe_left");
    }
    return three_finger_swipe_left;
  })();
  three_finger_swipe_right = (function() {
    __extends(three_finger_swipe_right, gesture);
    function three_finger_swipe_right() {
      three_finger_swipe_right.__super__.constructor.call(this, "three_finger_swipe_right");
    }
    return three_finger_swipe_right;
  })();
  three_finger_swipe_up = (function() {
    __extends(three_finger_swipe_up, gesture);
    function three_finger_swipe_up() {
      three_finger_swipe_up.__super__.constructor.call(this, "three_finger_swipe_up");
    }
    return three_finger_swipe_up;
  })();
  three_finger_swipe_down = (function() {
    __extends(three_finger_swipe_down, gesture);
    function three_finger_swipe_down() {
      three_finger_swipe_down.__super__.constructor.call(this, "three_finger_swipe_down");
    }
    return three_finger_swipe_down;
  })();
  gestures = [new three_finger_swipe_left, new three_finger_swipe_right, new three_finger_swipe_up, new three_finger_swipe_down];
  gt = new goodtouch;
  gt.recognize(['a', 'b', 'c'], 'context');
}).call(this);
