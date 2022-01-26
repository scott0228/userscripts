// ==UserScript==
// @name         屏蔽 infoq.cn 廣告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.infoq.cn/*
// @match        *://*.infoq.cn/*
// @icon         https://static001.geekbang.org/static/infoq/www/img/logo.3bdee6e4.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
         document.getElementsByClassName('live-fixed-bar').forEach(item => item.remove());

         document.getElementsByClassName('header-notice').forEach(item => item.remove());
         document.getElementsByClassName('geo-banner').forEach(item => item.remove());
    }, 2000);


    setTimeout(function(){
       document.getElementsByClassName('widget-slide-weekly').forEach(item => item.remove());
    }, 4000);

       setTimeout(function(){
         document.getElementsByClassName('live-fixed-bar').forEach(item => item.remove());
    }, 10000);

    // Your code here...
})();
