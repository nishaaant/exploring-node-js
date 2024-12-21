console.log("xyz module executed");

const crypto = require("crypto");

var a = 2 ;
var b = 3 ;

crypto.pbkdf2Sync("password", "salt" , 5000000 , 50, "sha512");
console.log("First Key is Generated");

crypto.pbkdf2("password", "salt" , 5000000 , 50, "sha512", (err, key) => {
    console.log("Second Key is Generated");

});

function calculatemultiply(a,b){

    const multiply = a*b;
    console.log(multiply);
    
}

calculatemultiply(a,b);
