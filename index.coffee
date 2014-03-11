class ShitMainView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'shit main-view'
    super options, data

  viewAppended:->
    @addSubView new KDView
      partial  : "Welcome to Shit  HELLOO app!"
      cssClass : "welcome-view"

class ShitController extends AppController

  constructor:(options = {}, data)->
    options.view    = new ShitMainView
    options.appInfo =
      name : "Shit"
      type : "application"

    super options, data

do ->

  # In live mode you can add your App view to window's appView
  if appView?

    view = new ShitMainView
    appView.addSubView view

  else

    KD.registerAppClass ShitController,
      name     : "Shit"
      routes   :
        "/:name?/Shit" : null
        "/:name?/Apps/gokmen/Shit/run" : null
      dockPath : "/Apps/gokmen/Shit/run"
      behavior : "application"