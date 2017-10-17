// IB2F/Load
// Copyright (C)2017 Intense Battle 2
// This file was designed to be included with base.js
/*
 * include GNU GPL text here
*/
ib2f.display.createLayer("load");
document.querySelector("#load").innerHTML+=ib2f.config.load.html;
setTimeout(ib2f.config.load.loadAnim(),10);
load();
ib2f.config.load.loadComplete();
ib2f.config.load.startGame.onclick=main();
