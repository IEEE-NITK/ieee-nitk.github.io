function displayFooter() {
    var jsonurl = "data/footer.json";

    $.ajax({
        url: jsonurl,
        success: function (result) {
            var htmlStr = '<ul class="footer-links">\
            <li style="border-left: none">';
            for (var i = 0; i < result.length; i++) {
                if (result[i].name!="Home"){
                    htmlStr += '<li><a href="' + result[i].link + '">' + result[i].name + '</a></li>';
                }
                else{
                    htmlStr += '<a href="' + result[i].link + '">' + result[i].name + '</a></li>';
                }
            }
            htmlStr += '</ul>';
            $("#footer").html(htmlStr);
        }
    });
}