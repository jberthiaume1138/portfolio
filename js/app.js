'use strict'

$(document).ready(function() {

	

});

document.getElementById('linkProjects').addEventListener('click', function() {
	var divPosition = $('#projects').offset();

	$('html, body').animate({scrollTop: divPosition.top}, "slow");
});
