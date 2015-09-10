var myApp = angular.module("SampleReg", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/", {
        url: "/",
        templateUrl: "views/login.html",
        controller: "LoginCtrl"
    })
        .when("/signup", {
            url: "/signup",
            templateUrl: "views/signup.html",
            controller: "SignupCtrl"
        })
        .when("/products", {
            url: "/products",
            templateUrl:"views/products.html",
            controller: "ProductsCtrl"
        })
        .when("/products/:productId", {
            url: "/products/:productId",
            templateUrl: "views/product.html",
            controller: "ProductCtrl"
        })
        .when("/userproducts", {
            url:"/userproducts",
            templateUrl: "views/userproducts.html",
            controller: "UserProductsCtrl"

        })
        .when("/createproduct", {
            url: "/createproduct",
            templateUrl: "views/createProduct.html",
            controller: "CreateProductController"
        })
        .when("/editproduct/:productId", {
            url: "/editproduct/:productId",
            templateUrl: "views/editProduct.html",
            controller: "EditProductController"
        })
        .otherwise("/");
}]);