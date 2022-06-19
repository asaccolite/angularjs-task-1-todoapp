(function () {
    var myapp = angular.module("myapp", ["ngRoute"]);
    //angular.module("myapp")

    myapp.run(function($location, LoginService) {
        console.clear();
        console.log('running');
        LoginService.setAuthenticationFalse(false);
        $location.path("/");
     });

    myapp
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.template.html',
        controller: 'LoginController'
    })
    .when('/home', {
        templateUrl: 'views/employees.template.html',
        controller: 'LoginController'
    })
    .when('/update/:id', {
        templateUrl: 'views/update.template.html',
        controller: 'updateCtrl'
    })
    .when('/delete/:id', {
        templateUrl: 'views/employees.html',
        controller: 'deleteCtrl'
    })
    .when('/add', {
        templateUrl: 'views/add.template.html',
        controller: 'addCtrl'
    })
    .when('/updateEmployee', {
        templateUrl: 'views/employees.html'
    })
    .when('/home', {
        templateUrl: 'views/employees.html',
        controller: 'myctrl'
    })
    .otherwise({
        template: '<Strong>Wrong Page</strong>'
    });

    //this is to remove # from link in address bar
    $locationProvider.html5Mode(true); 
}]);
})();