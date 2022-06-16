(function () {
    const GET_URL_ALL_EMPLOYEES = 'http://localhost:8080/v1/getEmployees';
    angular.module("myapp").service("myService", MyService);
    
    function MyService($http){
        this.getEmployees = () => $http.get(GET_URL_ALL_EMPLOYEES)
        .then((response) => {
            console.log(response.data);
            $scope.error = false;
            $scope.employees = response.data;
        },
        (error) => {
            console.log("error");
            $scope.employees = error.data;
            $scope.error = true;
        });
     };
})();