/* Compiled by kdc on Tue Mar 11 2014 02:06:02 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: /home/gokmen/Applications/Shit.kdapp/index.coffee */
var ShitController, ShitMainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ShitMainView = (function(_super) {
  __extends(ShitMainView, _super);

  function ShitMainView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'shit main-view';
    ShitMainView.__super__.constructor.call(this, options, data);
  }

  ShitMainView.prototype.viewAppended = function() {
    return this.addSubView(new KDView({
      partial: "Welcome to Shit  HELLOO app!",
      cssClass: "welcome-view"
    }));
  };

  return ShitMainView;

})(KDView);

ShitController = (function(_super) {
  __extends(ShitController, _super);

  function ShitController(options, data) {
    if (options == null) {
      options = {};
    }
    options.view = new ShitMainView;
    options.appInfo = {
      name: "Shit",
      type: "application"
    };
    ShitController.__super__.constructor.call(this, options, data);
  }

  return ShitController;

})(AppController);

(function() {
  var view;
  if (typeof appView !== "undefined" && appView !== null) {
    view = new ShitMainView;
    return appView.addSubView(view);
  } else {
    return KD.registerAppClass(ShitController, {
      name: "Shit",
      routes: {
        "/:name?/Shit": null,
        "/:name?/Apps/gokmen/Shit/run": null
      },
      dockPath: "/Apps/gokmen/Shit/run",
      behavior: "application"
    });
  }
})();

/* KDAPP ENDS */
}).call();