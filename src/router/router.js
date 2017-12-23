import {Router} from "/node_modules/vanilla-router/dist/vanilla-router.js";

var myRouter = new Router({
    mode: 'history',
    page404: function (path) {
        console.log('"/' + path + '" Page not found');
    }
});

var pathArray = window.location.pathname.split( '/' );

var getPathname = "";
for (let i = 0; i < pathArray.length; i++) {
  getPathname += "/";
  getPathname += pathArray[i];
}
// myRouter.navigateTo('hello/World');

export {myRouter, getPathname}
