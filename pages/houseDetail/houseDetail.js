// pages/houseDetail/houseDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl : getApp().globalData.serverUrl,
    houseIfo:null,
    houseID:null,
    mztype:null, //卖房还是租房
    fkfs:null,    //付款方式
    houseParts: ["WIFI", "床", "衣柜", "沙发", "洗衣机", "空调", "桌椅", "电视", "暖气", "热水器", "燃气灶", "抽油烟机", "电磁炉", "微波炉", "卫生间","阳台"],
    houseImgList:[],
    collectImg:"../../images/notCollect.png",
    collectType:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options.houseID)
      this.setData({
        houseID:options.houseID
      })
      var _this = this
      wx.request({
        url: this.data.serverUrl+'weixin/getHouseIfoById.action',
        data:{
          houseID:this.data.houseID,
          userID:getApp().globalData.userIfo.userID
        },
        success:function(res){
          console.log(res)
          var mztype
          var fkfs
          var houseImgList = new Array
          var collectImg
          if(res.data.status=="1" && res.data.object!=null){
            if (res.data.object.mztype == 0) {
              mztype = "整租"
              if (res.data.object.zffkfs == 0) {
                fkfs = "元/月"
              } else if (res.data.object.zffkfs == 1) {
                fkfs = "元/年"
              }
            } else if (res.data.object.mztype == 1) {
              mztype = "卖房"
              if (res.data.object.mffkfs == 0) {
                fkfs = "整付"
              } else if (res.data.object.mffkfs == 1) {
                fkfs = "首付+贷款"
              }
            }
            for(var i = 0;i<res.data.object.houseImgListCustom.length;i++){
              houseImgList.push(res.data.object.houseImgListCustom[i].houseImgUrl)
            }
            if(res.data.object.collectType==1){
              collectImg = "../../images/hasCollect.png"
            }

            _this.setData({
              houseIfo: res.data.object,
              mztype:mztype,
              fkfs:fkfs,
              houseImgList:houseImgList,
              collectType:res.data.object.collectType,
              collectImg:collectImg
            })

            
          }
          
        }
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
  previewImg:function(e){
    wx.previewImage({
      urls: this.data.houseImgList,
    })
  },
  collect:function(e){
    var that = this
    wx.request({
      url: this.data.serverUrl + "weixin/collect.action",
      data:{
        houseID: this.data.houseID,
        collectType: this.data.collectType,
        openID:getApp().globalData.openId
      },
      success:function(res){
        console.log(res)
        if(that.data.collectType==0){
          that.setData({
            collectType:1,
            collectImg: "../../images/hasCollect.png"
          })
        }else{
          that.setData({
            collectType: 0,
            collectImg: "../../images/notCollect.png"
          })
        }
        
        wx.showToast({
          title: res.data.info,
          icon: 'success',
          duration: 3000
        });
      }
    })
    
    
  }

})