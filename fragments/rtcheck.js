// ib2f/rtcheck - Checks operating system, browser, and JavaScript runtime information
//Copyright (C)2017 Intense Battle 2
//This file was designed to be included with base.js
/*
 * Add GNU GPL text here
*/
var ib2f={config:{runtime:{os:null}}};
window.onload=function(){
	var platform=window.navigator.platform,userAgent=window.navigator.userAgent,os=ib2f.config.runtime.os;
	if(/Android/.test(userAgent)){os="Android";alert("Android");alert(os);
	}else if(!os && /Linux/.test(platform)){os="Linux";alert("Linux");alert(os);
	}else if(!os && /ChrOS/.test(platform)){os="ChromeOS";alert("ChromeOS");alert(os);
	}else if(!os && /2Term/.test(platform)){os="2Term/IB2OS";alert("2Term/IB2OS");alert(os);
	}else{os=platform;alert("platform");alert(os);
	}
};