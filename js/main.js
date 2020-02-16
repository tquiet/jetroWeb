$(function() {
  $(".slider__inner").slick({
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="img/slider/arrows/arrow-previous.svg" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="img/slider/arrows/arrow-next.svg" alt=""></button>',
    asNavFor: ".preview__inner",
    responsive: [
      {
        breakpoint: 361,
        settings: {
        arrows: false,
        }
      },
    ]
  });
  $(".preview__inner").slick({
    slidesToShow: 6,
    speed: 1000,
    asNavFor: ".slider__inner",
    focusOnSelect: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $(".header__menu-btn").on("click", function() {
    $(".header__menu ul").slideToggle();
  });
});
