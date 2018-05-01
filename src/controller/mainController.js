import { View_controller } from "./view_constructor/view_controller.js";
import { home } from "../view/home_view.js";
import { about } from "../view/about_view.js";
import { changelog } from "../view/changelog_view.js";

const homeView = $(home); // VIEWS as $ reference objects
const aboutView = $(about);
const changelogView = $(changelog);

var navbar_view_controller = new View_controller({  // new instantiation of view controller
    views: [homeView, aboutView, changelogView],
    beforeInsert: function () {
        this.views[1].filter('div').find('.card-footer').css('font-size', '32px'); // exemplifying manipulation prior to insertion - filter nneeded?
        this.views[1].filter('div').find('.card-footer').removeClass('text-muted').css('color', 'red') // overwrite bootstrap css by first removing class
    }
});



export { navbar_view_controller };
export { homeView, aboutView, changelogView }