import axios from 'axios';


var model = {
    about: "stuff",
    getJson : function (callback) {

        axios.get('https://nielshtg.dk/post')
            .then(function (response) {
                setTimeout(function () { // simulate server delay
                         callback(response);    
                     }, 3000);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export { model };