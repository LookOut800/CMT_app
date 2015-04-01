'use strict';
angular.module('CmtApp').factory('PostsFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){
  var posts = [];

  var getPosts = function(){
    var data = JSON.parse($window.localStorage.getItem('cmt-user'));
    var config = {
      headers: {
        'AUTHORZATION': 'Token token=' + data.token
      }
    };

    return $http.get(ServerUrl+'/posts', config).success(function(response){
      angular.copy(response, posts);
      console.log(response);
    }).error(function(data,status,headers,config){
      console.log('Youre doing it wrong:',data,status,headers,config);
    });
  };

  function upsertPost(post){
    var params = {
      post: post
    };

    if (post.id) {
      return $http.put(ServerUrl + '/posts/' + post.id, params);
    } else {
      return $http.post(ServerUrl + '/posts', params).then(function(response) {
          posts.push(response.data);
      });
    }

  }

  function deletePost(post){
    return $http.delete(ServerUrl +'/posts/' + post.id).success(function(response) {
    // remove from posts array by id
      for (var i = 0; i < posts.length; i++){
        if (posts[i].id === post.id) {
          tasks.splice(i, 1);

          break;
        }
      }
    });
  }

  return {
    posts: posts,
    getPosts: getPosts,
    upsertPost: upsertPost,
    deletePost: deletePost
  };

}]);
