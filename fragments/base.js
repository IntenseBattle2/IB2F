// IB2F/base - base configuration for IB2F
//Copyright (C)2017 Intense Battle 2
//This file won't work on it's own -- please include the other files before trying to run!
/*
 * Insert GNU GPL text here
*/
var ib2f={};
ib2f.config = {
  "runtime": {
    "os":                null,
    "browser":           null,
    "javascriptVersion": null
  },
  "defaultLayerCSS": "top:0px;left:0px;width:100%;height:100%;position:absoulte;display:none;z-index:"+(ib2f.layers.length+1)+";"
};
window.onload = function(){
  var platform = window.navigator.platform,
      os       = ["Win32","Win64","WinCE","Windows","Mac68K","MacPPC","MacIntel","Macintosh","iPhone","iPad","iPod"];
  //finish later
