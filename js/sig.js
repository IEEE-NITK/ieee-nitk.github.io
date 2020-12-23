$(document).ready(function () {
    particlesJS.load('particles-js', 'particlesjs-config.json', function () {
        console.log('callback - particles.js config loaded');
    });
});

function loadAndDisplay(str) {
    var jsonurl = "data/projects/" + str;

    $.ajax({
        url: jsonurl,
        success: function (result) {
            var htmlStr = '';
            for (var i = 0; i < result.length; i++) {
                htmlStr += '<div class="project"><h4>' + result[i].Title;
                if (result[i].year) {
                    htmlStr += ' – ' + result[i].year;
                }

                if (result[i].github) {
                    htmlStr += '<a style = "text-decoration: none;" href="' + result[i].github + '"> <i class="fa fa-github"></i></a>';
                }
                
                if (result[i].image) {
                    htmlStr += '<center><br><img style="max-width:15vw" src="' + result[i].image + '" alt="img'+ i +'"' + result[i].github + '"></center>';
                }
                console.log(i);
                htmlStr += " </h4><p class='sans'>" + result[i].Abstract + "</p></div>";
            }
            $("#projects").html(htmlStr);
        }
    });
}