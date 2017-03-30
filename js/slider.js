function showTextEffect() {
    var index = 0,
        pos = 0;
    phraseShow = function() {
        var phrases = ["LEARN", "TEACH", "CREATE"];

        $("#text_effect").html('');
        pos = 0;
        for (pos = 0; pos < phrases[index].length; pos++) {
            $("<span/>", {
                "class": "effect_char",
                "style": "animation-delay:" + pos * 0.2 + "s",
                "html": phrases[index].charAt(pos)
            }).appendTo("#text_effect");
        }
        index++;
        index = index % 3;
    }

    phraseShow();
    setInterval(phraseShow, 3000);

    var mobile = $(document).outerWidth(true) < 768 ? true : false;
    if (mobile) {

        //The cool button!!

        $(".parent").click(function() {
            $(".nav-icon").toggleClass("active");
            if ($(".nav-icon").hasClass("active"))
                $(".popup_menu").slideDown();
            else
                $(".popup_menu").slideUp();

        });
        $("#menu li").click(function() {
            $(".popup_menu").slideUp();
            $(".nav-icon").removeClass("active");
        });
        $(".parent").mouseenter(function() {
            $(".nav-icon").addClass("hover");
        });
        $(".parent").mouseleave(function() {
            $(".nav-icon").removeClass("hover");
        });

    }
}


$(document).ready(function() {
    showTextEffect();

    //The fullpage initialisation

    $("#fullpage").fullpage({
        anchors: ['landing', 'about', 'sigs', 'events', 'team', 'projects', 'lastpage'],
        menu: "#menu",
        afterLoad: function(anchorLink, index) {
            $(".section:nth-of-type(" + index + ") .fly_up").animate({
                top: "0px",
                opacity: "1"
            }, 1000);
            $(".section:nth-of-type(" + index + ") .fly_up_fast").animate({
                top: "0px",
                opacity: "1"
            }, 600, function() {
                $(".section:nth-of-type(" + index + ") .fadein").fadeIn();
            });
        },
        onLeave: function(index, nextIndex) {
            if (index == 6 && nextIndex == 7)
                $('.icon').addClass('icon_show');
            else
                $('.icon').removeClass('icon_show');
        }
    });
});
