// ----- TODO:
// fix nav bar lock to top

// name move from center to top on scroll
// link to PDF paper resume
// put project descriptions in an external JSON file and 
// use templates and jQuery clone to build the HTML

'use strict'

$(document).ready(function() {
	// $(window).resize(function() {
	// 	var windowHeight = $(document).height();
	// 	$('#main').css({'height': windowHeight});
	// });
});

$('#banner').on('scroll',function(){
    console.log('scrolled');
});

// //smooth scroll
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });

// // smooth scroll with cache
// var $root = $('html, body');
// $('a').click(function() {
//     $root.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });

//smooth scroll and updates the URL
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});

// //smooth scroll and updates the URL
// var $root = $('html, body');
// $('a').click(function() {
//     var href = $.attr(this, 'href');
//     $root.animate({
//         scrollTop: $(href).offset().top
//     }, 500, function () {
//         window.location.hash = href;
//     });
//     return false;
// });
