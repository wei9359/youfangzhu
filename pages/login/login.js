// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    password: "",
    serverUrl: getApp().globalData.serverUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  userNameInput: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function(e) {
    if (!this.data.userName==""&&!this.data.password=="") {
      wx.request({
        url: this.data.serverUrl + "weixin/login.action",
        data:{ 
          userName:this.data.userName,
          userPassword:this.data.password
        },
        dataType: "json",
        success: function(res) {
          console.log(res)
          if (res.data.status == "0") {
            wx.showModal({
              content: res.data.info,
              showCancel: false,
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            });
          } else {
            wx.redirectTo({
              url: '../menu/menu',
            })
          }
        },

      })
    }else{
      wx.showModal({
        content: "请输入用户名和密码",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
  },
  forgetPW: function() {
    console.log('忘记密码');
  },
  regist: function() {
    console.log('注册');
    wx.redirectTo({
      url: '../regist/regist',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})