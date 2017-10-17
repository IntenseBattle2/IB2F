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
  add("<div id=\""+name+"\" style=\""+css+"\"></div>");
  ib2f.display.layer[name]=document.querySelector("#"+name);
  var thisLayer=ib2f.display.layer[name];
  thisLayer.delete=function(){
    this.parentNode.deleteChild(this);
  };
  thisLayer.sprite;
  thisLayer.createSprite=function(name,css,img){
    var thisSprite,newName=this.id+":"+name;
    this.innerHTML+="<img src=\""+img+"\" id=\""+newName+"\" style=\""+css+"\"/>";
    thisSprite=querySelector("#"+newName);
    this.sprite[name]=thisSprite;
    thisSprite.delete=function(){
      this.parentNode.deleteChild(this);
    };
    thisSprite.changeXYZ=fuction(x,y,z){
      this.style.top    = y+"px";
      this.style.left   = x+"px";
      this.style.zIndex = z+"";
    };
    thisSprite.changeSize=function(w,h){
      this.style.width  = w+"px";
      this.style.height = h+"px";
    thisSprite.changeImg=function(img){
      this.src=img+"";
    };
  };
  this.changeXYZ=function(x,y,z){
    this.style.top    = y+"px";
    this.style.left   = x+"px";
    this.style.zIndex = z+"";
  };
  this.changeSize=function(w,h){
    this.style.width  = w+"px";
    this.style.height = h+"px";
  };
  this.changeBackground=function(bg){
    if(typeof bg!="string"){
      console.error("layer.changeBackground: bg is not a string!");
      return;
    }
    this.style.background=bg;
  };
};
