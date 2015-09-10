myApp.factory("userDataService", function(){
    var user = {};
    user.products = [
            {name: "Product1" , id:1,price:10,description: "product1",category:"pr"},
            {name:"Product2", id:2,price:20,description: "product2",category:"pr"}
        ];
    user.addProduct = function(product){
        var id = user.products.length;
        product.id = id + 1;
        user.products.push(product);
    };
    user.getProduct = function(id){
        for(var i = 0; i < user.products.length; i++){
           if(user.products[i].id === id){
               return user.products[i];
           }
        }
        return {};
    };

    return  user;
});