
$(function () {

    smoothScroll.init(); 
    setTimeout(function(){
        if($('p.message_send').length > 0){
            $('p.message_send').remove();
        }
    },3000);
    $('form').on('keyup keypress', function(e) {var keyCode = e.keyCode || e.which;if (keyCode === 13) { e.preventDefault();return false;}});
	$('#owl-demo').owlCarousel({
 
        items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                600: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            },
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});

    $('.tabs__wrapper').pwstabs({
        effect: 'scale',
        defaultTab: 1,
        containerWidth: '85%',
        tabsPosition: 'horizontal',
        horizontalPosition: 'top',
        responsive: true

    });

    $(window).load(function() {
      $('#preloader').fadeOut(500);
    });


    if ( $('.portfolio__gallery_link').length > 0) {
        
        $('.portfolio__gallery_link').venobox({
            framewidth: '600px',
            frameheight: '900px',
            border: '0',
            bordercolor: '#ba7c36',
            numeratio: true,
            infinigall: true
        });
        
    };

    jQuery.datetimepicker.setLocale('ru');

    $('#datetimepicker').datetimepicker({
        format:'d.m.Y',
        timepicker:false,
        inline:false,
        lang:'ru'
    });

    if ($('#backTop').length === 1) {
        $('#backTop').backTop({
            'theme': 'custom'
        });
    } 

  });

