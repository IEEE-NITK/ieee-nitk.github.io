$(document).ready(function() {
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
});

function loadAndDisplay(str) {
    var jsonurl = "data/projects/" + str;
    
    $.ajax({
        url: jsonurl,
        success: function(result) {
            var htmlStr = '<div class="sub_title prociono"><h3>Projects</h3></div>';
            for (var i = 0; i < result.length; i++) {
                htmlStr += '<div class="project"><h4>' + result[i].Title;
                console.log(i);
                htmlStr += " </h4><p class='sans'>" + result[i].Abstract + "</p></div>";
            }
            $("#projects").html(htmlStr);
        	
        }
    });
}

function displayAll(data) {
    console.log("Running234");
}
function renderList(array){
	console.log(array);
}