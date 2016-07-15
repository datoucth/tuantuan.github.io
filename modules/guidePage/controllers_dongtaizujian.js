/*
 * @Author: huoqishi
 * @Date:   2016-07-08 09:43:48
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-08 11:52:18
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
        $ionicPopover// 这也是ionic提供的参数,只能在ionic中使用
    ) {

        //
        $scope.onSlideChange = function($index) {
            console.log($index);
            console.log('我是小明');
        }

        // 
        // 4.Popover弹出框 ,var arr = new Array() // 这里是创建了一个数组//这是用来存储用户数据的
        $ionicPopover.fromTemplateUrl(
            'my-popover.html' // script标签的id,或者静态文件
            , {
                scope: $scope // 也是使用对应的模板中可以使用当前控制器的$scope
            }).then(function(popover) {
            $scope.popover = popover;
        })

        $scope.openPopover = function($event) {
            console.log();
            // 弹出当前弹出框,
            $scope.popover.show($event);
        }
        $scope.closePopover = function() {
            // 隐藏当前弹出框
            $scope.popover.hide();
        }

        // 3.Modal弹出框

        // fromTemplateUrl用来指定一个模板来做为弹出内容
        // 第一个参数可以是script标签的id,也可以是一个路径
        // 第二个参数是一个object对象.
        // 该方法只是用来声明一个弹出框
        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope, // 表示我们可以在模板中直接使用当前控制器的$scope
            animation: 'slide-in-up' // 指定一个动态，
        }).then(function(modal) {
            // 这里的model是通过formTemplateUrl得到的模态框对象
            $scope.modal = modal;
        });
        $scope.showModal = function() {
            $scope.modal.show(); //显示当前模态框。
        }
        $scope.hideModal = function() {
            $scope.modal.hide(); //
        }

        $scope.removeModal = function() {
            $scope.modal.remove(); //移除模态框，移除之后就不能够调用show和hide方法
        }


        // 2.ActionSheet
        $scope.showActionSheet = function() {
            // 调用show方法用来显示该弹出框.
            var hidesheet = $ionicActionSheet.show({
                buttons: [ // 最终需要显示的普通按钮
                    { text: '<b>打开相机</b' }, //每一个元素是一个按钮对象,text属性对应按钮的名字,也可以是html代码
                    { text: '打开相册' },
                    { text: '关机' }
                ],
                destructiveText: '删除', // 删除按钮
                cancelText: 'Cancel', // 取消按钮
                cancel: function() {
                    // 这里是删除按钮事件
                    console.log('删除')
                },
                // buttonClicke属性用来给buttons这个数组里的button注册点击事件
                buttonClicked: function(index) {
                    console.log(index);
                    // hidesheet是$ionicActionSheet.show返回的方法，用来进行当前弹出的隐藏
                    hidesheet(); //隐藏当前弹框
                    // return true
                },
                // 这是删除按钮对应的事件
                destructiveButtonClicked: function() {
                    console.log('删除');
                }
            })
        }

        // 1.popup
        $scope.showPopup = function() {
            // // 这个show方法就是用来显示，一个弹出框
            var myPopup = $ionicPopup.show({
                template: '<input>', // templateUrl,这个参数和路由的tempate一样
                title: '请输入密码', // 这个是弹出框的标题
                subTitle: '接下来要输入密码', // 这是弹出框的子标题
                // scope:$scope, // 这让模板中可以使用这个控制器里的$scope
                buttons: [ // 是个数据，里面的元素是弹出框需要显示的按钮
                    {
                        text: '取消', // 这个属性是按钮的名字，可以是html字符串
                        onTap: function(e) { // 这个是该按钮的点击事件.
                            console.log('取消');
                            e.preventDefault();

                            myPopup.close(); //用来关闭当前窗口,这个对象是$ionicPopu.show方法返回的对象,当我们阻止了默认事件时需要手动关闭
                            // return false;
                        }
                    }, {
                        text: '<b>Save</b>',
                        type: 'button-positive', // 是按钮的类样式名,ionic会把这个名字添加到按钮的class的样式中.
                        onTap: function(e) { // 点击事件
                            console.log('保存');
                        }
                    }
                ]
            })
        }
    })

})(angular)
