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

var navbar = function(getPathName, navNode, router) {
  // add active class to li whoose 'a' tag text matches initial pathname url
  // TODO : make better solution
  var newpath = getPathName.replace("//", "")
  console.log(newpath.split('/')[0])
  console.log(navNode.find("a:contains('" + newpath.split('/')[0] + "')"))
  navNode.find("a:contains('" + (newpath != "" ? newpath.split('/')[0] : 'home') + "')").addClass('active');

  navNode.on('click','li', function (e) {
   
    e.preventDefault();
    $(this).parent().find('.active').removeClass('active'); // remove previous .active class
    $(this).addClass('active'); // set new active class
    var newPathname = this.firstElementChild.pathname.slice(1, this.firstElementChild.pathname.length)
    if(navbar_view_controller.currentView == newPathname) return;
    
    router.navigateTo(newPathname);
  });

  return navNode;
};
// overwrite jquery contains to search for case-insensitive text
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
  return function (elem) {
    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  };
});

export {navbar, navbar_view_controller};
