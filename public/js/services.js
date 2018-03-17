(function(){

    var app = angular.module('taskService', []);

    app.factory('task', function($http){
        return 'test';
    });

})();