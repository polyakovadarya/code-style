// пример _on_move
// drag
$$.Script.prototype.drag_auto_on_move = function (obj, mode) {
  this.com.dragger.drag(obj, mode);
  return { slot: 0 };
};
