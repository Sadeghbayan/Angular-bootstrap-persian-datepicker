// Code goes here

var app = angular.module('app', ['ui.mask']);
app.directive('dateP', function() {
    return {
        restrict: 'A',
        require: 'ngModel',

        link: function(scope, element, attr, ngModel) {
            element.datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true
            });
            element.next().bind('click',function(){
                element.datepicker('show');
            })
        }
    }
});

app.controller('mainCtrl', function($scope) {

    $scope.dt;
    $scope.dt1;

});