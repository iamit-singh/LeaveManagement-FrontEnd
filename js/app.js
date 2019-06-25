var lm = angular.module('lm',['ngRoute','lmController']);

lm.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl:  'appFiles/loginSignup.html',
        controller: 'LoginSignupController'
    }).when('/home', {
        templateUrl:  'appFiles/home.html',
        controller: 'HomeController'
    }).when('/notification', {
        templateUrl: 'appFiles/notification.html',
        controller: 'NtfController'
    }).when('/details/:appId', {
        templateUrl: 'appFiles/details.html',
        controller: 'DetController'
    }).when('/notification2', {
        templateUrl: 'appFiles/notification2.html',
        controller: 'NtfController2'
    }).when('/details2/:appId/:ntfId', {
        templateUrl: 'appFiles/details2.html',
        controller: 'DetController2'
    }).when('/logout', {
        templateUrl: 'appFiles/logout.html',
        controller: 'LogoutController'
    }).when('/profile', {
        templateUrl: 'appFiles/profile.html',
        controller: 'ProfileController'
    }).when('/editProfile', {
        templateUrl: 'appFiles/editProfile.html',
        controller: 'editProfileController'
    }).when('/contact', {
        templateUrl: 'appFiles/contactus.html',
        controller: 'ContactusController'
    }).when('/about', {
        templateUrl: 'appFiles/about.html'
    }).otherwise({
        redirectTo: '/home'
    });
}); 

lm.run(function($rootScope, $interval){
    $rootScope.$on(['$routeChangeSuccess'], function(){
        
     //   $interval(function(){
            if(localStorage.timestamp){
                var d1 = new Date(localStorage.timestamp).getTime();
                var d2 = new Date().getTime();
                var k = d2-d1;

                if(k<72000000){
                    $rootScope.isLogin=true;
                    if(localStorage.fRank ==1){
                        $rootScope.isForAS = true;
                    }else{
                        $rootScope.isForAS = false;
                    };
                }else{
                    $rootScope.isLogin=false;
                    localStorage.removeItem('token');
                    localStorage.removeItem('timestamp');
                    localStorage.removeItem('usereid');
                    localStorage.removeItem('fRank');
                    localStorage.removeItem('gB');
                    localStorage.removeItem('designation');
                }
            }
      //  },1800000);
    });
});

lm.factory('httpRequestInterceptor', function(){
   return{
       request: function(config){
           config.headers['Authorization'] = 'Bearer '+ localStorage.token;
           return config;
       }
   };
});

lm.config(function ($httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');
});