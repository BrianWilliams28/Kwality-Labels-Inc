jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------


 $(window).scroll(function() {
      if ($(window).width() > 768) {
           if ($(".navbar").offset().top > 50) {
               $(".navbar-fixed-top").addClass("shrink-nav");
               $(".navbar-brand img").addClass("shrink-logo");
           } else {
              $(".navbar-fixed-top").removeClass("shrink-nav");
              $(".navbar-brand img").removeClass("shrink-logo");
           }
       }
   });

  // -------------------------------------------------------------
  // mobile menu li border
  // -------------------------------------------------------------

    // -------------------------------------------------------------
    // mobile menu
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').ucOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'uc-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-along',             // class name
        closeButton    : '#uc-mobile-menu-close-btn',
        menuWrapper    : '.uc-mobile-menu',                 // class name below-pusher
        documentPusher : '.uc-mobile-menu-pusher'
        });
    }());




    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function () {

        $('[data-toggle="tooltip"]').tooltip();

    }());




    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());


    // -------------------------------------------------------------
    // testimonialSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        });

        // Navigation
        $('.prev').on('click', function(){
            $('.testimonialSlider').flexslider('prev');
            return false;
        });

        $('.next').on('click', function(){
            $('.testimonialSlider').flexslider('next');
            return false;
        });
    }());
    // -------------------------------------------------------------
    // google map
    // -------------------------------------------------------------


}); // JQuery end

function initMap() {

    var kwality = {lat: 43.8983689, lng: -79.42827940000001};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: kwality
    });

var marker = new google.maps.Marker({
      position: kwality,
      map: map
    });
  }


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})
