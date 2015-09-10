myApp.constant("EmpId", "Emp123");
myApp.value("AppName", "EmpProducts");
myApp.service("userService", function(){

});
myApp.factory("loginUserService", function(EmpId){
    var user = {};
    user.getUser = function(){
        return this.loginUser;
    };
    return user;
});