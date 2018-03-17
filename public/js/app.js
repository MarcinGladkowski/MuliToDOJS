(function(){

    var app = angular.module('toDoApp', ['taskService']);

    app.controller('MainCtrl', [ '$scope', 'task', function($scope, task){
        console.log(task);
    }]);

})();

