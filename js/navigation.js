/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */
(function(){
	"use strict";

	var animenuToggle = document.querySelector('.menu-toggle'),
		animenuNav    = document.querySelector('.menu'),
		hasClass = function( elem, className ) {
			return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
		},
		toggleClass = function( elem, className ) {
			var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
			if( hasClass(elem, className ) ) {
				while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
					newClass = newClass.replace( ' ' + className + ' ' , ' ' );
				}
				elem.className = newClass.replace( /^\s+|\s+$/g, '' );
			} else {
				elem.className += ' ' + className;
			}
		},
		animenuToggleNav =  function (){
			toggleClass(animenuToggle, "menu-toggle--active");
			toggleClass(animenuNav, "primary-nav--open");
		};

	if (!animenuToggle.addEventListener) {
		animenuToggle.attachEvent("onclick", animenuToggleNav);
	}
	else {
		animenuToggle.addEventListener('click', animenuToggleNav);
	}
})();
