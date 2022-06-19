(function () {
    angular.module('myapp').controller('deleteCtrl', 
    deleteCtrl);
    //const URL_GET_EMPLOYEE = 'http://localhost:8080/v1/getEmployee';
    function deleteCtrl ($scope, $routeParams, $http, $location)  {
        $scope.updatePage = "This is an update page " + $routeParams.id;
        $scope.employee = '';
        $scope.error = false;

    
        deleteEmployee = () => $http.delete("http://localhost:8080/v1/deleteEmployee/"+$routeParams.id)
        .then((response) => {
            console.log(response.data);
            //$scope.error = false;
            //$scope.employees = response.data;
            $location.path('/home');
        },
        (error) => {
            console.log("error");
            //$scope.employees = error.data;
            //$scope.error = true;
        });

        deleteEmployee();

    }
})();