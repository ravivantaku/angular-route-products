
myApp.controller("CreateProductController", function($scope, userDataService){

    $scope.createProduct = function(){
        userDataService.addProduct($scope.product);
    window.location.href = "#/userproducts";
};

    $scope.clearProduct = function(){
        $scope.product = {};
    };
});