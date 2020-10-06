let username = "c57bT3";
let userCheck = /[a-zA-Z][a-zA-Z0-9]*[0-9]*/; // Change this line
let result = userCheck.test(username);
console.log(result);
