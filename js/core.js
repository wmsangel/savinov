$(function(){
    // fixed header
    AOS.init({
        once: true, // whether animation should happen only once - while scrolling down
        duration: 900, // values from 0 to 3000, with step 50ms
    });

    $nav = $('header');
    $window = $(window);
    $window.scroll(function(){
      if ($window.scrollTop() > 10) {
        $('body').addClass('is-header-fixed');
      } else {
        $('body').removeClass('is-header-fixed');
      }
    });

    if ($window.scrollTop() > 10) {
        $('body').addClass('is-header-fixed');
    } else {
        $('body').removeClass('is-header-fixed');
    }


    // map popup
    $('body').on('click', '.js-map-popup', function (e) {
        e.preventDefault();
        $('.popup-overlay, .popup').fadeIn()
    })
    $('body').on('click', '.js-popup-close', function (e) {
        e.preventDefault();
        $('.popup-overlay, .popup').fadeOut()
    })


    $('.js-goto-link').on('click', function () {
        $('body').removeClass('is-mobile-menu-opened')
        var currentLink = $(this).data('pageid');
        $("html, body").animate({
          scrollTop: $('#'+currentLink).offset().top - 120
        }, 1200);
      });



    // mobile menu
    $('body').on('click', '.js-mobile-menu', function(e) {
      $('body').toggleClass('is-mobile-menu-opened')
    })



    // pictures
    var menu = ['1', '2', '3', '4', '5']
    const pictureSlider = new Swiper('.js-pictures-slide', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '#pictures .swiper-button-next',
        prevEl: '#pictures .swiper-button-prev',
      },
      pagination: {
        el: '#pictures .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="swiper-pagination__bullet js-to-top-picture '+className+'">' + (menu[index]) + '</span>';
        },
      }
    })

    $('body').on('click', '.js-to-top-picture', function (e) {
        console.log('1')
        $("html, body").animate({
            scrollTop: $('#pictures').offset().top - 60
        }, 300);

    })



    // spec
    const specsSlider = new Swiper('.js-spec-swiper', {
      slidesPerView: 1,
        loop: true,
      navigation: {
        nextEl: '#spec .swiper-button-next',
        prevEl: '#spec .swiper-button-prev',
      },
    })



    // tab links
    $('body').on('click', '.js-tab-link', function(e) {
      e.preventDefault();
      let tabID = $(this).data('tab-id');
      
      $('.js-tab-content, .js-tab-link').removeClass('is-selected');
      $('.js-tab-content[data-tab-id="'+tabID+'"]').addClass('is-selected')
      $(this).addClass('is-selected');
    })
    
})
