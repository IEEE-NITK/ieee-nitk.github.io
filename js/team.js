$(document).ready(function() {
    var members = {};
    members.core = [];
    members.exec = [];
    loadAndRenderContacts(members);
    $(".search_input").bind('input', function() {

        search($(this).val(), members);

    });
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {});
});

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function loadAndRenderContacts(members) {
    $.ajax({
        url: "data/team.json",
        success: function(result) {
            members.core = result.core;
            members.exec = result.members;
            renderList(members);
            //search('chin', members);
        }
    });
}

function renderList(arr) {

    for (var i = 0; i < arr.core.length; i++) {
        var htmlStr = $(".core .members").html();
        htmlStr += '<div class="member_item member_core" id = "core' + i + '"><div class="img_section"><img src="res/img/profile.jpg" alt=""></div><div class="data_section"><h3>';
        htmlStr += arr.core[i].name + "</h3>";
        htmlStr += "<h4>" + arr.core[i].position + "</h4>"
        $(".core .members").html(htmlStr);
    }
    htmlStr = '';
    for (var i = 0; i < arr.exec.length; i++) {
        htmlStr += '<div class="member_item member_exec" id = "exec' + i + '">' + toTitleCase(arr.exec[i].name) + '</div>';
    }
    $(".exec .members").html(htmlStr);

    // Event Listeners

    $(".member_item").click(function(element) {
        var id = element.currentTarget.id.slice(4);

        if (element.target.id.slice(0, 4) == "exec")
            member = arr.exec[id];
        else
            member = arr.core[id];

        displayOverlay(member);


    });
}

function displayOverlay(member) {
    $(".overLay #member_name").html(member.name);
    $(".overLay #member_interests").html(member.interests);
    $(".overLay #member_mail").html(member.email);

    if (member.hasOwnProperty("position") && member.position != '')
        $(".overLay #position").html(member.position);
    else
        $(".overLay #position").html('');

    var links = '';

    if (member.hasOwnProperty("github") && member.github != '')
        links = "<a href='" + member.github + "'>GitHub</a> ";
    if (member.hasOwnProperty("linkedin") && member.linkedin != '')
        links += "<a href='" + member.linkedin + "'>LinkedIn</a>";
    $(".overLay #links").html(links);
    $(".overLay").addClass("visible");
}

function search(str, members) {
    var re = new RegExp(str, 'gi');
    var result = {};
    result.core = [];
    result.exec = [];
    if (str == '')
        result = members;
    else {
        result.core = members.core.filter(function(member) {
            return member.name.match(re);
        });
        result.exec = members.exec.filter(function(member) {
            return member.name.match(re);
        });
    }
    renderList(result);
}
