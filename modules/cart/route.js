/*
* @Author: huoqishi
* @Date:   2016-07-11 11:13:06
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-11 11:21:29
*/

(function(angular){
  'use strict';
  // 1.创建购物车路由模块
  var app = angular.module('cart.route',[
    'cart.controllers'
    ]);

  // 2.创建路由规则
  app.config(function($stateProvider){
     $stateProvider.state('cart',{
      url:'/cart',
      templateUrl:'./modules/cart/view.html',
      controller:'cartController'
     })
  })
})(angular)