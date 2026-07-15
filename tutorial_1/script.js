var h1 = document.createElement('h1')

h1.innerHTML = 'Hello from JS'

// console.log(h1);
document.body.appendChild(h1);

// import a from "./app.js"
// console.log(a);

import username from "./app.js";
console.log(username);

import {arr} from "./app.js"
console.log(arr);