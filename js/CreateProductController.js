
myApp.controller("CreateProductController", function($scope, $rootScope, $window){
$scope.createProduct = function(){
    $rootScope.userProduct = $scope.product;
    window.location.href = "#/userproducts";
};
    $scope.clearProduct = function(){
        $scope.product = {};
    };
});