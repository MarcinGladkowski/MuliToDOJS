(function(){

    var app = angular.module('taskService', []);

    app.factory('task', function($http){
        
       var _getTasks = function(callback){

            var callback = callback||function(){};

            $http({
                method: 'GET',
                url: "http://localhost:3000/task"
            })
            .then(function(response) {
                callback(response.data);
            });
        }

        var _createTask = function(task, callback){

            var callback = callback||function(){};

            $http({
                method: 'POST',
                url: "http://localhost:3000/task",
                data: task
            })
            .then(function(response) {
                callback(response.data);
            });

        }

        var _editTask = function(task, callback){
            var callback = callback||function(){};

            $http({
                method: 'POST',
                url: "http://localhost:3000/task",
                data: task
            })
            .then(function(response) {
                callback(response.data);
            });
        }

        return {
            getTasks: _getTasks,
            createTask: _createTask
        }
    
    });

})();