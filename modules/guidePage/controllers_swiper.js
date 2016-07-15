/*
 * @Author: huoqishi
 * @Date:   2016-07-08 09:43:48
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-08 16:07:11
 */

(function(angular) {
        'use strict';
        // 1.创建引导页的控制器模块
        var app = angular.module('guidePage.controllers', [
            'guidePage.services'
        ])

        // 2.创建控制器
        app.controller('guidePageController', function(
            $scope,
            $ionicPopup, //  这是ionic提供的参数,只能在ionic中使用
            $ionicActionSheet, //这也是ionic提供的参数,只能在ionic中使用
            $ionicModal, // 这也是ionic提供的参数,只能在ionic中使用
            $ionicPopover // 这也是ionic提供的参数,只能在ionic中使用
        ){
          var mySwiper = new Swiper('#test-swiper', {
            autoplay: 1000,//可选选项，自动滑动,及滑动的间隔
            pagination : '.swiper-pagination',// 表示要显示的分页器
            // direction : 'vertical',// 表示是垂直切换还是水平切换。
            direction:'horizontal',// 表示是水平切换轮播图
            speed:300,// 表示轮播图切换的速度.
            autoplayDisableOnInteraction : false,//这个值为false，在用户操作轮播图之后还能够自动轮播.
            autoplayStopOnLast : true,// 表示当自动轮播到最后一张时停止轮播
            // grabCursor : true,// 将鼠标改成小手的形式.
            // height:500
            paginationClickable :true,// 表示是否允许点击切换轮播图
            paginationType : 'fraction', // 设置分页器类型。
            paginationType : 'progress',
              //paginationType : 'custom',
            loop : true, // 表示循环播放
            prevButton:'.swiper-button-prev',// 上一页按钮
            nextButton:'.swiper-button-next',// 下一页按钮
            scrollbar:'.swiper-scrollbar',
          })
        });

})(angular)
