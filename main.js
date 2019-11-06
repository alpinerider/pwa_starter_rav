window.onload = () => {
	'use strict';
	
	if ('serviveWorker' in navigator) {
		navigator.serviceWorker.register('sw.js');
	}
};