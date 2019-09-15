


// Function Activation
$(document).ready(function(){
     meaginficPopUpfunction();
    new WOW().init();
    GalleryFunction();
    OwlCarouselFunction();
    SlickMobileMenuFunction();
    isotop();
   

  

});



// Gallery Function
function GalleryFunction(){
    $('a[data-imagelightbox="imageligtbox"]').imageLightbox({
        activity: true,
        arrows: true,
        button: true,
        caption: true,
        navigation: true,
        overlay: true,
        quitOnDocClick: false,
        selector: 'a[data-imagelightbox="f"]'
    });
}



// Owl Carousel Function
function OwlCarouselFunction(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items:1
    });
}



// Slick Mobile Menu Function
function SlickMobileMenuFunction(){
    $('#main-menu').slicknav({
        label: '',
        duration: 500,
        prependTo:'#mobile-menu'
    });
}



// isotop
function isotop() {
    $("#filters li").on('click', function() {
        var selector = $(this).attr('data-filter');
        $('#grid').isotope({
            filter: selector
        })
    })

    ("#grid").isotope();
}








// meaginficPopUp
function meaginficPopUpfunction() {
    $('.video-play').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>', 
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',

                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }



            },

            srcAction: 'iframe_src',
        }

    });
}