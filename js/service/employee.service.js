(function () {
    const GET_URL_ALL_EMPLOYEES = 'http://localhost:8080/v1/getEmployees';
    angular.module("myapp").service("myService", MyService);
    
    function MyService($http){
        this.employees = [];
        this.error = 'manoj';
        this.getAllEmployees = () => {
            return $http.get("http://localhost:8080/v1/getEmployees"); 
        }
     };
})();