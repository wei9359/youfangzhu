// pages/houseIfo/houseHRent/houseHRent.js
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
    imageSrc: "/images/right1.png",
    bindtap: "tapMainMenu"

  },
  {
    reportType: "筛选",
    chilItem: [],
    imageSrc: "/images/right1.png",
    bindtap: "filter"
  }
  // {
  //   reportType: "房屋格局",
  //   chilItem: [{
  //     ID: 11,
  //     Name: "全部",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: ""
  //   },
  //   {
  //     ID: 1,
  //     Name: "一室一厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "一室一厅"
  //   },
  //   {
  //     ID: 2,
  //     Name: "两室一厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "两室一厅"
  //   },
  //   {
  //     ID: 3,
  //     Name: "三室一厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "三室一厅"
  //   },
  //   {
  //     ID: 4,
  //     Name: "三室两厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "三室两厅"
  //   },
  //   {
  //     ID: 5,
  //     Name: "四室一厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "四室一厅"
  //   },
  //   {
  //     ID: 6,
  //     Name: "四室两厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "四室两厅"
  //   },
  //   {
  //     ID: 7,
  //     Name: "四室三厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "四室三厅"
  //   },
  //   {
  //     ID: 8,
  //     Name: "五室一厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "五室一厅"
  //   },
  //   {
  //     ID: 9,
  //     Name: "五室两厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "五室两厅"
  //   },
  //   {
  //     ID: 10,
  //     Name: "五室三厅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 2,
  //     value: "五室三厅"
  //   }
  //   ],
  //   imageSrc: "/images/right1.png"
  // },
  // {
  //   reportType: "看房要求",
  //   chilItem: [{
  //     ID: 3,
  //     Name: "全部",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 3,
  //     value: ""
  //   },
  //   {
  //     ID: 1,
  //     Name: "随时看房",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 3,
  //     value: "随时看房"
  //   },
  //   {
  //     ID: 2,
  //     Name: "周末看房",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 3,
  //     value: "周末看房"
  //   }
  //   ],
  //   imageSrc: "/images/right1.png"
  // },
  // {
  //   reportType: "房屋装修",
  //   chilItem: [{
  //     ID: 1,
  //     Name: "全部",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 4,
  //     value: ""
  //   },
  //   {
  //     ID: 1,
  //     Name: "毛胚",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 4,
  //     value: "毛胚"
  //   },
  //   {
  //     ID: 2,
  //     Name: "简装",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 4,
  //     value: "简装"
  //   },
  //   {
  //     ID: 3,
  //     Name: "精装",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 4,
  //     value: "精装"
  //   }
  //   ],
  //   imageSrc: "/images/right1.png"
  // },
  // {
  //   reportType: "房屋类型",
  //   chilItem: [{
  //     ID: 3,
  //     Name: "全部",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 5,
  //     value: ""
  //   },
  //   {
  //     ID: 1,
  //     Name: "普通住宅",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 5,
  //     value: 0
  //   },
  //   {
  //     ID: 2,
  //     Name: "公寓",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 5,
  //     value: 1
  //   },
  //   {
  //     ID: 3,
  //     Name: "商住房",
  //     ReportUrl: "DailyReport.aspx",
  //     Type: 5,
  //     value: 2
  //   }
  //   ],
  //   imageSrc: "/images/right1.png"
  // }
]
//定义字段 
var initSubMenuDisplay = []
var initSubMenuHighLight = []

var animation

