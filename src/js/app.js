// add this some vendor js scripts for this page (use gulp-rigger syntax)
//= '../../bower_components/jquery/dist/jquery.js'
//= '../../bower_components/bootstrap/js/modal.js'
//= '../../bower_components/bootstrap/js/dropdown.js'

$(document).ready(function() {

	"use strict";

	var app = {};
	window.app = app;

	app.mainInit = function(){
		app.mainMenu();
	};

	app.mainMenu = function() {
		var trigger = document.querySelector('.js-menu-burger');
		var menu = document.querySelector('.js-menu');

		trigger.addEventListener('click',function() {
			menu.classList.toggle('menu--open');
		});
	}

	app.mainInit();

});