


!(function () {
    "use strict";
    var page_offset
    $(function () {
        var deviceAgent = navigator.userAgent.toLowerCase();

        if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
            $('.iparallax').removeClass('parallax');
        }

        page_offset = window.pageYOffset
        window.onscroll = function () {
            var t = window.pageYOffset;
            (document.getElementById("navbar").style.top = page_offset > t ? "0" : "-480px"), (page_offset = t);
        }
        let loader = $(".loader"),
            window_height = $(window).height(),
            window_width = $(window).width()

        if (!!loader) {
            loader.css({
                top: window_height / 2 - 2.5,
                left: window_width / 2 - 200
            })

            loader.animate({ left: 0, width: "100%" }),
                loader.animate({ top: "0", height: "100vh" }),
                setTimeout(() => {
                    $(".loader-wrapper").fadeOut("fast")
                    loader.fadeOut("fast")
                }, 900)
        }


        $(".video_home").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })

        $(window).on("scroll", function () {
            $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd");
        })

        $("#ht-wavify_white").length && $("#ht-wavify_white").wavify({
            height: 100,
            bones: 3,
            amplitude: 50,
            color: "#f8f9fa",
            speed: 0.25
        })
        $(window).on("scroll", function () {
            $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut();
        })
        $(".back_top").on("click", function () {
            return $("html, body").animate({ scrollTop: 0 }, 1e3), !1;
        })
    })
})(jQuery);


