import cursor from './cursor'
window.Bindings = Keys.Bindings;
window.Combo    = Keys.Combo;
window.Key      = Keys.Key;

// Initialize application-wide bindings manager
window.bindings = new Bindings();

//光标移到行头
bindings.add('moveToStart', new Combo(Key.A, Key.CTRL));
bindings.add('moveToStart1', new Combo(Key.Left, Key.META));
bindings.registerHandler('keydown', moveToStart);
bindings.registerHandler('keydown', moveToStart1);
function moveToStart() {
  cursor.moveToStart()
}
function moveToStart1() {
  cursor.moveToStart()
}
//光标移到行尾
bindings.add('moveToEnd', new Combo(Key.E, Key.CTRL));
bindings.add('moveToEnd2', new Combo(Key.Right, Key.META));
bindings.registerHandler('keydown', moveToEnd);
bindings.registerHandler('keydown', moveToEnd2);
function moveToEnd() {
  cursor.moveToEnd()
}
function moveToEnd2() {
  cursor.moveToEnd()
}
//cmd+上
bindings.add('moveToAllStart', new Combo(Key.Up, Key.META));
bindings.registerHandler('keydown', moveToAllStart);
function moveToAllStart() {
  cursor.moveToStart()
}
//cmd+下
bindings.add('moveToAllEnd', new Combo(Key.Down, Key.META));
bindings.registerHandler('keydown', moveToAllEnd);
function moveToAllEnd() {
  cursor.moveToEnd()
}
//shift+command+左
bindings.add('selectRange', new Combo(Key.Left, Key.META, Key.SHIFT));
bindings.registerHandler('keydown', selectRange);
function selectRange(e) {
  e.preventDefault()
  cursor.selectRange('left')
}
//shift+command+上
bindings.add('selectRange1', new Combo(Key.Up, Key.META, Key.SHIFT));
bindings.registerHandler('keydown', selectRange1);
function selectRange1(e) {
  e.preventDefault()
  cursor.selectRange('up')
}
//shift+command+右
bindings.add('selectRange2', new Combo(Key.Right, Key.META, Key.SHIFT));
bindings.registerHandler('keydown', selectRange2);
function selectRange2(e) {
  e.preventDefault()
  cursor.selectRange('right')
}
//shift+command+下
bindings.add('selectRange3', new Combo(Key.Down, Key.META, Key.SHIFT));
bindings.registerHandler('keydown', selectRange3);
function selectRange3(e) {
  e.preventDefault()
  cursor.selectRange('down')
}
//shift+command+delete
bindings.add('deleteAll', new Combo(Key.Backspace, Key.META));
bindings.registerHandler('keydown', deleteAll);
function deleteAll(e) {
  e.preventDefault()
  cursor.deleteAll()
}