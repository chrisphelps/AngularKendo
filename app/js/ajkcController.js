function AjkcListCtrl($scope, $http) {
    $http.get('data/ajkc59.json').success(function(data) {
        $scope.entries = data;
    });

    $scope.save = function() {

    }

    $scope.expanded = false;

    $scope.toggleExpanded = function() {
        if ($scope.expanded == true) $scope.expanded = false;
        else if ($scope.expanded == false) $scope.expanded = true;
    };

    $scope.toggleSelected = function(element,state) {
        $scope.entries[element].selected = state;
    };
}
