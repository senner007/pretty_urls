import {navbar, viewObj} from "/src/controller/navbar.js";
import {myRouter, getPathname} from "/src/router/router.js";

$(document).ready(function () {
  console.log('document is ready');

  myRouter.add('home', function () {
      console.log('Home page');
      viewObj.updateView('home');
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
      viewObj.updateView('about');
  });

  myRouter.add('changelog', function () {
      console.log('Changelog Page');
      viewObj.updateView('changelog');
  });

  myRouter.addUriListener();
  myRouter.navigateTo(getPathname);
  navbar();
})
