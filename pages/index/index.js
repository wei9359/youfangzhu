// pages/menu/menu.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk
var ReportDataSync = [

  {
    reportType: "范围",
    chilItem: [
      {
        ID: 1,
        Name: "一公里",
        ReportUrl: "DailyReport.aspx",
        Type: 5,
        value: 1000
      },
      {
        ID: 2,
        Name: "三公里",
        ReportUrl: "DailyReport.aspx",
        Type: 5,
        value: 3000
      },
      {
        ID: 3,
        Name: "五公里",
        ReportUrl: "DailyReport.aspx",
        Type: 5,
        value: 5000
      },
      {
        ID: 4,
        Name: "七公里",
        ReportUrl: "DailyReport.aspx",
        Type: 5,
        value: 7000
      },
      {
        ID: 5,
        Name: "十公里",
        ReportUrl: "DailyReport.aspx",
        Type: 5,
        value: 10000
      }
    ],
    imageSrc: "../../images/right1.png"
  },
  {
    reportType: "类型",
    chilItem: [{
        ID: 3,
        Name: "全部",
        ReportUrl: "DailyReport.aspx",
        Type: 1,
        value: ""
      },
      {
        ID: 0,
        Name: "整租",
        ReportUrl: "DailyReport.aspx",
        Type: 1,
        value: 0
      },
      {
        ID: 1,
        Name: "合租",
        ReportUrl: "DailyReport.aspx",
        Type: 1,
        value: 1
      },
      {
        ID: 2,
        Name: "售房",
        ReportUrl: "DailyReport.aspx",
        Type: 1,
        value: 2
      }
    ],
    imageSrc: "../../images/right1.png"
  },
  {
    reportType: "房屋格局",
    chilItem: [{
        ID: 11,
        Name: "全部",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: ""
      },
      {
        ID: 1,
        Name: "一室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "一室一厅"
      },
      {
        ID: 2,
        Name: "两室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "两室一厅"
      },
      {
        ID: 3,
        Name: "三室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "三室一厅"
      },
      {
        ID: 4,
        Name: "三室两厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "三室两厅"
      },
      {
        ID: 5,
        Name: "四室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "四室一厅"
      },
      {
        ID: 6,
        Name: "四室两厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "四室两厅"
      },
      {
        ID: 7,
        Name: "四室三厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "四室三厅"
      },
      {
        ID: 8,
        Name: "五室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "五室一厅"
      },
      {
        ID: 9,
        Name: "五室两厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "五室两厅"
      },
      {
        ID: 10,
        Name: "五室三厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2,
        value: "五室三厅"
      }
    ],
    imageSrc: "../../images/right1.png"
  },
  {
    reportType: "看房要求",
    chilItem: [{
        ID: 3,
        Name: "全部",
        ReportUrl: "DailyReport.aspx",
        Type: 3,
        value: ""
      },
      {
        ID: 1,
        Name: "随时看房",
        ReportUrl: "DailyReport.aspx",
        Type: 3,
        value: "随时看房"
      },
      {
        ID: 2,
        Name: "周末看房",
        ReportUrl: "DailyReport.aspx",
        Type: 3,
        value: "周末看房"
      }
    ],
    imageSrc: "../../images/right1.png"
  },
  {
    reportType: "房屋装修",
    chilItem: [{
        ID: 1,
        Name: "全部",
        ReportUrl: "DailyReport.aspx",
        Type: 4,
        value: ""
      },
      {
        ID: 1,
        Name: "毛胚",
        ReportUrl: "DailyReport.aspx",
        Type: 4,
        value: "毛胚"
      },
      {
        ID: 2,
        Name: "简装",
        ReportUrl: "DailyReport.aspx",
        Type: 4,
        value: "简装"
      },
      {
        ID: 3,
        Name: "精装",
        ReportUrl: "DailyReport.aspx",
        Type: 4,
        value: "精装"
      }
    ],
    imageSrc: "../../images/right1.png"
  }
]

