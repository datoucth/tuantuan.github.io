/*
* @Author: huoqishi
* @Date:   2016-07-10 14:47:12
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-10 15:54:30
*/

(function(angular){
  'use strict';
  // 1.分类页面控制器模块
  var app = angular.module('category.controllers',[
    'category.services']);

  //categoryController
  // 2.分类页面控制器创建
  app.controller('categoryController',function($scope){
    // 获取分类数据
    getCategoryData();
    // 第一次加载时获取分类详细数据
    getCategoryDetailData(1002);

    // 分类数据
   function getCategoryData(){
      $scope.categoryData=[
        {
          name:"潮流女装",
          typeNumber:'102'
        },
        {
          name:"品牌男装",
          typeNumber:'103'
        },
        {
          name:"热门推荐",
          typeNumber:'101'
        },
        {
          name:"内衣配饰",
          typeNumber:'104'
        },
        {
          name:"家用电器",
          typeNumber:'105'
        },
        {
          name:"电脑办公",
          typeNumber:'106'
        },
        {
          name:"手机数码",
          typeNumber:'107'
        },
        {
          name:"母婴频道",
          typeNumber:'108'
        },
        {
          name:"图书",
          typeNumber:'109'
        },
        {
          name:"家居家纺",
          typeNumber:'110'
        },
        {
          name:"居家生活",
          typeNumber:'111'
        },
        {
          name:"家具建材",
          typeNumber:'112'
        },
        {
          name:"热门推荐",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },{
          name:"居家生活",
          typeNumber:'101'
        }
      ];
   }

   // 分类详情数据
   function getCategoryDetailData(typeNumber){
      var number = Math.random();
    if(number>0.5){
        $scope.categoryDetailData=[
          {
            name:"毛呢大衣",
            src:"img/category/nz1.jpg",
            typeNumber:'10001'
          },
          {
            name:"羽绒服",
            src:"img/category/nz2.jpg",
            typeNumber:'10002'
          },
          {
            name:"针织衫",
            src:"img/category/nz3.jpg",
            typeNumber:'10003'
          },
          {
            name:"连衣裙",
            src:"img/category/nz4.jpg",
            typeNumber:'10004'
          },
          {
            name:"棉服",
            src:"img/category/nz5.jpg",
            typeNumber:'10005'
          },
          {
            name:"长袖T恤",
            src:"img/category/nz6.jpg",
            typeNumber:'10006'
          },
          {
            name:"羊绒衫",
            src:"img/category/nz7.jpg",
            typeNumber:'10007'
          },
          {
            name:"衬衫",
            src:"img/category/nz8.jpg",
            typeNumber:'10008'
          },
          {
            name:"风衣",
            src:"img/category/nz9.jpg",
            typeNumber:'10009'
          },
          {
            name:"皮衣",
            src:"img/category/nz10.jpg",
            typeNumber:'10010'
          },
          {
            name:"休闲裤",
            src:"img/category/nz11.jpg",
            typeNumber:'10011'
          },
          {
            name:"牛仔裤",
            src:"img/category/nz12.jpg",
            typeNumber:'10012'
          }
        ];
      }
      else{
        $scope.categoryDetailData=[
          {
            name:"夹克",
            src:"img/category/nanz1.jpg",
            typeNumber:'10013'
          },
          {
            name:"衬衫",
            src:"img/category/nanz2.jpg",
            typeNumber:'10014'
          },
          {
            name:"牛仔裤",
            src:"img/category/nanz3.jpg",
            typeNumber:'10015'
          },
          {
            name:"羽绒服",
            src:"img/category/nanz4.jpg",
            typeNumber:'10016'
          },

          {
            name:"T恤",
            src:"img/category/nanz5.jpg",
            typeNumber:'10017'
          },
          {
            name:"休闲裤",
            src:"img/category/nanz6.jpg",
            typeNumber:'10018'
          },
          {
            name:"卫衣",
            src:"img/category/nanz7.jpg",
            typeNumber:'10019'
          },
          {
            name:"针织衫",
            src:"img/category/nanz8.jpg",
            typeNumber:'10020'
          },
          {
            name:"棉服",
            src:"img/category/nanz9.jpg",
            typeNumber:'10021'
          }
        ];
      }
   }
    // 左侧点击事件
    //nav-current':'nav-blur'
    $scope.categoryLeftClick = function(e,typeNumber){
      var nowItem =  angular.element(e.target);
      // 移除所有兄弟结点的nav-current样式，并加上nva-blur样式
      nowItem.parent().children().removeClass('nav-current').addClass('nav-blur');
      // 给当前点击元素移除nav-blur样式，并加上nav-current
      nowItem.removeClass('nav-blur').addClass('nav-current');
      // 获取指定分类的数据
      getCategoryDetailData(typeNumber);
    }
  })

})(angular)