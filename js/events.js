var events = {};
$(document).ready(function() {

    initializeEvents();

});

function listenClick(){
    var mobile = $(document).outerWidth(true) < 768 ? true : false;
    
    $("#event_list li").mouseenter(function(event) {
        
        var hoverEvent = events[event.target.id];
        
        $(".event_details h3").html(hoverEvent.title);
        $(".event_date").html(hoverEvent.date);
        $("event_type").html(hoverEvent.sig);
    
    }).click(function(event) {
        var clickEvent = event.target.id;
        if(event.target.nodeName != 'LI')
            clickEvent = event.target.parentNode.id;
        var url = "data/events/"+clickEvent+".json";
        console.log(url);
        if (!mobile) {
            $(".box_left").addClass("visible_left_menu");
            $(".box_middle").addClass("visible_middle_menu");
        } else {
            $(".box_middle").addClass("visible_side_menu_mobile");
        }
        
        //Load the event details and display! 
        $.ajax({
            url: url,
            success : function(result){
                displayEventData(result);
                }
        });
    });
    $("#closebutton").click(function() {
        if (!mobile) {
            $(".box_left").removeClass("visible_left_menu");
            $(".box_middle").removeClass("visible_middle_menu");
        } else {
            $(".box_middle").removeClass("visible_side_menu_mobile");
        }
    });
}
function initializeEvents() {
    var htmlString = '';
    var i = 1;

    //Load the data
    $.ajax({
        url: "data/events.json",
        success: function(result) {
            events = result;
            for (myEvent in events) {
                //console.log(events[myEvent].title);
                htmlString += "<li id='" + myEvent + "'><span class='num'>0" + i++ + " </span>";
                htmlString += "<span class='name'>" + events[myEvent].title + "</span></li>";
                $("#event_list").html(htmlString);
                listenClick();
            }
        }
    });
}
function displayEventData(result){
    var htmlString = '';
    $(".event_title").html(result.title);
    $(".event_sub_title").html(result.sig);
    $(".event_desc_p").html(result.description);
    if(result.links.length > 0){
        htmlString += "<h3>More info:</h3><ul>";
        for(var i = 0; i< result.links.length; i++)
            htmlString += "<li><a target='_blank' href='"+result.links[i].url+"'>"+result.links[i].title+"</a></li>"
        $(".box_right .more").html(htmlString);
    }
}