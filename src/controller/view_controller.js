
// create views object with methods

function View_controller () {

    this.currentView =  null
    this.hideCurrent =  function () {
      if(this.currentView !=null) {
        let elemid = this.views[this.currentView].id;
        elemid.hide();
        this.views[this.currentView].isVisible = false;
      }
    }
    this.updateView = function (sourceNode, targetNode) {

      this.hideCurrent();

      if (this.views[sourceNode].isLoaded) {
        let elemid = this.views[sourceNode].id;
        elemid.show();
        console.log('DOM content is already loaded');
      } else {
        targetNode.append(this.views[sourceNode].domContent);
        this.views[sourceNode].id = targetNode.find('#' + sourceNode + '_div');
        console.log('DOM content inserted');
        $(targetNode).trigger( "inserted", [ sourceNode ] );
        // add trigger with view name loaded in callback
        this.views[sourceNode].isLoaded = true;
      }
      this.currentView = sourceNode;
      this.views[sourceNode].isVisible = true;
    }
}


export {View_controller}
