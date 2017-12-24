import {myRouter} from "../router/router.js";
import {view_controller} from "./view_controller.js";
import {home} from "../view/home_view.js";
import {about} from "../view/about_view.js";
import {changelog} from "../view/changelog_view.js";

var views = [home,about,changelog];

// insert views properties
for (let view of views) {
  let title = $(view)[0].title;
  view_controller.views[title] = {
    id: null,
    isLoaded: false,
    isVisible : false,
    domContent: view
  }
};

var navbar = function(navNode) {

  navNode.on('click','a', function (e) {
    e.preventDefault();
    var newPathname = this.pathname.slice(1, this.pathname.length)
    if(view_controller.currentView == newPathname) return;
    myRouter.navigateTo(newPathname);
  });

  return navNode;
};

export {navbar, view_controller};
