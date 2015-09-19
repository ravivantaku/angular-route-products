myApp.controller("UserProductsCtrl", function($scope, loginUserService, userDataService, $http){
    //$scope.userproducts = userDataService.getProducts();
    userDataService.getProducts(function(data){
        $scope.userproducts = data;
    }, function(error){
        console.log(error);
    });
    //$http({
    //    url: "js/products.json",
    //    method: "GET",
    //    contentType: "application/json"
    //}).success(function(result){
    //    $scope.userproducts = result;
    //    //user.products = result;
    //}).error(function(err){
    //    console.log(err);
    //});
    $scope.editUser = function(item){
        //console.log(item);
       // console.log(userDataService.getProduct(item.id));
        window.location.href = "#/editproduct/" + item.id;
    };
    $scope.removeProduct = function(index){
        $scope.userproducts.splice(index,1);
    };
    $scope.loginUser = loginUserService.loginUser;
});