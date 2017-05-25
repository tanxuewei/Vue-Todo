const cursor = {
  getNode (node) {
    if (!node) return
    return node.nodeType == 3 ? node.parentNode : node
  },
  moveToStart () {
    var sel = window.getSelection()
    var range = sel.getRangeAt(0)
    sel.selectAllChildren(this.getNode(range.startContainer))
    sel.collapseToStart()
  },
  moveToAllStart () {
    var sel = window.getSelection()
    var range = sel.getRangeAt(0)
    sel.selectAllChildren(document.getElementById('edit'))
    sel.collapseToStart()
  },
  moveToEnd () {
    var sel = window.getSelection()
    var range = sel.getRangeAt(0)
    sel.selectAllChildren(this.getNode(range.startContainer))
    sel.collapseToEnd()
  },
  selectRange (type) {
    var sel = window.getSelection()
    var range1 = sel.getRangeAt(0)
    var range = document.createRange()
    switch (type){
      case 'left':
        range.setStart(range1.endContainer, 0)
        range.setEnd(range1.endContainer, range1.endOffset)
      break;
      case 'right':
        range.setStart(range1.endContainer, range1.endOffset)
        range.setEnd(range1.endContainer, range1.endContainer.length)
      break;
      case 'up':
        range.setStart(range1.endContainer, 0)
        range.setEnd(range1.endContainer, range1.endOffset)
      break;
      case 'down':
        range.setStart(range1.endContainer, range1.endOffset)
        range.setEnd(range1.endContainer, range1.endContainer.length)
      break;
      default:
      break;
    }
    sel.removeAllRanges()
    sel.addRange(range)
  },
  deleteAll () {
    var sel = window.getSelection()
    var range1 = sel.getRangeAt(0)
    var range = document.createRange();
    range.selectNode(range1.endContainer)
    range.deleteContents()
  }
}
export default cursor