(function(){

    var app = angular.module('toDoApp', ['taskService']);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ]);

    app.controller('MainCtrl', [ '$scope', 'taskManager', function($scope, taskManager){

        $scope.tasks = [];
        $scope.task = {};

        taskManager.getTasks(function(data){
            $scope.tasks = data;
        });

        $scope.addTask = function(event){
            if (event.which === 13){
                $scope.task.completed = false;

                taskManager.createTask($scope.task, function(data){
                    taskManagerv.getTasks(function(data){
                        $scope.tasks = data;
                    });
                });

                $scope.task = {};
            };
        };

        $scope.editTask = function(task){

            taskManager.updateTask(task, function(data){

            });
        }


    }]);

})();

