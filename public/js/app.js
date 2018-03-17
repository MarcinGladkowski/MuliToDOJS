(function(){

    var app = angular.module('toDoApp', ['taskService']);

    app.controller('MainCtrl', [ '$scope', function($scope){
        console.log('test');
    }]);

})();

