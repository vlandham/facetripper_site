// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function(){
	$("#new_suggestion").live('ajax:before', function(data, status, xhr) {
		$("#new-feature-form").animate({ height: 'hide', opacity: 'hide' }, 'slow');
		$("#new-feature-thanks").animate({ height: 'show', opacity: 'show' }, 'slow');;		
	});
});

$(document).ready(function(){
	$("#new_message").live('ajax:before', function(data, status, xhr) {
		$("#contact-form").animate({ height: 'hide', opacity: 'hide' }, 'slow');
		$("#contact-thanks").animate({ height: 'show', opacity: 'show' }, 'slow');;		
	});
});

$(window).load(function() {
    $('#slider').nivoSlider({
		effect:'fade',
		pauseOnHover:false,
		controlNav:false,
		directionNav:false
	});
});
