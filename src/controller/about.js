import { aboutView } from "./mainController.js";
import { model } from "../model/about_model.js";

export const about_view_controller = (function  () {
    var isInit = false;
    return {
        init: function () {
            if (isInit) return;
            aboutView.find('.btn').on('click', function (e) { // get json via model
                e.preventDefault();
                this.parentElement.removeChild(this); // or $(this).remove
                //https://codepen.io/xwildeyes/pen/KpqVzN
                //Loading animation test
                aboutView.find('.card-header').html("<div class='saving'>Loading<span>.</span><span>.</span><span>.</span></div>")
                model.getJson(function(data) { // Callback
                    aboutView.find('.card-header').text(data.data[0].title); // display json data
            
                });
            })   
            console.log("about controller initialized!")
            isInit = true;
        }
    }  
})(); // closure around isInit flag







