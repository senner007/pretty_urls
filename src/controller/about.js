import { navbar_view_controller } from "./navbar.js";
import { model } from "../model/about_model.js";

var dom = $(navbar_view_controller.views["about"].domContent);


// model.getJson(callmeback)

// function callmeback(data) {
//     dom.find('.card-header').text(data.about.text.data);
// }

dom.find('.btn').on('click', function (e) { // get json via model
    e.preventDefault();
    $(this).remove();
    model.getJson(function callmeback(data) { 
        console.log("you called me back!")
        dom.find('.card-header').text(data.about.text.data).css('font-size', 50); // display json data
    });
})






