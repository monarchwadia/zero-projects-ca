!function(n){"use strict";n.fn.menumaker=function(s){var e=n(this),a=n.extend({format:"dropdown",sticky:!1},s);return this.each(function(){n(this).find(".navbar-toggler").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.slideToggle().removeClass("open"):(s.slideToggle().addClass("open"),"dropdown"===a.format&&s.find("ul").show())}),e.find(".navbar-nav li ul").parent().addClass("has-sub");var s=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?(n(this).siblings("ul").removeClass("open").slideToggle(),n(this).parent("li").removeClass("active")):(n(this).siblings("ul").addClass("open").slideToggle(),n(this).parent("li").addClass("active"))})};"multitoggle"===a.format?s():e.addClass("dropdown"),!0===a.sticky&&e.css("position","fixed");var t=function(){n(window).width()>991&&e.find("ul").show()};return t(),n(window).on("resize",t)})},n(document).on("ready",function(){n("nav").menumaker({format:"multitoggle"});var s=window.location.pathname.split("/"),e=window.location.pathname;e=s[s.length-1].length>0?s[s.length-1]:s[s.length-2],n(".navbar-nav li").find('a[href="'+e+'"]').closest("li").addClass("active").parents().eq(1).addClass("current"),n(".navbar-nav li").find('a[href="'+e+'"]').closest("li").addClass("active").parents().eq(3).addClass("current")}),n(".navbar-default .attr-nav").each(function(){n("li.search > a",this).on("click",function(s){s.preventDefault(),n(".top-search").slideToggle()})}),n(".input-group-addon.close-search").on("click",function(){n(".top-search").slideUp()})}(jQuery);