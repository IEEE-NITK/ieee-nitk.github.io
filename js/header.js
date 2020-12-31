function displayHeader() {
    var jsonurl = "data/header.json";
    $.ajax({
        url: jsonurl,
        success: function (result) {
            var htmlStr = '<div class="col-md-2">\
            <div id="colorlib-logo"><a href="/" title="home">\
            <img src="res/img/ieee_nitk.png" alt="IEEE Logo" class="navbar-logo"></a></div>\
            </div>\
            <div class="col-md-10 text-right menu-1"><ul>';;
            for (var i = 0; i < result.length; i++) {
                if (result[i].name!="SIGs"){
                    htmlStr += '<li>\
                    <a href="' + result[i].link + '">' + result[i].name + '</a></li>';
                }
                else{
                    htmlStr += '<li>\
                        <a class="nav-link dropdown-toggle has-dropdown" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SIGs</a>\
                        <ul class="dropdown dropdown-menu">';
                    for(var j=0; j<result[i].sigs.length;j++){
                        htmlStr += '<li class="dropdown-item"><a href="' + result[i].sigs[j].link + '">' + result[i].sigs[j].name + '</a></li>';
                    }
                    htmlStr += '</ul></li>';
                }
            }
            htmlStr += '</ul></div>';
            $("#header").html(htmlStr);
        }
    });
}

$(document).ready(function () {
    particlesJS.load('particles-js', 'particlesjs-config.json', function () {
    });
});

