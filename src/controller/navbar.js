import {myRouter} from "../router/router.js";
import {home} from "../view/home_view.js";
import {about} from "../view/about_view.js";
import {changelog} from "../view/changelog_view.js";

var views = [home,about,changelog];

var viewObj = {
  contentDiv: null,
  currentView: null,
  hideCurrent: function () {
    if(this.currentView !=null) {
      let elemid = this.views[this.currentView].id;
      elemid.hide();
      this.views[this.currentView].isVisible = false;
    }
  },
  updateView: function (DOMnode) {

    this.hideCurrent();

    if (this.views[DOMnode].isLoaded) {
      let elemid = this.views[DOMnode].id;
      elemid.show();
      console.log('DOM content is already loaded');
    } else {
      this.contentDiv = this.contentDiv == null ? $('#myContent') : this.contentDiv;
      this.contentDiv.append(this.views[DOMnode].domContent);
      this.views[DOMnode].id = this.contentDiv.find('#' + DOMnode + '_div');
      console.log('DOM content inserted');
      this.views[DOMnode].isLoaded = true;
    }
    this.currentView = DOMnode;
    this.views[DOMnode].isVisible = true;

  },
  views: {}
}

for (let view of views) {
  let title = $(view)[0].title;
  viewObj.views[title] = {
    id: null,
    isLoaded: false,
    isVisible : false,
    domContent: view
  }
};

var navbar = function() {

  var navLinks = $('.navbar-nav');

  navLinks.on('click','a', function (e) {
    e.preventDefault();
    var newPathname = this.pathname.slice(1, this.pathname.length)
    if(viewObj.currentView == newPathname) return;
    myRouter.navigateTo(newPathname);
  })

  return navLinks;
};

export {navbar, viewObj};
