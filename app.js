//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success:function(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        
        if (res.code) {
          console.log("code:  " + res.code)
          console.log(getApp().globalData.serverUrl + "/weixin/getWeixinIfo.action")
          //发起网络请求
          wx.request({
            url: getApp().globalData.serverUrl + "/weixin/getWeixinIfo.action",
            data:{
              code:res.code
            },
            header: {
              'content-type': 'json'
            },
            success: function (res) {
              console.log(res.data.object)
              var openID = res.data.object.openID //返回openid
              getApp().globalData.openId = openID
              getApp().globalData.userIfo = res.data.object
              console.log("userIfo111:" + getApp().globalData.userIfo)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userIfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userIfo: null,
    serverUrl: "http://192.168.0.116:8080/",
    openId:null,
    upload_url: "pawq2zntb.bkt.clouddn.com/"
  }
})