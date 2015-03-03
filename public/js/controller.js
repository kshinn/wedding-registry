angular.module('PKWedding')
    .controller('MainController', ['$scope', 'uiGmapLogger','uiGmapGoogleMapApi',
                function($scope, uiGmapLogger, uiGmapGoogleMapApi) {
        uiGmapLogger.doLog = true;
        uiGmapGoogleMapApi.then(function(maps) {
            console.log(maps)
        })
        uiGmapLogger.warn('main controller!!');
        $scope.map = {
            center: {latitude: 51.219053, longitude: 4.404418 },
            zoom: 14
        };

    }]);