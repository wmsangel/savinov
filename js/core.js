$(function(){
    // fixed header
    $nav = $('header');
    $window = $(window);
    $window.scroll(function(){
      if ($window.scrollTop() > 1) {
        $('body').addClass('is-header-fixed');
      } else {
        $('body').removeClass('is-header-fixed');
      }
    });


    $('.js-goto-link').on('click', function () {
        $('body').removeClass('mobile-menu-opened')
        var currentLink = $(this).data('pageid');
        $("html, body").animate({
          scrollTop: $('#'+currentLink).offset().top
        }, 600);
      });



    // mobile menu
    $('body').on('click', '.js-mobile-menu', function(e) {
      $('body').toggleClass('is-mobile-menu-opened')
    })



    // pictures
    var menu = ['1', '2', '3', '4']
    const pictureSlider = new Swiper('.js-pictures-slide', {
      slidesPerView: 1,
      navigation: {
        nextEl: '#pictures .swiper-button-next',
        prevEl: '#pictures .swiper-button-prev',
      },
      pagination: {
        el: '#pictures .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="swiper-pagination__bullet '+className+'">' + (menu[index]) + '</span>';
        },
      }
    })



    // spec
    const specsSlider = new Swiper('.js-spec-swiper', {
      slidesPerView: 1,
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
