'use strict';
var model = {
    about: "stuff",
    getJson : function (callback) {
        $.when($.getJSON('src/model/stuff.json', function () {
            console.log('sucess');
        }, function () {
            console.log('error');
        })).then(function (data) { 
           callback(data);
        });
    }
}

export { model };