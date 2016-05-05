'use strict'

$(document).ready(function() {

	

});

//smooth scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// // smooth scroll with cache
// var $root = $('html, body');
// $('a').click(function() {
//     $root.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });

// smooth scroll and updates the URL
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