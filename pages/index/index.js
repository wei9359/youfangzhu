// pages/menu/menu.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl: getApp().globalData.serverUrl,
    houseList: null,
    userProvince: getApp().globalData.province,
    userCity: getApp().globalData.city,
    userDistrict: getApp().globalData.district,
    fwlx: "",
    fwgj: "",
    kfyq: "",
    fwzx: "",
    area: 3000,
    targetArea: null,
    region: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var cityList = new Array();
    var longitude
    var latitude
    var region = new Array()

    // qqmapsdk.getCityList({
    //   success: function (res) {

    //       for (var j = 0; j < res.result[1].length;j++){
    //         //console.log(res.result[1][j].name)


    //     }
    //   }
    // })
    
    getApp().getLocal().then(function (res) {
      region.push(getApp().globalData.province)
      region.push(getApp().globalData.city)
      region.push(getApp().globalData.district)
      that.setData({
        userProvince: getApp().globalData.province,
        userCity: getApp().globalData.city,
        userDistrict: getApp().globalData.district,
        region:region
      })
      wx.request({
        url: that.data.serverUrl + 'weixin/getHouseIfo.action',
        data: {
          province: that.data.userProvince,
          city: that.data.userCity,
          county: that.data.userDistrict
        },
        success: function (res) {
          that.setData({
            houseList: res.data.object,
          })
        }
      })
    })
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
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }
  
})