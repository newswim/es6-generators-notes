/*

The ES2016 spec disallows the `new` keyword

*/

function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor"