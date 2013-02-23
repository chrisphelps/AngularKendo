function AjkcListCtrl($scope, $http) {
    $http.get('data/ajkc59.json').success(function(data) {
        $scope.entries = data;
    });

    $scope.toggleSelected = function(element,state) {
        $scope.entries[element].selected = state;
    };
}
