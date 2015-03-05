angular.module('PKWedding')
    .controller('MainController', ['$scope', 'uiGmapLogger','uiGmapGoogleMapApi',
                'Restangular',
                function($scope, uiGmapLogger, uiGmapGoogleMapApi, Restangular) {
        var guests, gRest;

        gRest = Restangular.all('guest');

        gRest.getList().then(function(result) {
            guests = result;
            $scope.allGuests = _.map(guests, 'fullName');
        })

        $scope.guest = {};
        $scope.selected = {};
        $scope.numGuests = [];

        uiGmapLogger.doLog = true;
        uiGmapGoogleMapApi.then(function(maps) {
            console.log(maps)
        })
        uiGmapLogger.warn('main controller!!');
        $scope.map = {
            center: {latitude: 51.219053, longitude: 4.404418 },
            zoom: 14
        };

        $scope.$watch('guest.name', function(newValue) {
            var labels;
            $scope.selected = _.where(guests, {fullName: newValue});
            if ($scope.selected.length > 0) {
                $scope.selected = $scope.selected[0];
                _.each(_.range($scope.selected.guests + 1), function(val) {
                    $scope.numGuests.push({ label: '+' + val, value: val});
                })
            }
        })
        $scope.submitRsvp = function() {
            console.log($scope.guest);
            gRest.all('rsvp').post($scope.guest);
        }
    }]);