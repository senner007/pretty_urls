import {View_controller} from "./view_constructor/view_controller.js";
import {home} from "../view/home_view.js";
import {about} from "../view/about_view.js";
import {changelog} from "../view/changelog_view.js";

var views = [home,about,changelog];

var navbar_view_controller = new View_controller();
navbar_view_controller.views = {};

// insert views properties
for (let view of views) {
  let title = $(view)[0].title;
  navbar_view_controller.views[title] = {
    id: null,
    isLoaded: false,
    isVisible : false,
    domContent: view
  }
};

var navbar = function(navNode, router) {

  navNode.on('click','a', function (e) {
    e.preventDefault();
    var newPathname = this.pathname.slice(1, this.pathname.length)
    if(navbar_view_controller.currentView == newPathname) return;
    router.navigateTo(newPathname);
  });

  return navNode;
};

export {navbar, navbar_view_controller};
