
// create views object with methods
var view_controller = {
  currentView: null,
  hideCurrent: function () {
    if(this.currentView !=null) {
      let elemid = this.views[this.currentView].id;
      elemid.hide();
      this.views[this.currentView].isVisible = false;
    }
  },
  updateView: function (sourceNode, targetNode) {

    this.hideCurrent();

    if (this.views[sourceNode].isLoaded) {
      let elemid = this.views[sourceNode].id;
      elemid.show();
      console.log('DOM content is already loaded');
    } else {
      targetNode.append(this.views[sourceNode].domContent);
      this.views[sourceNode].id = targetNode.find('#' + sourceNode + '_div');
      console.log('DOM content inserted');
      this.views[sourceNode].isLoaded = true;
    }
    this.currentView = sourceNode;
    this.views[sourceNode].isVisible = true;

  },
  views: {}
}

export {view_controller}
