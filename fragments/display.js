// IB2F/Display - rendering code
//Copyright (C)2017 Intense Battle 2
//This file was designed to be inlcuded with base.js
/*
 * Insert GNU GPL text here
*/
/*
 * include add.js
*/
ib2f.display={layer:[]};
ib2f.display.createLayer=function(name,css){
  if(document.querySelector("#"+name")!=undefined){console.error("ib2f.display.createLayer(): Layer "+name+" already exists!");
  add("<div id=\""+name+"\" style=\""+css+"\"></div>");
  ib2f.display.layer[name]=document.querySelector("#"+name);
  var thisLayer=ib2f.display.layer[name];
  thisLayer.delete=function(){
    this.parentNode.deleteChild(this);
  };
  thisLayer.sprite;
  thisLayer.createSprite=function(name,css,img){
	this.innerHTML+="<img src=\""+img+"\" id=\""+this.id+":"+name+"\" style=\""+css+"\"/>";
};