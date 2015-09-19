
myApp.controller("EditProductController", function($scope, userDataService, $location, $routeParams){
    console.log($location.search());
    console.log($routeParams);
    userDataService.getProduct(+$routeParams.productId, function(data){
        $scope.product = data;
    }, function(error){
        console.log(error);
    });
    $scope.editProduct = function(){
    //window.location.href = "#/userproducts";
    };
    $scope.clearProduct = function(){
        $scope.product = {};
    };
});