const apple= require('./apple');
const orange= require('./orange');
const banana= require('./banana');

let fruits = [apple, orange, banana];

module.exports = fruits;
// module.exports = [apple, orange, banana]; // Alternative way to export the array directly