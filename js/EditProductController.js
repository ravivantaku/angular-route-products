
myApp.controller("EditProductController", function($scope, userDataService, $location, $routeParams){
    console.log($location.search());
    console.log($routeParams);
    $scope.product =  userDataService.getProduct(+$routeParams.productId);
    $scope.editProduct = function(){
    //window.location.href = "#/userproducts";
};
    $scope.clearProduct = function(){
        $scope.product = {};
    };
});