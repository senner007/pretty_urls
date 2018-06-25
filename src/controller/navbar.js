import $ from 'jquery';
import { navbar_view_controller } from "./mainController.js";

var navbar = function(getPathName, navNode, router) {
  // add active class to li whoose 'a' tag text matches initial pathname url
  // TODO : make better solution
  var newpath = getPathName.replace("//", "")
 // console.log(newpath.split('/')[0])
  //console.log(navNode.find("a:contains('" + newpath.split('/')[0] + "')"))
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

export {navbar}

