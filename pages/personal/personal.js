// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIfo:getApp().globalData.userIfo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      userIfo: getApp().globalData.userIfo
    })
    console.log("userIfo:" + this.data.userIfo.userImg)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  updateUserIfo:function(){
    wx.navigateTo({
      url: '../regist/regist',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  myCollect:function(){
    wx.navigateTo({
      url: '../mycollect/mycollect?userID='+this.data.userIfo.userID,
    })
  },
  myHouse:function(){
    wx.navigateTo({
      url: '../myhouse/myhouse?userID=' + this.data.userIfo.userID,
    })
  },
  addHouseIfo:function(){
    wx.navigateTo({
      url: "../addHouseIfo/addHouseIfo"
    })
  }

})