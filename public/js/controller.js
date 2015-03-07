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

        $scope.guest = {plus: ''};
        $scope.selected = {};
        $scope.numGuests = [{label: "Total guests coming...", value:""}];
        /*
        uiGmapLogger.doLog = true;
        uiGmapGoogleMapApi.then(function(maps) {
            console.log(maps)
        })
        uiGmapLogger.warn('main controller!!');
        $scope.map = {
            center: {latitude: 51.219053, longitude: 4.404418 },
            zoom: 14
        };
        */
        $scope.$watch('guest.name', function(newValue) {
            var labels;
            $scope.selected = _.where(guests, {fullName: newValue});
            if ($scope.selected.length > 0) {
                $scope.numGuests = [{label: "Total guests coming...", value:""}];
                $scope.selected = $scope.selected[0];
                _.each(_.range($scope.selected.guests + 1), function(val) {
                    $scope.numGuests.push({ label: val + ' guest(s)', value: val});
                })
            }
        })

        $scope.submitRsvp = function() {
            $scope.selected.foodPref = $scope.guest.diet;
            $scope.selected.status = $scope.guest.response;
            $scope.selected.selectedGuests = $scope.guest.plus
            $scope.selected.put().then(function(result) {
                console.log(result);
                if (result.status != null) {
                    $scope.rsvpSuccess = true;
                }
            });
        }
    }])

.controller('HotelController', ['$scope', function($scope) {
    $scope.hotelImg = '/img/hilton-svg.jpg';

    $scope.switchHotel = function(hotel) {
        console.log(hotel);
        switch(hotel) {
            case 'hilton':
                $scope.hotelImg = '/img/hilton-svg.jpg';
                break;
            case 'best-western':
                $scope.hotelImg = '/img/best-western-monterey.jpg';
                break;
            case 'figueroa':
                $scope.hotelImg = '/img/hotel-figueroa.jpg';
                break;
        }
    }
}]);