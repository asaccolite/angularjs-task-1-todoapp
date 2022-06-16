(function () {
    angular.module('myapp').controller('myctrl', 
    myctrl);

    function myctrl ($scope, $http, $location, myService)  {
        $scope.homePage = 'Employee Details';
        $scope.employees = [];

        var pr = myService.getAllEmployees();
        pr.then((response) => {
            $scope.employees = response.data;
        },
        (error) => {
            $scope.employees = error.data;
        });

        $scope.addEmployee = () => {
            $location.path('/add');
        };
    }
})();