
// 'use strict';

// angular.module('PostManager').controller('PostFormController', PostFormController);

// PostFormController.$inject = ['PostFactory'];

// function PostFormCtrl(PostFactory) {
//     var vm = this;

//     vm.posts = PostFactory.posts;
//     vm.post = PostFactory.post;

//     vm.upsertPost = function(post) {
//         PostFactory.upsertPost(post).then(function() {
//             resetForm();
//         }, function(response) {
//             vm.serverErrors = true;
//             vm.serverErrorMsg = handleErrors(response.data);
//         });
//     };

//     vm.cancel = function() {
//         resetForm();
//     };

//     function handleErrors(errObj) {
//         var errString = '';

//         angular.forEach(errObj, function(value, key) {
//             errString += key + ': ' + value;
//         });

//         return errString;
//     }

//     function resetForm() {
//         PostFactory.setPost({name: ''});

//         vm.serverErrors = false;
//     }

//     resetForm();
// };
