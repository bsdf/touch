(function() {
  var LOG_LEVEL, LOG_LEVEL_DEBUG, LOG_LEVEL_ERROR, LOG_LEVEL_INFO, LOG_LEVEL_SILENT, dbg, err, gesture, gestures, goodtouch, gt, log, logz, pinch_in, pinch_out, three_finger_swipe_down, three_finger_swipe_left, three_finger_swipe_right, three_finger_swipe_up, time;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  LOG_LEVEL_SILENT = 666;
  LOG_LEVEL_INFO = 1;
  LOG_LEVEL_ERROR = 0;
  LOG_LEVEL_DEBUG = -1;
  LOG_LEVEL = LOG_LEVEL_DEBUG;
  log = function(what) {
    return logz(what, 1);
  };
  err = function(what) {
    return logz(what, 0);
  };
  dbg = function(what) {
    return logz(what, -1);
  };
  logz = function(what, lvl) {
    var lvl_string;
    if (lvl >= LOG_LEVEL) {
      lvl_string = (function() {
        switch (lvl) {
          case -1:
            return "@dbg";
          case 0:
            return "@err";
          case 1:
            return "@log";
        }
      })();
      return console.log("[" + (time()) + "] ~gt" + lvl_string + "> " + what);
    }
  };
  time = function() {
    var dt, pad;
    dt = new Date;
    pad = function(what) {
      if (what < 10) {
        return "0" + what;
      } else {
        return what;
      }
    };
    return "" + (pad(dt.getHours())) + ":" + (pad(dt.getMinutes())) + ":" + (pad(dt.getSeconds()));
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
    gesture.prototype.toString = function() {
      return this.name;
    };
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
  pinch_in = (function() {
    __extends(pinch_in, gesture);
    function pinch_in() {
      pinch_in.__super__.constructor.call(this, "pinch-in");
    }
    return pinch_in;
  })();
  pinch_out = (function() {
    __extends(pinch_out, gesture);
    function pinch_out() {
      pinch_out.__super__.constructor.call(this, "pinch-out");
    }
    return pinch_out;
  })();
  gestures = [new three_finger_swipe_left, new three_finger_swipe_right, new three_finger_swipe_up, new three_finger_swipe_down, new pinch_in, new pinch_out];
  gt = new goodtouch;
  gt.recognize(gestures);
  dbg("debug message");
  err("err message");
  log("log message");
}).call(this);
