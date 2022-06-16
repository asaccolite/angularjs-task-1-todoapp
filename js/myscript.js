(function () {
    angular.module('myapp').controller('myctrl', 
    myctrl);

    function myctrl ($scope, $http, $location)  {
        $scope.homePage = 'Employee Details';
        $scope.employees = [];
        $scope.error = false;


        let getEmployees = () => $http.get("http://localhost:8080/v1/getEmployees")
        .then((response) => {
            //console.log(response.data);
            $scope.error = false;
            $scope.employees = response.data;
        },
        (error) => {
            console.log("error");
            $scope.employees = error.data;
            $scope.error = true;
        });

        getEmployees();

        $scope.addEmployee = () => {
            $location.path('/add');
        };
    }
})();