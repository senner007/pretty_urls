import {navbar, navbar_view_controller} from "/src/controller/navbar.js";
import {changelog_view_controller} from "/src/controller/changelog.js";
import {myRouter, getPathname} from "/src/router/router.js";

$(document).ready(function () {
  console.log('document is ready');
  var myContent = $('#myContent');
  var navNode = $('.navbar-nav');

  myContent.on('inserted', function (e, view) {
    if (view == 'changelog') {
      console.log('changelog init')
      changelog_view_controller.init(myContent, myRouter);
    }
  } );


  myRouter.add('home', function () {
      console.log('Home page');
      navbar_view_controller.updateView('home', myContent);
  });

  myRouter.add('', function () {
      console.log('Redirecting to: ' + 'home');
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
      navbar_view_controller.updateView('about', myContent);
  });

  myRouter.add('changelog', function () {
      console.log('Redirecting to: ' + 'changelog/' + changelog_view_controller.active);
      myRouter.redirectTo('changelog/' + changelog_view_controller.active);
  });

  myRouter.add('changelog/(lorem|ipsum|dolor|sit|amet)', function (name) {
    navbar_view_controller.updateView('changelog', myContent);
    changelog_view_controller.addActive(name)
    console.log(changelog_view_controller)
    console.log('Hello changelog/' + name);
  });

  myRouter.addUriListener();
  myRouter.navigateTo(getPathname);
  navbar(navNode, myRouter);

})
