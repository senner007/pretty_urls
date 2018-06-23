import axios from 'axios';

console.log(axios);

var model = {
    about: "stuff",
    getJson : function (callback) {

        axios.get('http://localhost/post')
            .then(function (response) {
                console.log(response);
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