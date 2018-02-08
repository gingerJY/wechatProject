//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    menu:[
      {num:1,menuItems:'收到',menuImg:'https://upload-images.jianshu.io/upload_images/10520805-8b781c0220fa7659.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'},
      {num:2,menuItems:'送出',menuImg:'https://upload-images.jianshu.io/upload_images/10520805-8b781c0220fa7659.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'},
      {num:3,menuItems:'待定',menuImg:'https://upload-images.jianshu.io/upload_images/10520805-8b781c0220fa7659.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'},
      {num:3,menuItems:'日历',menuImg:'https://upload-images.jianshu.io/upload_images/10520805-9fdad75d6fb95ce2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550'},
    ],  
    listImg:[
      'https://upload-images.jianshu.io/upload_images/10520805-37e3b74a7a432aa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/359',
      'https://upload-images.jianshu.io/upload_images/10520805-37e3b74a7a432aa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/359',
      'https://upload-images.jianshu.io/upload_images/10520805-37e3b74a7a432aa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/359',
      'https://upload-images.jianshu.io/upload_images/10520805-37e3b74a7a432aa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/359',
      'https://upload-images.jianshu.io/upload_images/10520805-37e3b74a7a432aa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/359',
      'https://upload-images.jianshu.io/upload_images/10520805-37e3b74a7a432aa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/359',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toWriteView: function() {
    wx.navigateTo({
      url: '../write/write'
    })
  },
  menuToView: function(event) {
    let num =event.currentTarget.dataset.num;
    if(num==1){
      wx.navigateTo({
        url: '../receive/receive'
      })
    }else if(num==2){
      wx.navigateTo({
        url: '../give/give'
      })
    }else{
      wx.navigateTo({
        url: '../logs/logs'
      })
    }  
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
