import { e_preventDefault, e_stop, on } from "./event"
import { onKeyDown, onKeyUp } from "./key_events"

export function KeyBinds (box) {
  on(box, "keydown", e => onKeyDown.call(this, e))
  on(box, "keyup", e => onKeyUp.call(this, e))
}