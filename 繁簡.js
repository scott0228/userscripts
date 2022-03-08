// ==UserScript==
// @name         簡繁轉換
// @namespace    https://scott0228.blogspot.com/
// @version      0.6
// @description  簡體直接轉繁體啦
// @author       Scott Yang
// @include      *.*
// @exclude      http://*.tw/*
// @exclude      https://*.tw/*
// @require      https://cdn.jsdelivr.net/npm/opencc-js@1.0.3/data.min.js
// @require      https://cdn.jsdelivr.net/npm/opencc-js@1.0.3/data.cn2t.min.js
// @require      https://cdn.jsdelivr.net/npm/opencc-js@1.0.3/data.t2cn.min.js
// @require      https://cdn.jsdelivr.net/npm/opencc-js@1.0.3/bundle-browser.min.js
// @require      https://cdn.jsdelivr.net/npm/pangu@4.0.7/dist/browser/pangu.min.js
// 0.5 增加用詞轉換
// 0.6 改用 opencc 及 pangu 加空白，並減少不必要的轉換
// ==/UserScript==

const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });

function convert_trad(node){
	var treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
	var textNode;
	while (textNode = treeWalker.nextNode()) {
		// console.log(textNode.nodeValue)
        if ('STYLE' != textNode.parentNode.nodeName &&
            'SCRIPT' != textNode.parentNode.nodeName &&
            'BODY' != textNode.parentNode.nodeName &&
            'HEAD' != textNode.parentNode.nodeName) {
            var result = converter(textNode.nodeValue);
            if (result != textNode.nodeValue) {
                textNode.nodeValue = result;
            }
        }
	}
}

(function() {
	'use strict';
	convert_trad(document);

    pangu.autoSpacingPage();
    document.addEventListener('DOMContentLoaded', () => {
        // listen to any DOM change and automatically perform spacing via MutationObserver()
        pangu.autoSpacingPage();
    });

	const callback = (mutationsList) => {
		mutationsList.forEach(mutation => {
			if (mutation.type == 'childList' && mutation.addedNodes.length > 0) {
				Array.from(mutation.addedNodes).find((node) => {
					convert_trad(node)
				})
			}
		});
	}
	const observer = new MutationObserver(callback)
	observer.observe(window.document.body,{childList:true,subtree:true})

})();