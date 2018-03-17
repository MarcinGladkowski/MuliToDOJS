(function(){

    var app = angular.module('taskService', []);

    app.factory('task', function($http){
        
        $http.get("/task")
        .then(function(response) {
            console.log(response);
        });

    });

})();