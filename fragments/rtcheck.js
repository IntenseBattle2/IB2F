// ib2f/rtcheck - Checks operating system, browser, and JavaScript runtime information
//Copyright (C)2017 Intense Battle 2
//This file was designed to be included with base.js
/*
 * Add GNU GPL text here
*/
window.onload=function(){var platform=window.navigator.platform,os=ib2f.config.runtime.os;if(/Android/.test(userAgent)){os="Android";}else if(!os && /Linux/.test(platform)){os="Linux";}else if(!os && /ChrOS/.test(platform)){os="ChromeOS";}else if(!os && /2Term/.test(platform)){os="2Term/IB2OS";}else{os=window.navigator.platform;}}
