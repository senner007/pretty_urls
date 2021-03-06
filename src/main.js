

import $ from 'jquery';
// css files must be placed in html headers
// import '../css/loadingStyle.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import {navbar} from "./controller/navbar.js";
import {navbar_view_controller } from "./controller/mainController.js";
import {changelog_view_controller} from "./controller/changelog.js";
import {about_view_controller} from "./controller/about.js";
import {myRouter, getPathname} from "./router/router.js";


$(document).ready(function () {
  console.log('document is ready');
  var myContent = $('#myContent');
  var navNode = $('.navbar-nav');

  myContent.on('inserted', function (e, view) {
    if (view == 'changelog') {
      console.log('changelog init');
      changelog_view_controller.init(myContent.find('#changelog_div').find('ul'), myRouter);
    }
  } );

  myRouter.add('home', function () {
      console.log('Home page');
      navbar_view_controller.updateView('home', myContent);
  });


  myRouter.add('', function () {
      console.log('Redirecting to: home');
      myRouter.redirectTo('home');
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
      about_view_controller.init();
      navbar_view_controller.updateView('about', myContent);
  });

  myRouter.add('changelog', function () {
      console.log('Redirecting to: changelog/' + changelog_view_controller.active);
      myRouter.redirectTo('changelog/' + changelog_view_controller.active);
  });

  myRouter.add('changelog/(' + changelog_view_controller.arrayToRoutes + ')', function (name) {
    navbar_view_controller.updateView('changelog', myContent);
    changelog_view_controller.addActive(name)
    console.log('Hello changelog/' + name);
  });

  myRouter.addUriListener();
  myRouter.navigateTo(getPathname);
  navbar(getPathname, navNode, myRouter);


})

