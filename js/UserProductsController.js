myApp.controller("UserProductsCtrl", function($scope, loginUserService, userDataService){
    $scope.userproducts = userDataService.products;
    //if($rootScope.userEditProduct) {
    //    $scope.userproducts =  _.map($scope.userproducts, function (item) {
    //        if (item.id === $rootScope.userEditProduct.id) {
    //            item = $rootScope.userEditProduct;
    //        }
    //        return item;
    //    });
    //}
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