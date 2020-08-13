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
            members.alumni = result.alumni;
            renderList(members);
        }
    });
}

function renderList(arr) {

    for (var i = 0; i < arr.core.length; i++) {
        var htmlStr = $(".core .members").html();
        htmlStr += '<div class="member_item member_core" id = "core' + i + '"><div class="data_section"><h3>';
        htmlStr += arr.core[i].name + "</h3>";
        htmlStr += "<h4>" + arr.core[i].position + "</h4>"
        $(".core .members").html(htmlStr);
    }
    htmlStr = '';
    for (var i = 0; i < arr.exec.length; i++) {
        htmlStr += '<div class="member_item member_exec" id = "exec' + i + '">' + toTitleCase(arr.exec[i].name) + '</div>';
    }
    $(".exec .members").html(htmlStr);

    htmlStr = '';
    for (var i = 0; i < arr.alumni.length; i++) {
        htmlStr += '<div class="member_item member_alum" id = "alum' + i + '">' + toTitleCase(arr.alumni[i].name) + '</div>';
    }
    $(".alum .members").html(htmlStr);

}

function displayOverlay(member) {
    var email_link = "<a href='"+member.email+"' target='_blank'>email</a>";
    $(".overLay #member_name").html(member.name);
    $(".overLay #member_interests").html(member.interests);

    $(".overLay #member_mail").html(email_link);

    if (member.hasOwnProperty("position") && member.position != '')
        $(".overLay #position").html(member.position);
    else
        $(".overLay #position").html('');

    var links = '';

    if (member.hasOwnProperty("github") && member.github != '')
        links = "<a href='" + member.github + " 'target='_blank'>GitHub</a> ";
    if (member.hasOwnProperty("linkedin") && member.linkedin != '')
        links += "<a href='" + member.linkedin + " 'target='_blank'>LinkedIn</a>";
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
