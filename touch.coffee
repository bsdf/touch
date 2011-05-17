# utils
log = (what) -> console.log "#{time()}~gt> #{what}"
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

class three_finger_swipe_left extends gesture
    constructor: -> super "three_finger_swipe_left"

class three_finger_swipe_right extends gesture
    constructor: -> super "three_finger_swipe_right"

class three_finger_swipe_up extends gesture
    constructor: -> super "three_finger_swipe_up"

class three_finger_swipe_down extends gesture
    constructor: -> super "three_finger_swipe_down"

# main
gestures = [
    new three_finger_swipe_left
    new three_finger_swipe_right
    new three_finger_swipe_up
    new three_finger_swipe_down
];


gt = new goodtouch
gt.recognize ['a', 'b', 'c'], 'context'
