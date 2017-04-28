$(document).ready(function() {
    
    /*for the sticky navigation */
    $('.js--section-projects').waypoint(function(direction) {
        if (direction == "down") {
           $('nav').addClass('sticky'); 
        } else {
           $('nav').removeClass('sticky'); 
        }
    }, {
       offset: '60px;' 
    });