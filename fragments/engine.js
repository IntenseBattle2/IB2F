// IB2F/engine.js - extra code runner
// Copyright (C)2017 Intense Battle 2
// This file was designed to be included with base.js
/*
 * Add GNU GPL text here
*/
ib2f.engine={};
ib2f.engine.add=function(jsurl){
  window.location="javascript:(function(){var el=document.createElement("script");el.src=jsurl;document.body.appendChild(el);})();";
};
ib2f.engine.init(name){
  ib2f.engine[name].init(false,null);
};
ib2f.engine.load(names){
  if(typeof names!="array"){
    console.error("engine.load: Name list must be type array, even if only one name used");
    return;
  }
  /*
   * include load.js
  */
  for(var i in names){
    if(typeof names[i]!="string"){
      console.error("engine.load: Item "+i+" in names is not string. ("+typeof names[i]+" | "+names[i]+")");
      return;
    }
    ib2f.engine[names[i]].init(true,iframe[i]);
  }
};
