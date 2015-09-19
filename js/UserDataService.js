myApp.factory("userDataService", function($http){
    var user = {};
    function getProducts(success, error){
        $http({
            url: "http://localhost:3000/products",//"js/products.json",
            method: "GET",
            contentType: "application/json"
        }).success(function(result){
            console.log(result);
            success(result)
            //user.products = result;
        }).error(function(err){
            console.log(err);
            error(err);
        });
    }
    //user.products = [
    //        {name: "Product1" , id:1,price:10,description: "product1",category:"pr"},
    //        {name:"Product2", id:2,price:20,description: "product2",category:"pr"}
    //    ];
    user.getProducts = getProducts;
    user.addProduct = function(product){
        var id = user.products.length;
        product.id = id + 1;
        user.products.push(product);
    };
    //user.getProduct = function(id){
    //    for(var i = 0; i < user.products.length; i++){
    //       if(user.products[i].id === id){
    //           return user.products[i];
    //       }
    //    }
    //    return {};
    //};
    user.getProduct = function(id, success, error){
        $http({
            url: "http://localhost:3000/products/"+ id ,//"js/products.json",
            method: "GET",
            contentType: "application/json"
        }).success(function(result){
            console.log(result);
            success(result)
            //user.products = result;
        }).error(function(err){
            console.log(err);
            error(err);
        });
    };
    return  user;
});