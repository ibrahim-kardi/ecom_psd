(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".client-testimonial-carousel").owlCarousel({

        	item:3,
        	margin:30,
        	nav:false,
        	dots:true,
        	loop:true
        });


        $(".product-list").masonry();
        // $(".homepage-slides").owlCarousel({

        //     items:1,
        //     loop:true,
        //     autoplay:false,
        //     dots:false,
        //     nav:true,
        //     navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        // });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	