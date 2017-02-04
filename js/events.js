$(document).ready(function() {

    var mobile = $(document).outerWidth(true) < 768 ? true : false;

    $("#event_list li").mouseenter(function(event) {
        $(".event_details h3").html(event.target.id);
    }).click(function(event) {
        if (!mobile) {
            if ($(".box_left .event_details").css("display") != "none") {
                $(".box_left").animate({
                    "padding": "0px",
                    "width": "10%"
                }, {
                    duration: 400,
                    queue: false
                });
                $(".box_middle").animate({ "width": "40%", "padding": "0px" }, { duration: 400, queue: false });
                $(".box_left .text2").css({ "transform": "rotate(-90deg)" }, { duration: 400, queue: false });
                $(".box_left .event_details").css({ "display": "none" });
            }
        } else {
            //the mobile code
            $(".box_middle").addClass("visible_side_menu");
            console.log("that wont work here bhai");
        }

    });
});