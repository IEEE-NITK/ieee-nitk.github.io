function displayHeader() {
    var jsonurl = "data/header.json";

    $.ajax({
        url: jsonurl,
        success: function (result) {
            var htmlStr = '<a class="logo" href="https://www.ieee.org/" title="home" onclick="$.fn.fullpage.moveTo(1)">\
            <img id="small_logo" src="res/img/ieee_nitk.png" alt="IEEE Logo"></a>\
            <div class="popup_menu"><ul id="menu" class="teco">';
            for (var i = 0; i < result.length; i++) {
                if (result[i].name!="SIGs"){
                htmlStr += '<li>\
                <a href="' + result[i].link + '">' + result[i].name + '</a></li>';
                }
                else{
                    htmlStr += '<li>\
                    <div class="dropdown">\
                        <button class="dropbtn">SIGs</button>\
                        <div class="dropdown-content">';
                    for(var j=0; j<result[i].sigs.length;j++){
                        htmlStr += '<a href="' + result[i].sigs[j].link + '">' + result[i].sigs[j].name + '</a>';
                    }
                    htmlStr += '</div></div></li>';
                }
            }
            htmlStr += '</ul>\
            </div>\
            <div class="parent">\
                <div class="nav-icon cross">\
                    <div class="span"></div>\
                </div>\
            </div>'
        $("#header").html(htmlStr);
        }
    });
}