'use strict';
angular.module('CmtApp').factory('AuthFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){

  var login = function(credentials){
    console.log(credentials);
    return $http.post(ServerUrl + '/login', credentials).success(function(response){
      _storeSession(response);
    });
  };

  var logout = function(){
    console.log();
    return $http.get(ServerUrl + '/logout').success(function(){
      $window.localStorage.removeItem('cmt-user');
    });
  };

  var isAuthenticated = function(){
    var data = JSON.parse($window.localStorage.getItem('cmt-user'));
    if(data) {
      return !!data.token;
    } else {
      return false;
    }
  };

  var clearStorage = function(){

  };

  var _storeSession = function(data) {
    $window.localStorage.setItem('cmt-user', JSON.stringify(data));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  };

  /*
  data = {
    id: 1
    username: "..."
    token: .....
  }
  */

  return{
    login:login,
    logout:logout,
    isAuthenticated: isAuthenticated,
    clearStorage: clearStorage
  };
}]);
// 'use strict';
// angular.module('soapStoneApp').factory('AuthFactory',['$http','$window','ServerUrl','trace',function($http,$window,ServerUrl,trace){
//   var login = function(credentials){
//     trace(credentials);
//     return $http.post(ServerUrl + 'login',credentials).success(function(response){
//       storeSession(response);
//     });
//   };

//   var logout = function(){
//     return $http.get(ServerUrl + 'logout').success(function(response){
//       $window.sessionStorage.removeItem('jw-token');
//       trace(response);
//     });
//   };

//   var isAuthenticated = function(){
//     return !!$window.sessionStorage.getItem('jw-token');
//   };

//   var clearStorage = function(){
//     trace($window.sessionStorage);
//     return !!$window.sessionStorage.clear();
//   };

//   var postNewUser = function(user){
//     return $http.post(ServerUrl + 'users',{user: user}).success(function(response){
//       storeSession(response);
//     }).error(function(data, status, headers, config){
//       trace(data,status,headers,config,'you are so stupid, you are doing it wrong');
//     });
//   };

//   var storeSession = function(response){
//     $.each(response,function(key,value){
//       $window.sessionStorage.setItem('jw-'+key,value);
//     });
//     $http.defaults.headers.common.Authorization = 'Token token=' + $window.sessionStorage.getItem('jw-token');
//   };

//   return {
//     login: login,
//     logout: logout,
//     isAuthenticated: isAuthenticated,
//     clearStorage: clearStorage,
//     postNewUser: postNewUser
//   };
// }]);
