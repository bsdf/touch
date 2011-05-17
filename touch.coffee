LOG_LEVEL_SILENT = 666
LOG_LEVEL_INFO = 1
LOG_LEVEL_ERROR = 0
LOG_LEVEL_DEBUG = -1

LOG_LEVEL=LOG_LEVEL_DEBUG

# utils
log = (what) -> logz what, 1
err = (what) -> logz what, 0
dbg = (what) -> logz what, -1
logz = (what, lvl) ->
    if lvl >= LOG_LEVEL
        lvl_string =
            switch lvl
                when -1
                    "@dbg"
                when 0
                    "@err"
                when 1
                    "@log"

        console.log "[#{time()}] ~gt#{lvl_string}> #{what}"
time = ->
    dt = new Date
    pad = (what) ->
        if what < 10
            "0" + what
        else
            what
    "#{pad dt.getHours()}:#{pad dt.getMinutes()}:#{pad dt.getSeconds()}"

# classes
class goodtouch
    constructor: ->
        log "goodtouch initialized"
    initialize_gestures: (gestures) ->
    recognize: (touches, context) ->
        log touch for touch in touches

class gesture
    constructor: (@name, @desc) ->
        log "gesture #{@name} created"
    toString: -> @name

class three_finger_swipe_left extends gesture
    constructor: -> super "three_finger_swipe_left"

class three_finger_swipe_right extends gesture
    constructor: -> super "three_finger_swipe_right"

class three_finger_swipe_up extends gesture
    constructor: -> super "three_finger_swipe_up"

class three_finger_swipe_down extends gesture
    constructor: -> super "three_finger_swipe_down"

class pinch_in extends gesture
    constructor: -> super "pinch-in"

class pinch_out extends gesture
    constructor: -> super "pinch-out"

# main
gestures = [
    new three_finger_swipe_left
    new three_finger_swipe_right
    new three_finger_swipe_up
    new three_finger_swipe_down
    new pinch_in
    new pinch_out
];


gt = new goodtouch
gt.recognize gestures
dbg "debug message"
err "err message"
log "log message"