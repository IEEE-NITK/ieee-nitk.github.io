function loadAndDisplay(str) {
    var jsonurl = "data/projects/" + str;

    $.ajax({
        url: jsonurl,
        success: function (result) {
            var htmlStr = '';
            for (var i = 0; i < result.length; i++) {
                htmlStr += '<div class="row colorlib-bg-white project-card"><div class="col-md-12"><h3>' + result[i].Title;
                if (result[i].year) {
                    htmlStr += ' – ' + result[i].year;
                }
                htmlStr += '</h3><div class="desc"><p>' + result[i].Abstract + '</p>';
                if (result[i].github) {
                    htmlStr += '<p><a href="' + result[i].github + '"class="btn btn-primary btn-outline with-arrow" target="_blank">View on Github<i class="fa fa-github"></i></a></p>';
                }
                htmlStr += '</div></div></div>';
            }
            $("#projects").html(htmlStr);
        }
    });
}