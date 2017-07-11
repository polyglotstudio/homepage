(function ($) {
     
"use strict"; 
    
 /* ---------------------------------------------
 Preloader
 --------------------------------------------- */
    $(window).load(function(){
            $('.cs-loader').fadeOut(1000);
            
            
    });
 /* ---------------------------------------------
 Navigation Menu
 --------------------------------------------- */

//// Navigation/////
        jQuery(document).ready(function () {
            jQuery("#menuzord").menuzord({
                align: "right",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
        });
        //mega meu
        jQuery("#xplus-menu, #xplus-menu-alt").menuzord({
            indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
            indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
        });

    //sticky nav
        var navBottom = $(".nav-bottom").offset();

        $(window).on('scroll', function () {
            var w = $(window).width();
            if ($(".nav-bottom").length == 0) {
                if (w > 768) {
                    if ($(this).scrollTop() > 50) {
                        $('header').addClass("sticky");
                    }
                    else {
                        $('header').removeClass("sticky");
                    }
                }
            } else {
                if (w > 768) {
                    if ($(this).scrollTop() > navBottom.top + 100) {
                        $('header').addClass("sticky");
                    }
                    else {
                        $('header').removeClass("sticky");
                    }
                }
            }
        });
    
    // jQuery smooth scroll
    $('.menuzord-menu > li > a, .scroll_down a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '80';
        $('.header').outerHeight();
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();          
    });
    
    
 /* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */

//venobox
// $('.veno').venobox({
//     numeratio: true,
//     infinigall:true,
//     titleattr:'data-title',
// });

    

 /* ---------------------------------------------
 counterUp
 --------------------------------------------- */
// $(".skill_countdown").counterUp({
//     delay: 10,
//     time: 700,
// });
 
// $('.counts').counterUp({
//     time: 1400,
// });
     
 
    
 /* ---------------------------------------------
 video player
//  --------------------------------------------- */
// jQuery(".video-autoplay-true").YouTubePopUp();
// jQuery(".video-autoplay-false").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay

// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-36251023-1']);
// _gaq.push(['_setDomainName', 'jqueryscript.net']);
// _gaq.push(['_trackPageview']);

    
    
 /* ---------------------------------------------
 scroll up
 --------------------------------------------- */

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll_top_up').fadeIn();
    } else {
        $('.scroll_top_up').fadeOut();
    }
});
  
$('.scroll_top_up').fadeOut();   
    
    
//Click event to scroll to top
$('.scroll_top_up').on('click',function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});
    

    
 /* ---------------------------------------------
 Team toggle
 --------------------------------------------- */
$('.team_icon ').on('click',function(){
    $(this).siblings('.member_toggle').css({
        'left': '0px',
        'opacity': '1'
    });
    $(this).siblings('.team-close-icon').css({
        'left': '95%',
        'opacity': '1'
    });
});
$('.team-close-icon').on('click',function(){
    $(this).siblings('.member_toggle').css({
        'left': '-100%',
        'opacity': '0'
    });
    $(this).css({
        'left': '-100%',
        'opacity': '0'
    });
}); 
    
    

 /* ---------------------------------------------
 Testimonial Carousel sliders
 --------------------------------------------- */

//single column testimonial (creative, construction and seo)
// var testimonial_details = $('.testimonial_content');
// testimonial_details.owlCarousel({
//     items:1,
//     loop: true,
//     margin: 20,
//     autoplay: true,
//     dots: true,
//     dotsSpeed: 1500,
//     smartSpeed: 1500,
//     autoplayTimeout: 4000,
    
// });
    
//3 columns boxed testimonial (startup, finance, agency, onepage agency portfolio)
// $('.testimonial_startup, .testimonial_content_finance, .client_testimonial_3column').owlCarousel({
//     loop:true,    
//     autoplay: true,
//     smartSpeed: 1000,
//     autoplayTimeout: 4000,
    
//      responsive:{
//         0:{
//             items:1,
//         },
//         480:{
//             items:1,
//         },
//         501:{
//             items:2,
//         },
       
