/*
* @Author: huoqishi
* @Date:   2016-07-08 09:11:07
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-11 11:27:29
*/

(function(angular){
  'use strict';
  // 1.创建核心模块中的路由模块
  var app = angular.module('starter.route',[
    'guidePage.route',
    'tab.route',
    'home.route',
    'category.route',
    'goodsList.route',
    'cart.route',
    'account.route'
    ]);

  // 2.配置主路由
  app.config(function($stateProvider,$urlRouterProvider){
   /// 
   /// 不符合其他规则时，就跳转到指定路由，参数是路由的url中锚点值
   $urlRouterProvider.otherwise('/tab/home');
  })
})(angular)