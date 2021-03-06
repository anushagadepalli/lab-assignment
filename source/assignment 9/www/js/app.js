// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services' ])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })
    .state('adminhome', {
      url: '/adminhome',
      templateUrl: 'templates/adminhome.html',
      controller: 'adminCtrl'
  })
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
  })
      .state('studentlogin', {
      url: '/studentlogin',
      templateUrl: 'templates/studentlogin.html',
      controller: 'studentloginCtrl'
  })
        .state('studenthome', {
      url: '/studenthome:username',
      templateUrl: 'templates/studenthome.html',
      controller: 'studenthomeCtrl'
  })
          .state('qrpage', {
      url: '/qrpage',
      templateUrl: 'templates/qrpage.html',
      controller: 'qrpageCtrl'
  })
            .state('view', {
      url: '/view:username',
      templateUrl: 'templates/view.html',
      controller: 'viewCtrl'
  })
            .state('scan', {
      url: '/scan',
      templateUrl: 'templates/scan.html',
     // controller: 'scanCtrl'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
