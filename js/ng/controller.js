/*
 * The parent controller
 */
function mainController($scope) {

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

    $scope.sigs = [];
    $scope.getSigInfo = function() {
        /*
        $http({
            method: 'GET',
            url: 'data/sigs.json',
        }).then(function successCallback(response) {
            $scope.sigs = response.data;
        });
        */
    };
    $scope.getSigInfo();


    // To inject custom styles to the sliders


}

/*
 * When the user clicks on a particular sig, go to that page, display the details
 */
function sigController($scope, $stateParams, $http, $sce) {

    //$scope.sig_id = $stateParams.id
    $scope.getSigInfo = function() {
        $http({
            method: 'GET',
            url: 'data/sigs/' + $stateParams.id + '.json',
        }).then(function successCallback(response) {
            $scope.siginfo = response.data;
            $scope.sigDescription = $sce.trustAsHtml($scope.siginfo.description);
            console.log($scope.siginfo);
        });
    }
    $scope.getSigInfo();
    $(".inventory .sub_title").click(function() {
        $(".inventory_list").slideToggle();
    });
}