var filterList = [0, 0, 0, 0, 0, 0, 0]
var filterList1 = [0, 0, 0, 0, 0, 0, 0]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl: getApp().globalData.serverUrl,
    houseList: null,
    reportData: null,
    subMenuDisplay: null,
    subMenuHighLight: null,
    GJIndex: 0,
    GJList: ["全部", "一室一厅", "两室一厅", "三室一厅", "三室两厅", "四室一厅", "四室两厅", "四室三厅", "五室一厅", "五室两厅", "五室三厅"],
    KFIndex: 0,
    KFList: ["全部", "随时看房", "周末看房"],
    //房屋车位
    CWIndex: 0,
    CWList: ["全部", "无", "有"],
    //装修情况
    ZXIndex: 0,
    ZXList: ["全部", "毛呸", "简装", "精装"],
    //租房付款方式
    ZFIndex: 0,
    ZFList: ["全部", "月付", "年付"],
    LXIndex: 0,
    LXList: ["全部", "普通住宅", "公寓", "商住房"],
    ZFPriceIndex: 0,
    ZFPriceList: ["全部", "500以下", "500-1000", "1000-2000", "两千以上"],
    show: false,
    animationData: null,
    userProvince: getApp().globalData.province,
    userCity: getApp().globalData.city,
    userDistrict: getApp().globalData.district,
    region: [],
    qqmapsdk: null,
    area: 100000,
    beginRow:1,
    pageSize: null,
    hasMorePage: true,
    targetArea:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var region = new Array()
    var beginRow = this.data.beginRow
    var hasMorePage = this.data.hasMorePage
    var pageSize = getApp().globalData.pageSize
    getApp().getLocal().then(function (res) {
      region.push(getApp().globalData.province)
      region.push(getApp().globalData.city)
      region.push(getApp().globalData.district)
      that.setData({
        userProvince: getApp().globalData.province,
        userCity: getApp().globalData.city,
        userDistrict: getApp().globalData.district,
        region: region,
        qqmapsdk: getApp().globalData.qqmapsdk,
        pageSize:pageSize,
        targetArea: region[1] + region[2]
      })
      that.data.qqmapsdk.geocoder({
        address: that.data.targetArea,
        success: function (res) {
          console.log(res)
          if (res.result.level < 2) {
            wx.showModal({
              title: '错误信息',
              content: '查无此地点',
            })
            return
          }

          wx.showLoading({
            title: '正在加载中',
          })
          wx.request({
            url: that.data.serverUrl + 'weixin/getHouseIfoByCondition.action',
            data: {
              province: that.data.userProvince,
              city: that.data.userCity,
              county: that.data.userDistrict,
              longitude: res.result.location.lng,
              latitude: res.result.location.lat,
              area: that.data.area,
              mztype: 1,
              beginRow: 0,
              houseLayout: that.data.GJList[that.data.GJIndex],
              housekf: that.data.KFList[that.data.KFIndex],
              housecw: that.data.CWIndex,
              housezx: that.data.ZXList[that.data.ZXIndex],
              zffkfs: that.data.ZFIndex,
              houseType: that.data.LXIndex,
              ZFPrice: that.data.ZFPriceIndex,
            },
            success: function (res) {
              console.log(res)
              if (res.data.object.length < pageSize) {
                hasMorePage = false
              }
              beginRow = beginRow + 1
              that.setData({
                houseList: res.data.object,
                beginRow: beginRow,
                hasMorePage: hasMorePage
              })
            },
            complete: function (res) {
              wx.hideLoading()
            }
          })
        }

      })
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
    this.getList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var beginRow = this.data.beginRow
    var hasMorePage = this.data.hasMorePage
    var pageSize = this.data.pageSize
    var houseList = this.data.houseList
    var that = this
    console.log("下啦到底啦")
    console.log(hasMorePage)
    if (hasMorePage) {
      this.getList()
    }else{
      wx.showModal({
        title: '信息',
        content: '没有更多数据',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //一级菜单点击 
  tapMainMenu: function (e) {
    //获取当前一级菜单标识 
    var index = parseInt(e.currentTarget.dataset.index);
    var reportDataArray = this.data.reportData
    //改变显示状态 
    for (var i = 0; i < initSubMenuDisplay.length; i++) {
      if (i == index) {
        if (this.data.subMenuDisplay[index] == "show") {
          initSubMenuDisplay[index] = 'hidden'
          reportDataArray[i].imageSrc = "/images/right1.png"
        } else {
          initSubMenuDisplay[index] = 'show'
          reportDataArray[i].imageSrc = "/images/down.png"
        }
      } else {
        initSubMenuDisplay[i] = 'hidden'
        reportDataArray[i].imageSrc = "/images/right1.png"
      }
    }
    this.setData({
      subMenuDisplay: initSubMenuDisplay,
      reportData: reportDataArray
    })
  },

  //二级菜单点击 
  tapSubMenu: function (e) {
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
    reportDataArray[indexArray[0]].imageSrc = "/images/right1.png"
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
  loadDropDownMenu: function () {
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
  searchNearHouse: function (e) {
    var that = this
    console.log(this.data.targetArea)
    this.getList()
  },
  filter: function (e) { //点击筛选事件
    var animation = wx.createAnimation({ //创建动画
      duration: 1000,
      timingFunction: 'ease',
      width: 300,
      height: 800,
      top: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#fff',
      opcity: 0.5
    })

    this.animation = animation

    animation.translateX(-100 + 'vh').step() //动画效果向右滑动100vh

    this.setData({
      animationData: animation.export(),
      show: true
    })
  },
  GJChange: function (e) {
    this.setData({
      GJIndex: e.detail.value
    })
    filterList1[0] = e.detail.value
  },
  KFChange: function (e) {
    this.setData({
      KFIndex: e.detail.value
    })
    filterList1[1] = e.detail.value
  },
  CWChange: function (e) {
    this.setData({
      CWIndex: e.detail.value
    })
    filterList1[2] = e.detail.value
  },
  ZXChange: function (e) {
    this.setData({
      ZXIndex: e.detail.value
    })
    filterList1[3] = e.detail.value
  },
  ZFChange: function (e) {
    this.setData({
      ZFIndex: e.detail.value
    })
    filterList1[4] = e.detail.value
  },
  LXChange: function (e) {
    this.setData({
      LXIndex: e.detail.value
    })
    filterList1[5] = e.detail.value
  },
  ZFPriceChange: function (e) {
    this.setData({
      ZFPriceIndex: e.detail.value
    })
    filterList1[6] = e.detail.value
  },
  cancel: function (e) {

    filterList1 = filterList
    filterList1 = filterList.concat()
    this.setData({
      GJIndex: filterList[0],
      KFIndex: filterList[1],
      CWIndex: filterList[2],
      ZXIndex: filterList[3],
      ZFIndex: filterList[4],
      LXIndex: filterList[5],
      ZFPriceIndex: filterList[6]
    })
    this.shouhui()
  },
  ensure: function (e) {
    var that = this
    filterList = filterList1.concat()
    this.setData({
      GJIndex: filterList[0],
      KFIndex: filterList[1],
      CWIndex: filterList[2],
      ZXIndex: filterList[3],
      ZFIndex: filterList[4],
      LXIndex: filterList[5],
      ZFPriceIndex: filterList[6]
    })
    this.shouhui()
    this.getList()
  },
  shouhui: function (e) {
    var animation = wx.createAnimation({ //创建动画
      duration: 1000,
      timingFunction: 'ease',
      width: 300,
      height: 800,
      top: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#fff',
      opcity: 0.5
    })

    this.animation = animation

    this.animation.translateX(100 + 'vh').step()
    this.setData({
      animationData: animation.export(),
      show: false
    })
  },
  targetAreaInput: function (e) {
    this.setData({
      targetArea: this.data.userCity + this.data.userDistrict + e.detail.value
    })
  },
  bindRegionChange: function (e) {
    var region = new Array()
    region = e.detail.value
    this.setData({
      region: region,
      userProvince:region[0],
      userCity:region[1],
      userDistrict:region[2]
    })
    this.getList()
    
  },
  getList: function (e) {
    var that = this
    var beginRow = 0
    var hasMorePage = true
    var pageSize = getApp().globalData.pageSize
    this.data.qqmapsdk.geocoder({
      address: this.data.targetArea,
      success: function (res) {
        console.log(res)
        if (res.result.level < 2) {
          wx.showModal({
            title: '错误信息',
            content: '查无此地点',
          })
          return
        }

        wx.showLoading({
          title: '正在加载中',
        })
        wx.request({
          url: that.data.serverUrl + 'weixin/getHouseIfoByCondition.action',
          data: {
            province: that.data.userProvince,
            city: that.data.userCity,
            county: that.data.userDistrict,
            longitude: res.result.location.lng,
            latitude: res.result.location.lat,
            area: that.data.area,
            mztype: 1,
            beginRow: 0,
            houseLayout: that.data.GJList[that.data.GJIndex],
            housekf: that.data.KFList[that.data.KFIndex],
            housecw: that.data.CWIndex,
            housezx: that.data.ZXList[that.data.ZXIndex],
            zffkfs: that.data.ZFIndex,
            houseType: that.data.LXIndex,
            ZFPrice: that.data.ZFPriceIndex,
          },
          success: function (res) {
            console.log(res)
            var houseList = new Array()
            if (res.data.object.length < pageSize) {
              hasMorePage = false
            }
            beginRow = beginRow + 1
            houseList = that.data.houseList.concat(res.data.object)
            that.setData({
              houseList: houseList,
              beginRow: beginRow,
              hasMorePage: hasMorePage
            })
          },
          complete: function (res) {
            wx.hideLoading()
          }
        })
      }

    })
  }

})