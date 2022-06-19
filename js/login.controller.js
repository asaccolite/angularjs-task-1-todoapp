(function() {
//loginController-js 
angular.module('myapp').controller('LoginController', 
    LoginController);

function LoginController($scope, $rootScope, $location, LoginService) {
   $rootScope.title = "Welcome to Aditi's application!";
   
   $scope.formSubmit = () => {
    console.log("called");
     if(LoginService.login($scope.username, $scope.password)) {
        console.log("passed");
       $rootScope.userName = $scope.username;
       $scope.error = '';
       $scope.username = '';
       $scope.password = '';
       //$rootScope.title = "Welcome to Aditi's application.";
       $location.path('/home');
     } else {
       $scope.error = "Incorrect username/password !";
     }   
   };
   
   $scope.isAuthenticated = () => {
        return LoginService.isAuthenticated();
   };

   $scope.logout = () => {
    LoginService.setAuthenticationFalse(false);
    $location.path("/");
};

 };
})();