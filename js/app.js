// ----- TODO:

// name move from center to top on scroll
// link to PDF paper resume
// put project descriptions in an external JSON file and 
// use templates and jQuery clone to build the HTML

'use strict'

$(document).ready(function() {
    $('#nav-header').hide();

        $(window).on('scroll',function() {
        // window scrolled event fired
        // determine if position is past bottom of #banner

        var verticalPosition = window.pageYOffset;

        var bannerHeight = $('#banner').height();   // this is fixed in CSS

        var bannerTop = $('#banner').offset().top;

        var bannerBottom = bannerTop + bannerHeight;

        // var screenHeight = $(window).height();

        
        console.log('Scroll pos: ' + $(window).scrollTop() + ' ' + bannerTop + ' ' + bannerBottom);    

        if($(window).scrollTop() > bannerBottom) {
            console.log('past banner');
            $('#nav-header').show();
        }
        else
            $('#nav-header').hide();
        ;
    });
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
