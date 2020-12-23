var enable = true;
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
}


$(document).ready(function() {
    showTextEffect();
});
