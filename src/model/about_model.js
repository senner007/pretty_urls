var model = {
    about: "stuff",
    getJson : function (callback) {
        $.when($.getJSON('/stuff.json', function () {
            console.log('sucess');
        }, function () {
            console.log('error');
        })).then(function (data) { 
           callback(data);
        });
    }
}

export { model };