$(document).ready(function() {

  // Header
  var nav = $("header");

  if ($("#home").length > 0) {
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 700) {
        nav.addClass("sticky");
      } else {
        nav.removeClass("sticky");
      }
    });
  } else {
      $(window).on("scroll", function() {
        if ($(this).scrollTop() > 72) {
          nav.addClass("sticky");
        } else {
          nav.removeClass("sticky");
        }
      });
  }

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Side navigation
  function a() {
      e.toggleClass(j), d.toggleClass(i), f.toggleClass(k), g.toggleClass(l)
  }

  function b() {
      e.addClass(j), d.animate({
          left: "0px"
      }, n), f.animate({
          left: o
      }, n), g.animate({
          left: o
      }, n)
  }

  function c() {
      e.removeClass(j), d.animate({
          left: "-" + o
      }, n), f.animate({
          left: "0px"
      }, n), g.animate({
          left: "0px"
      }, n)
  }
  var d = $(".side-nav"),
      e = $("body"),
      f = $(".wrapper"),
      g = $(".push"),
      h = $(".site-overlay"),
      i = "side-nav-left side-nav-open",
      j = "side-nav-active",
      k = "container-push",
      l = "push-push",
      m = $(".menu, .side-nav a"),
      n = 200,
      o = d.width() + "px";
  if (cssTransforms3d = function() {
          var a = document.createElement("p"),
              b = !1,
              c = {
                  webkitTransform: "-webkit-transform",
                  OTransform: "-o-transform",
                  msTransform: "-ms-transform",
                  MozTransform: "-moz-transform",
                  transform: "transform"
              };
          document.body.insertBefore(a, null);
          for (var d in c) void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]));
          return document.body.removeChild(a), void 0 !== b && b.length > 0 && "none" !== b
      }()) m.click(function() {
      a()
  }), h.click(function() {
      a()
  });
  else {
      d.css({
          left: "-" + o
      }), f.css({
          "overflow-x": "hidden"
      });
      var p = !0;
      m.click(function() {
          p ? (b(), p = !1) : (c(), p = !0)
      }), h.click(function() {
          p ? (b(), p = !1) : (c(), p = !0)
      })
  }

});
