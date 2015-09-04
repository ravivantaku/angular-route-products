myApp.constant("EmpId", "Emp123");
myApp.value("AppName", "EmpProducts");
myApp.service("userService", function(){

});
myApp.factory("loginUserService", function(EmpId){
       var loginUser = {};




    return {
        loginUser: loginUser
    };
});