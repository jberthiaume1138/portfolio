'use strict'

$(document).ready(function() {
    $('#nav-header').hide();

    $(window).on('scroll',function() {
        // window scrolled fired determine if position is past bottom of #banner

        var bannerHeight = $('#banner').height();   // this is fixed in CSS
        var bannerTop = $('#banner').offset().top;

        var bannerBottom = bannerTop + bannerHeight;

        if($(window).scrollTop() > bannerBottom) {
            $('#nav-header').show();
        }
        else {
            $('#nav-header').hide();
        }
    });
    
    cheeseburger();
});

var cheeseburger = function() {
    var n = 'joenyc23';
    var d = 'gmail';
    var t = '.com';
    var l = 'mailto:' + n + '@' + d + t;
    $('.hide-email').attr('href',l);
};

//smooth scroll
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });


//smooth scroll and updates the URL
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 50
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});
