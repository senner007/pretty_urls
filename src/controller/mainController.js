import { View_controller } from "./view_constructor/view_controller.js";
import { home } from "../view/home_view.js";
import { about } from "../view/about_view.js";
import { changelog } from "../view/changelog_view.js";

const homeView = $(home); // VIEWS as $ reference objects
const aboutView = $(about);
const changelogView = $(changelog);

var navbar_view_controller = new View_controller(); // new instantiation of view controller

// insert views
for (let view of [homeView, aboutView, changelogView]) {
    view.filter('div').find('.card-footer').css('font-size', '32px'); // exemplifying manipulation prior to insertion
    let title = $(view)[0].title;
    navbar_view_controller.views[title] = {
        id: null,
        isLoaded: false,
        isVisible: false,
        domContent: view
    }
};

export { navbar_view_controller };
export { homeView, aboutView, changelogView }