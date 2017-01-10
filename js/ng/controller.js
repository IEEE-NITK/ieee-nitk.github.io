/*
 * The parent controller
 */
function mainController($scope) {
    var index = 0,
        pos = 0;
    $scope.phraseShow = function() {
        var phrases = ["LEARN", "TEACH", "CREATE"];

        $("#text_effect").html('');
        pos = 0;
        for (pos = 0; pos < phrases[index].length; pos++) {
            $("<span/>", {
                "class": "effect_char",
                "style": "animation-delay:" + pos * 0.2 + "s",
                "html": phrases[index].charAt(pos)
            }).appendTo("#text_effect");
        }
        index++;
        index = index % 3;
    }

    $scope.phraseShow();
    setInterval($scope.phraseShow, 3000);

    $(".parent").click(function() {
        $(".nav-icon").toggleClass("active");
        $(".full_screen_menu").slideToggle();
    });
    $(".parent").mouseenter(function() {
        $(".nav-icon").addClass("hover");
    });
    $(".parent").mouseleave(function() {
        $(".nav-icon").removeClass("hover");
    });
}





/*
 * Inside the home page, we have to take care of the fullpage slider,
 * The data for each SIG
 * Just this much
 */

function homeController($scope, $http) {
    /*
     * May god bless Mathew Kleppin (github.com/hellsan631) who wrote the
     * Angular version of fullpage slider. 
     * Forked from his repository
     */

    $scope.mainOptions = {
        //anchors: ['home', 'about_us', 'sigs', 'sig1', 'sig2', 'sig3'],
        afterLoad: function(anchorLink, index) {

            $(".section:nth-of-type(" + index + ") .fly_up").animate({
                top: "0px",
                opacity: "1"
            }, 1000);
            $(".section:nth-of-type(" + index + ") .fly_up_fast").animate({
                top: "0px",
                opacity: "1"
            }, 600, function() {
                $(".section:nth-of-type(" + index + ") .fadein").fadeIn();
            });
        }
    };
    $scope.sigs = [];
    $scope.getSigInfo = function() {
        $http({
            method: 'GET',
            url: 'data/sigs.json',
        }).then(function successCallback(response) {
            $scope.sigs = response.data;
        });
    };
    $scope.getSigInfo();
}

/*
 * When the user clicks on a particular sig, go to that page, display the details
 */
function sigController($scope, $stateParams, $http , $sce) {

    //$scope.sig_id = $stateParams.id
    $scope.getSigInfo = function(){
        $http({
            method: 'GET',
            url: 'data/sigs/'+$stateParams.id+'.json',
        }).then(function successCallback(response) {
            $scope.siginfo = response.data;
            $scope.sigDescription = $sce.trustAsHtml($scope.siginfo.description);
            console.log($scope.siginfo);
        });
    }
    $scope.getSigInfo();
    $(".inventory .sub_title").click(function(){
        $(".inventory_list").slideToggle();
    });
}
/*
 * Get the team member details from the JSON files, display them in the page
 */
function teamController() {

}


angular.module('mainApp')
    .controller('mainController', mainController)
    .controller('homeController', homeController)
    .controller('sigController', sigController)
    .controller('teamController', teamController);
