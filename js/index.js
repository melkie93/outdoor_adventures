
$(document).ready(function() {
"use strict";
  let active1 = false;
  let active2 = false;
  let active3 = false;
  let active4 = false;

    $('.nav_container').on('mousedown touchstart', function() {

    if (!active1) $(this).find('.circle_home').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
    else $(this).find('.circle_home').css({'background-color': 'dimGray', 'transform': 'none'});
     if (!active2) $(this).find('.circle_contact').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
    else $(this).find('.circle_contact').css({'background-color': 'darkGray', 'transform': 'none'});
      if (!active3) $(this).find('.circle_gallery').css({'background-color': 'gray', 'transform': 'translate(105px,60px)'});
    else $(this).find('.circle_gallery').css({'background-color': 'silver', 'transform': 'none'});
      if (!active4) $(this).find('.circle_cat').css({'background-color': 'gray', 'transform': 'translate(110px,-25px)'});
    else $(this).find('.circle_cat').css({'background-color': 'silver', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active3 = !active4;

    });
});
