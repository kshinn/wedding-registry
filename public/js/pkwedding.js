angular.module("PKWedding", ['ui.router', 'uiGmapgoogle-maps'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('rsvp', {
      templateUrl: '/partials/rsvp',
      url: '/rsvp',
      onEnter: function() {
        console.log('THERE IS STATE');
      }
    })
    .state('site', {
      templateUrl: '/partials/main',
      url: '/',
      controller: 'MainController',
      onEnter: function() {
        console.log("Main State");
      }
    })
    /*
    .state('site.index', {
      url: '',
      templateUrl: '/partials/main',
      controller: 'MainController'
    })
*/
    .state('site.venue', {
      templateUrl: '/partials/siteVenue',
      url: 'venue',
      onEnter: function() {
        console.log("Venue State")
      }
    })
    .state('site.hotel', {
      templateUrl: '/partials/siteHotel',
      url: 'hotel'
    })
    .state('site.ceremony', {
      templateUrl: '/partials/ceremony',
      url: 'ceremony'
    })
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCAsQFpOAyJYu3MwfVttSUyEQ-a7rADBHs',
      v: '3.17',
      libraries: 'places'
    });
  });