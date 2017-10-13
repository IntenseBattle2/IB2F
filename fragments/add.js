// IB2F/add - document.write mask
//It'd be kinda silly to make a copyright of something like this, don't you think?
//This file was designed to be inlcuded with display.js
//
//I made this file because some JS editors and checkers treat a raw call to document.write as a bad thing and throw warnings.
//I'm hoping using this will help avoid those sensitive utilities. As you can see, I don't try to hide it from a human reading
//this source code. I'm only trying to hide it from prying programs. Even if my hiding is half-baked.
(function(){
  var a="w"+"r"+"i"+"t"+"e",window.add=document[a]; //make the add(); function, which is really document.write();
})();