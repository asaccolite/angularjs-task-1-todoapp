(function () {
    angular.module('myapp').controller('addCtrl', 
    addCtrl);
    //const URL_GET_EMPLOYEE = 'http://localhost:8080/v1/getEmployee';
    function addCtrl ($scope, $routeParams, $http, $location)  {
        $scope.addPage = "Add a new Employee ";
        
        $scope.employee = {};
        console.log($scope.employee);
        $scope.error = false;

       

        $scope.addEmployee = () => $http.put("http://localhost:8080/v1/updateEmployee", $scope.employee)
        .then((response) => {
            //console.log(response.data);
            //$scope.error = false;
            //$scope.employees = response.data;
            $location.path('/home');
        },
        (error) => {
            console.log("error");
            //$scope.employees = error.data;
            //$scope.error = true;
        });
    }
})();