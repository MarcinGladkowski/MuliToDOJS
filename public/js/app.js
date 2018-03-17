(function(){

    var app = angular.module('toDoApp', ['taskService']);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ]);

    app.controller('MainCtrl', [ '$scope', 'task', function($scope, task){


        task.getTasks(function(data){
            console.log(data);
        })

    }]);

})();

