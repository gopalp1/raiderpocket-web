(function ($) {
  "use strict";

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(".loop").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: {
      1200: {
        items: 5,
      },
      992: {
        items: 3,
      },
      760: {
        items: 2,
      },
    },
  });

  $(function () {
    // Calling Login Form
    $("#login_form").click(function () {
      $(".social_login").hide();
      $(".user_login").show();
      return false;
    });

    // Calling Register Form
    $("#register_form").click(function () {
      $(".social_login").hide();
      $(".user_register").show();
      $(".header_title").text("Register");
      return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function () {
      $(".user_login").hide();
      $(".user_register").hide();
      $(".social_login").show();
      $(".header_title").text("Login");
      return false;
    });
  });
  // Ensure the .menu-trigger is visible when the window width is less than 991px
  $(document).ready(function () {
    function toggleMenuTrigger() {
      var width = $(window).width();
      if (width < 991) {
        $(".menu-trigger").css("display", "block");
      } else {
        $(".menu-trigger").css("display", "none");
        // Ensure the menu is reset when the screen is resized back to larger width
        $(".header-area .nav").css("display", "block");
        $(".menu-trigger").removeClass("active");
      }
    }

    // Initial trigger visibility check
    toggleMenuTrigger();

    // Adjust visibility on window resize
    $(window).resize(function () {
      toggleMenuTrigger();
    });

    // Menu Dropdown Toggle
    if ($(".menu-trigger").length) {
      $(".menu-trigger").on("click", function () {
        $(this).toggleClass("active");
        $(".header-area .nav").slideToggle(200);
      });
    }

    // Menu elevator animation for smooth scrolling
    $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on(
      "click",
      function () {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            var width = $(window).width();
            if (width < 991) {
              $(".menu-trigger").removeClass("active");
              $(".header-area .nav").slideUp(200);
            }
            $("html, body").animate(
              {
                scrollTop: target.offset().top + 1,
              },
              700
            );
            return false;
          }
        }
      }
    );
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".scroll-to-section a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top + 1,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      // Check if refElement is valid
      if (refElement.length) {
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $(".nav ul li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      }
    });
  }

  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
})(window.jQuery);
