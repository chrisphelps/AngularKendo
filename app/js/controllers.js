'use strict';

/* Controllers */


function MyCtrl1($scope) {
    $scope.myfun = function(i) {
        if (i == 5) return true;
    }
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
