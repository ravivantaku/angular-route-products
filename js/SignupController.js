myApp.controller("SignupCtrl", function($scope){
    $scope.users = [];

    $scope.getUserData = function() {
        var user = {
            UserName: $scope.userName,
            surName:$scope.surname,
            Dob:$scope.dob,
            age: $scope.age,
            Gender: $scope.gender,
            Country:$scope.country,
            phoneNumber: $scope.phoneNumber,
            address:$scope.address,
            Mobile:$scope.mobile,
        };

        $scope.users.push(user);
        $scope.resetUser();
        console.log($scope.users);
    };

    $scope.resetUser = function() {
        $scope.userName = "";
        $scope.surname="";
        $scope.dob="";
        $scope.age = "";
        $scope.gender="";
        $scope.address="";
        $scope.mobile="";
        $scope.country="";
    };
    $scope.removeRow = function(i) {
        $scope.users.splice(i, 1);
    };
});
myApp.filter("capitalize", function() {
    return function(input, char) {
        var char = char - 1 || 0;
        var output = [];
        if (isNaN(input)) {

            var letter = input.charAt(char).toUpperCase();

            for (var i = 0; i < input.length; i++) {
                if (i === char) {
                    output.push(letter);
                } else {
                    output.push(input[i])
                }
            }

        }
        console.log(output);
        return output.join('');

    };
});