//         767:{
//             items:2,
//         },
//         992:{
//             items:3,
//         },
//          1201:{
//             items:3,
//         } 
//     }
    
// });
    
    
// Blog Testimonial
//     $('.blog_client_testimonial').owlCarousel({
//     items:1,
//     loop: true,
//     margin: 20,
   
// });
    
    

 /* ---------------------------------------------
 Our Client/ Sponsor Carousel sliders 
 --------------------------------------------- */

//clients slider (autoplay-true)
// $('.client_image').owlCarousel({      
//     loop: true,
//     autoplay: true,
//     smartSpeed: 1800,
//     autoplayTimeout: 1500,
//     responsive:{
//         0:{
//             items:2,
//         },
//         480:{
//             items:3,
//             margin: 100
//         },
//         501:{
//             items:3,
//              margin: 50
//         },
//         767:{
//              margin: 70
//         },
//         768:{
//             items:5,
//              margin: 80,
//         },
//         992:{
//             items:5,
//             margin: 120,
//         },
//         1201:{
//             items:5,
//             margin: 170,
//         } 
//     }
// });
    

//clients slider (Autoplay-false)
// $('.client_img, autoplay-false').owlCarousel({      
//     loop: true,
//     autoplay: false,
//     smartSpeed: 1200,
//     autoplayTimeout: 200,
//     responsive:{
//         0:{
//             items:2,
//         },
//         480:{
//             items:3,
//             margin: 100
//         },
//         501:{
//             items:3,
//              margin: 50
//         },
//         767:{
//              margin: 70
//         },
//         768:{
//             items:5,
//              margin: 80,
//         },
//         992:{
//             items:5,
//             margin: 120,
//         },
//         1201:{
//             items:5,
//             margin: 170,
//         } 
//     }
// });
    
    
//Clients slider with pagination
// $('.client_image_construction').owlCarousel({   
//     loop: true,
//     autoplay: false,
//     smartSpeed: 1000,
//     nav:true,  
//     navText:['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
    
//     responsive:{
//         0:{
//             items:2,
//             margin: 40,
//         },
//         480:{
//             items:3,
//             margin: 20
//         },
//         501:{
//             items:3,
//              margin: 20
//         },
//         767:{
//             items:5,
//              margin: 100
//         },
//         992:{
//             items:5,
//             margin: 50,
//         },
//         1201:{
//             items:5,
//             margin: 100,
//         } 
//     }
// });
    
    
    
 /* ---------------------------------------------
 blog Carousel sliders 
 --------------------------------------------- */
    
// Blog Slider    
// $('.blog_slid').owlCarousel({     
//     loop: true,
//     autoplay: false,
//     dots: true,
//     margin:22,
//     responsive: {
//         0: {
//             items: 1,
//             margin:0,
//         },
//        480: {
//             items: 2,
//            margin:0,
//         },
//          501: {
//             items: 2,
//              margin:0,
//         },
//        767: {
//             items: 2,
//         },
//        992: {
//             items: 2,
//         }
//     }
// });     
     
    
// bolg slider creative-home    
// $('.blog_slid_creative').owlCarousel({     
//     loop: true,
//     autoplay: false,
//     dots: true,
//     responsive: {
//         0: {
//             items: 1,
//             margin:0,
//         },
//        480: {
//             items: 1,
//            margin:0,
//         },
//          501: {
//             items: 1,
//              margin:0,
//         },
//        767: {
//             items: 1,
//         },
//        768: {
//             items: 2,
//            margin:22,
//         },
//        992: {
//             margin:22,
//             item:3,
//         },
//         1201:{
//             margin:22,
//             item:3,
//         }
//     }
// });
 
    
    
 /* ---------------------------------------------
 CTA, Image Carousel sliders 
 --------------------------------------------- */
    
//agency why choose us slider
// $('.choose_content').owlCarousel({
//     items:1,
//     margin:20,
//     loop:true,
//     nav:false,          
// });
    
//startup-index cta slider
// $('.slider_images_left').owlCarousel({
//     items:1,
//     loop: true,
//     autoplay: true,
//     smartSpeed: 1000,
//     autoplayTimeout: 2000,
// });
    
    
    
})(jQuery);
