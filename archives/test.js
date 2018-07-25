// init
$$.Script.prototype.init = function (cb) {
  // Generations
  this.props = { ...this.salt };

  // Components
  this.com = {
    button: new $$.Button({
      content: this.tutor.t('done'),
    }),
  };

  // DOM
  this.dom = {
    button: this.com.button.view,
    buttonContainer: $.div('button-container'),
    scene: $.div('scene'),
    title: $.div('title').html(this.tutor.t('title')),
  };

  cb();
};

// render
$$.Script.prototype.render = function (cb) {
  // Scene
  this.place.append(
    this.dom.scene.append(this.dom.title, this.dom.buttonContainer.append(this.dom.button)),
  );

  cb();
};

// start
$$.Script.prototype.start = function (cb) {
  this.tutor.play_button(cb);
};

// deinit
$$.Script.prototype.deinit = function (cb) {
  cb();
};