//定义字段 
var initSubMenuDisplay = []
var initSubMenuHighLight = []


Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl: getApp().globalData.serverUrl,
    houseList: null,
    userCity: null,
    userDistrict: null,
    reportData: null,
    subMenuDisplay: null,
    subMenuHighLight: null,
    fwlx: "",
    fwgj: "",
    kfyq: "",
    fwzx: "",
    area: 3000,
    targetArea: null,
    region:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var cityList = new Array();
    var longitude
    var latitude
    var region = new Array()
    qqmapsdk = new QQMapWX({
      key: '3RXBZ-KJ6KW-ZG2RA-ODSIU-ASWZQ-NYB6Z'
    })
    wx.getLocation({
      success: function(res) {
        longitude = res.longitude,
          latitude = res.latitude,
          qqmapsdk.reverseGeocoder({
            lacation: {
              latitude: latitude,
              longitude: longitude
            },
            success: function(res) {
              region.push(res.result.address_component.province)
              region.push(res.result.address_component.city)
              region.push(res.result.address_component.district)
              that.setData({
                userCity: res.result.address_component.city,
                userDistrict: res.result.address_component.district,
                region:region
              })
            },
            fail: function(res) {
              that.setData({
                userCity: "定位失败"
              })
            }
          })
      },
    })
    // qqmapsdk.getCityList({
    //   success: function (res) {

    //       for (var j = 0; j < res.result[1].length;j++){
    //         //console.log(res.result[1][j].name)


    //     }
    //   }
    // })

    wx.request({
      url: this.data.serverUrl + 'weixin/getHouseIfo.action',
      success: function(res) {
        that.setData({
          houseList: res.data.object,
        })
      }
    })

    this.setData({
      reportData: ReportDataSync, //菜单数据 
      subMenuDisplay: initSubMenuDisplay, //一级 
      subMenuHighLight: initSubMenuHighLight //二级 
    })
    this.loadDropDownMenu()
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
  //一级菜单点击 
  tapMainMenu: function(e) {
    //获取当前一级菜单标识 
    var index = parseInt(e.currentTarget.dataset.index);
    var reportDataArray = this.data.reportData
    //改变显示状态 
    for (var i = 0; i < initSubMenuDisplay.length; i++) {
      if (i == index) {
        if (this.data.subMenuDisplay[index] == "show") {
          initSubMenuDisplay[index] = 'hidden'
          reportDataArray[i].imageSrc = "../../images/right1.png"
        } else {
          initSubMenuDisplay[index] = 'show'
          reportDataArray[i].imageSrc = "../../images/down.png"
        }
      } else {
        initSubMenuDisplay[i] = 'hidden'
        reportDataArray[i].imageSrc = "../../images/right1.png"
      }
    }
    this.setData({
      subMenuDisplay: initSubMenuDisplay,
      reportData: reportDataArray
    })
  },

  //二级菜单点击 
  tapSubMenu: function(e) {
    //隐藏所有一级菜单 
    //this.setData({ 
    //subMenuDisplay: initSubMenuDisplay() 
    //}); 
    // 当前二级菜单的标识 
    var that = this
    var indexArray = e.currentTarget.dataset.index.split('-');
    var reportDataArray = this.data.reportData
    console.log(e.currentTarget.dataset.index.split('-'))
    if (indexArray[0] == 1) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        fwlx: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].value,
        reportData: reportDataArray
      })
    } else if (indexArray[0] == 2) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        fwgj: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].value,
        reportData: reportDataArray
      })
    } else if (indexArray[0] == 3) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        kfyq: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].value,
        reportData: reportDataArray
      })
    } else if (indexArray[0] == 4) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        fwzx: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].value,
        reportData: reportDataArray
      })
    } else if (indexArray[0] == 0) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        area: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].value,
        reportData: reportDataArray
      })
    }
    reportDataArray[indexArray[0]].imageSrc = "../../images/right1.png"
    initSubMenuDisplay[indexArray[0]] = "hidden"
    this.setData({
      reportData: reportDataArray,
      subMenuDisplay: initSubMenuDisplay
    })
    if (indexArray[0] != 0) {
      wx.request({
        url: this.data.serverUrl + 'weixin/getHouseIfoByCondition.action',
        data: {
          mztype: this.data.fwlx,
          houseLayout: this.data.fwgj,
          housekf: this.data.kfyq,
          housezx: this.data.fwzx
        },
        success(res) {
          console.log(res)
          if (res.data.status == "1") {
            that.setData({
              houseList: res.data.object,
            })
          } else {
            that.setData({
              houseList: []
            })
          }

        }
      })
    }
  },
  /// <summary> 
  /// 初始化DropDownMenu 
  /// 1.一级目录 initSubMenuDisplay ：['hidden'] 
  /// 2.二级目录 initSubMenuHighLight ：[['',''],['','','','']]] 
  /// </summary> 
  loadDropDownMenu: function() {
    for (var i = 0; i < this.data.reportData.length; i++) {
      //一级目录 
      initSubMenuDisplay.push('hidden')
      //二级目录 
      var report = []
      for (var j = 0; j < this.data.reportData[i].chilItem.length; j++) {
        report.push([''])
      }
      initSubMenuHighLight.push(report)
    }
    this.setData({
      subMenuDisplay: initSubMenuDisplay,
      subMenuHighLight: initSubMenuHighLight
    })
  },
  searchNearHouse: function(e) {
    var that = this
    qqmapsdk.geocoder({
      address: this.data.targetArea,
      success: function(res) {
        console.log(res)
        if(res.result.level<3){
          wx.showModal({
            title: '错误信息',
            content: '查无此地点',
          })
          return
        }
        wx.request({
          url: that.data.serverUrl + 'weixin/getHouseListInArea.action',
          data: {
            longitude: res.result.location.lng,
            latitude: res.result.location.lat,
            city: that.data.region[1],
            district: that.data.region[2],
            area: that.data.area
          },
          success: function(res) {
            console.log(res)
            that.setData({
              houseList: res.data.object
            })
          }
        })
      },
      fail: function(res) {
        console.log(res)
        wx.showModal({
          title: '错误信息',
          content: '查无此地点',
        })
      }
    })
  },
  targetAreaInput: function(e) {
    this.setData({
      targetArea: this.data.userCity + this.data.district + e.detail.value
    })
  },
  bindRegionChange:function(e){
    this.setData({
      region: e.detail.value
    })
  }
})