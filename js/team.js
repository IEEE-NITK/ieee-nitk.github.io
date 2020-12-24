$(document).ready(function() {
    var members = {};
    members.core = [];
    members.exec = [];
    members.alumni = [];
    loadAndRenderContacts(members);
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {});
});

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function loadAndRenderContacts(members) {
    $.ajax({
        url: "/data/team.json",
        success: function(result) {
            members.core = result.core;
            members.exec = result.members;
            members.alumni = result.alumni;
            renderList(members);
        }
    });
}

function renderList(arr) {
    var htmlStr = "";
    for (var i = 0; i < arr.core.length; i++) {
        if(i%4 === 0) {
            htmlStr += '<div class="row text-center">';
        }
        htmlStr += '<div class="col-md-3 text-center"><h3><strong>';
        htmlStr += toTitleCase(arr.core[i].name) + '</strong></h3>';
        htmlStr += '<h4 class="text-center">' + arr.core[i].position + '</h4><br></div>';
        if((i+1)%4 === 0) {
            htmlStr += '</div>';
        }
    }
    $("#core").html(htmlStr);
    
    /*
    htmlStr = '';
    for (var i = 0; i < arr.exec.length; i++) {
        htmlStr += '<div class="member_item member_exec" id = "exec' + i + '">' + toTitleCase(arr.exec[i].name) + '</div>';
    }
    $(".exec .members").html(htmlStr);

    htmlStr = '';
    for (var i = 0; i < arr.alumni.length; i++) {
        htmlStr += '<div class="member_item member_alum" id = "alum' + i + '">' + toTitleCase(arr.alumni[i].name) + '</div>';
    }
    $(".alum .members").html(htmlStr);*/

    htmlStr = "";
    for (var i = 0; i < arr.exec.length; i++) {
        if(i%6 === 0) {
            htmlStr += '<div class="row">';
        }
        htmlStr += '<div class="col-md-2 text-center"><h4 class="member-names">';
        htmlStr += toTitleCase(arr.exec[i].name) + '</h4><br></div>';
        if((i+1)%6 === 0) {
            htmlStr += '</div>';
        }
    }
    $("#exec").html(htmlStr);

    htmlStr = "";
    for (var i = 0; i < arr.alumni.length; i++) {
        if(i%6 === 0) {
            htmlStr += '<div class="row">';
        }
        htmlStr += '<div class="col-md-2 text-center"><h4 class="member-names">';
        htmlStr += toTitleCase(arr.alumni[i].name) + '</h4><br></div>';
        if((i+1)%6 === 0) {
            htmlStr += '</div>';
        }
    }
    $("#alumni").html(htmlStr);

}