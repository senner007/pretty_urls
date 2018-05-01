function View_controller(o) {

  this.views = {};
  o.beforeInsert(); // call beforeInsert
  o.views.forEach(view => {
    this.views[view[0].title] = {
      id: null,
      isLoaded: false,
      isVisible: false,
      domContent: view
    }
  });
  this.currentView = null
  this._hideCurrent = function () {
    if (this.currentView != null) {
      let elemid = this.views[this.currentView].id;
      elemid.hide();
      this.views[this.currentView].isVisible = false;
    }
  }
  this.updateView = function (sourceNode, targetNode) {

    this._hideCurrent();

    if (this.views[sourceNode].isLoaded) {
      let elemid = this.views[sourceNode].id;
      elemid.show();
      console.log('DOM content is already loaded');
    } else {
      targetNode.append(this.views[sourceNode].domContent);
      this.views[sourceNode].id = targetNode.find('#' + sourceNode + '_div');
      console.log('DOM content inserted');
      this.views[sourceNode].isLoaded = true;
      $(targetNode).trigger("inserted", [sourceNode]);
    }
    this.currentView = sourceNode;
    this.views[sourceNode].isVisible = true;
  }


}

// overwrite jquery contains to search for case-insensitive text
$.expr[":"].contains = $.expr.createPseudo(function (arg) { // export me!
  return function (elem) {
    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  };
});


export {
  View_controller
}