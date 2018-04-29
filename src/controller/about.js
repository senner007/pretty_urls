import { aboutView } from "./mainController.js";
import { model } from "../model/about_model.js";

aboutView.find('.btn').on('click', function (e) { // get json via model
    e.preventDefault();
    this.parentElement.removeChild(this); // or $(this).remove
    model.getJson(function(data) { // Callback
        aboutView.find('.card-header').text(data.about.text.data).css('font-size', 50); // display json data
    });
})






