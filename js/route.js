(function () {
    angular.module("myapp")
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
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
    .when('/', {
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