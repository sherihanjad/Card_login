/*global $, center, relaive*/
$(document).ready(function () {
    'use strict';
    $("div").animate({
        marginTop: '100px'
    }, 2000);
    
    $("div").animate({
        width: '500px'
    }, 2000);
    
    $("div").animate({
        height: '300px'
    }, 2000, function () {$("h2").fadeIn(2000, function () {
        $("div").animate({
            borderRadius: '20px'
        }, 500, function () { $(".one").slideDown(2000); $("p").fadeIn(2200); $(".tow").fadeIn(3000); });
    });
        });

});
    
