
$(document).ready(function() {
    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        closeOnContentClick: true,
        gallery:{
            enabled:true
        },
      image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
                duration: 800 
            }
        },
        fullscreen: {
            enable: true
        }
    });
});

