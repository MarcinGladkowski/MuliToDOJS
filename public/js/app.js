(function(){

    var app = angular.module('toDoApp', ['taskService']);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ]);

    app.controller('MainCtrl', [ '$scope', 'task', function($scope, task){

        $scope.tasks = [];
        $scope.task = {};

        task.getTasks(function(data){
            $scope.tasks = data;
        });

        $scope.addTask = function(event){
            if (event.which === 13){
                $scope.task.completed = false;

                task.createTask($scope.task, function(data){
                    $scope.tasks.push(data);
                });

                $scope.task = {};
            };
        };
    }]);

})();

