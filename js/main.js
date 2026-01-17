(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  if ($.fn.counterUp) {
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000,
    });
  }

  // Date and time picker
  if ($.fn.datetimepicker) {
    $(".date").datetimepicker({
      format: "L",
    });
    $(".time").datetimepicker({
      format: "LT",
    });
  }

  // Header carousel
  if ($.fn.owlCarousel) {
    $(".header-carousel").owlCarousel({
      autoplay: true, // Ubah ke true jika ingin otomatis berjalan
      animateOut: "fadeOutLeft",
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true, // Aktifkan autoplay
      smartSpeed: 1000,
      center: true,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
      },
    });
  }

  // Dropdown Submenu Handler (hanya menggunakan jQuery)
  $(".dropdown-submenu .dropdown-toggle").click(function (e) {
    let $submenu = $(this).next(".dropdown-menu");

    if ($submenu.length) {
      e.preventDefault();
      $(".dropdown-submenu .dropdown-menu")
        .not($submenu)
        .removeClass("show")
        .hide(); // Tutup yang lain
      $submenu.toggleClass("show").toggle(); // Tampilkan yang diklik
    }
  });

  // Tutup dropdown saat klik di luar
  $(document).click(function (e) {
    if (!$(e.target).closest(".dropdown-submenu").length) {
      $(".dropdown-submenu .dropdown-menu").removeClass("show").hide();
    }
  });
})(jQuery);
