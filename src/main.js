import {navbar, view_controller} from "/src/controller/navbar.js";
import {myRouter, getPathname} from "/src/router/router.js";

$(document).ready(function () {
  console.log('document is ready');
  var myContent = $('#myContent');
  var navNode = $('.navbar-nav');

  myRouter.add('home', function () {
      console.log('Home page');
      view_controller.updateView('home', myContent);
  });

  myRouter.add('', function () {
      myRouter.navigateTo('home');
  });


  // myRouter.add('hello/(:any)', function (name) {
  //     console.log('Hello, ' + name);
  // });
  //
  // myRouter.add('users/(:any)', function (name) {
  //     console.log('Hello, ' + name);
  // });


  myRouter.add('about', function () {
      console.log('About Page');
      view_controller.updateView('about', myContent);
  });

  myRouter.add('changelog', function () {
      console.log('Changelog Page');
      view_controller.updateView('changelog', myContent);
  });

  myRouter.addUriListener();
  myRouter.navigateTo(getPathname);
  navbar(navNode);


})
