// pages/test/test.js
var ReportDataSync = [{
    reportType: "类型",
    chilItem: [{
        ID: 1,
        Name: "整租",
        ReportUrl: "DailyReport.aspx",
        Type: 1
      },
      {
        ID: 2,
        Name: "合租",
        ReportUrl: "DailyReport.aspx",
        Type: 1
      },
      {
        ID: 3,
        Name: "售房",
        ReportUrl: "DailyReport.aspx",
        Type: 1
      }
    ],
    imageSrc: "../../images/right1.png"
  },
  {
    reportType: "房屋格局",
    chilItem: [{
        ID: 1,
        Name: "一室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2
      },
      {
        ID: 2,
        Name: "两室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2
      },
      {
        ID: 3,
        Name: "三室一厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2
      },
      {
        ID: 4,
        Name: "三室两厅",
        ReportUrl: "DailyReport.aspx",
        Type: 2
      }
    ],
    imageSrc: "../../images/right1.png"
  },
  {
    reportType: "看房要求",
    chilItem: [{
        ID: 1,
        Name: "随时看房",
        ReportUrl: "DailyReport.aspx",
        Type: 3
      },
      {
        ID: 2,
        Name: "周末看房",
        ReportUrl: "DailyReport.aspx",
        Type: 3
      }
    ],
    imageSrc: "../../images/right1.png"
  },
  {
    reportType: "房屋装修",
    chilItem: [{
        ID: 1,
        Name: "毛胚",
        ReportUrl: "DailyReport.aspx",
        Type: 4
      },
      {
        ID: 2,
        Name: "简装",
        ReportUrl: "DailyReport.aspx",
        Type: 4
      },
      {
        ID: 3,
        Name: "精装",
        ReportUrl: "DailyReport.aspx",
        Type: 4
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
    reportData: null,
    subMenuDisplay: null,
    subMenuHighLight: null,
    fwlx: null,
    fwgj: null,
    kfyq: null,
    fwzx: null,
    ZFIndex: 0,
    ZFList: ["月付", "年付"],
    GJIndex: 0,
    GJList: ["全部","一室一厅", "两室一厅", "三室一厅", "三室两厅", "四室一厅", "四室两厅", "四室三厅", "五室一厅", "五室两厅", "五室三厅"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    //改变显示状态 
    for (var i = 0; i < initSubMenuDisplay.length; i++) {
      if (i == index) {
        if (this.data.subMenuDisplay[index] == "show") {
          initSubMenuDisplay[index] = 'hidden'
        } else {
          initSubMenuDisplay[index] = 'show'
        }
      } else {
        initSubMenuDisplay[i] = 'hidden'
      }
    }
    this.setData({
      subMenuDisplay: initSubMenuDisplay
    })
  },

  //二级菜单点击 
  tapSubMenu: function(e) {
    //隐藏所有一级菜单 
    //this.setData({ 
    //subMenuDisplay: initSubMenuDisplay() 
    //}); 
    // 当前二级菜单的标识 
    var indexArray = e.currentTarget.dataset.index.split('-');
    var reportDataArray = this.data.reportData
    console.log(e.currentTarget.dataset.index.split('-'))
    if (indexArray[0] == 0) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        fwlx: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name,
        reportData: reportDataArray
      })
    } else if (indexArray[0] == 1) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        fwgj: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name,
        reportData: reportDataArray
      })
    } else if (indexArray[0] == 2) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        kfyq: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name,
        reportData: reportDataArray
      })
    } else if (indexArray[0] == 3) {
      reportDataArray[indexArray[0]].reportType = this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name
      this.setData({
        fwzx: this.data.reportData[indexArray[0]].chilItem[indexArray[1]].Name,
        reportData: reportDataArray
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
  filter: function(e) { //点击筛选事件
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
  }
})