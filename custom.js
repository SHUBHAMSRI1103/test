$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(100);
	});

	// Backstretchs
	$("#header").backstretch("3.jpg");
	$("#services").backstretch("3.jpg");
	
			
    
});
