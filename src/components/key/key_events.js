import { isModifierKey, keyName, lookupKey } from "./keymap"
import { ie, ie_version, mac, presto } from "./browser"
import { e_preventDefault, off, on, signalDOMEvent } from "./event"

import { commands } from "./commands"

// Run a handler that was bound to a key.
function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = commands[bound]
    if (!bound) return false
  }
  // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document
  cm.display.input.ensurePolled()
  let prevShift = cm.display.shift, done = false
  try {
    if (cm.isReadOnly()) cm.state.suppressEdits = true
    if (dropShift) cm.display.shift = false
    done = bound(cm) != Pass
  } finally {
    cm.display.shift = prevShift
    cm.state.suppressEdits = false
  }
  return done
}

// Handle a key from the keydown event.
function handleKeyBinding(e) {
  let name = keyName(e, true)
  if (!name) return false

  doHandleBinding(true)
}

let lastStoppedKey = null
//按下
export function onKeyDown (e) {
  let cm = this
  let code = e.keyCode
  cm.key = {
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    ctrlKey: e.ctrlKey
  }
  let handled = handleKeyBinding(e)
  
}
export function onKeyUp (e) {

}