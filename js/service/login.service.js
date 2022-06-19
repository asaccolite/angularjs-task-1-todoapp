(function() {
//loginService.js
angular.module("myapp").service("LoginService", LoginService);
  
function LoginService() {
    var admin = 'admin';
    var pass = 'password';
    var isAuthenticated = false;

    this.login = (username, password) => {
        isAuthenticated = (username === admin && password === pass);
        return isAuthenticated;
    };
    this.isAuthenticated = () => {
        return isAuthenticated;
    };

    this.setAuthenticationFalse = (flag) => {
        isAuthenticated = flag;
    };
};
})();