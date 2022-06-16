(function () {
    angular.module('myapp').controller('updateCtrl', 
    updateCtrl);
    //const URL_GET_EMPLOYEE = 'http://localhost:8080/v1/getEmployee';
    function updateCtrl ($scope, $routeParams, $http, $location)  {
        if($routeParams.id) {
            $scope.updatePage = "Update the Employee ";
        }else {
            $scope.updatePage = "Add a new Employee ";
        }
        $scope.employee = '';
        $scope.error = false;

        let getEmployee = () => $http.get('http://localhost:8080/v1/getEmployee/'+$routeParams.id)
        .then((response) => {
            //console.log(response.data);
            $scope.error = false;
            $scope.employee = response.data;
        },
        (error) => {
            console.log("error");
            $scope.employee = error.data;
            $scope.error = true;
        });

        if($routeParams.id) {
            getEmployee();
        }


        $scope.updateEmployee = () => $http.put("http://localhost:8080/v1/updateEmployee", JSON.stringify($scope.employee))
        .then((response) => {
            //console.log(response.data);
            //$scope.error = false;
            //$scope.employees = response.data;
            $location.path('/');
        },
        (error) => {
            console.log("error");
            //$scope.employees = error.data;
            //$scope.error = true;
        });
    }
})();