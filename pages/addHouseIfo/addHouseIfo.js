// pages/addHouseIfo/addHouseIfo.js
import qiniu from '../../libs/qiniuUploader.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //纬度
    latitude: null,
    //精度
    longitude: null,
    //房屋位置
    houseLocal: "",
    //房屋首页照片
    files: [],
    //房间照片
    detailFiles:[],
    //房屋格局
    GJIndex: 0,
    GJList: ["一室一厅", "两室一厅", "三室一厅", "三室两厅", "四室一厅", "四室两厅", "四室三厅", "五室一厅", "五室两厅", "五室三厅"],
    //房屋车位
    CWIndex: 0,
    CWList: ["无", "有"],
    //看房要求
    KFIndex: 0,
    KFList: ["随时看房", "周末看房"],
    //装修情况
    ZXIndex: 0,
    ZXList: ["毛呸", "简装", "精装"],
    //房屋总楼层
    ZLCIndex: 3,
    ZLCList: null,
    //房屋所在楼层
    FLCIndex: 1,
    FLCList: null,
    //租房还是售房
    MZTypeIndex: 0,
    MZTypeList: ["租房", "售房"],
    //租房付款方式
    ZFIndex: 0,
    ZFList: ["月付", "年付"],
    //售房付款方式
    MFIndex: 0,
    MFList: ["一次付清", "首付+贷款"],
    //电梯还是步梯
    BDIndex: 0,
    BDList: ["电梯", "步梯"],
    housePartsList: [{
        name: "WIFI",
        value: "1"
      },
      {
        name: "床",
        value: "2"
      },
      {
        name: "衣柜",
        value: "3"
      },
      {
        name: "沙发",
        value: "4"
      },
      {
        name: "洗衣机",
        value: "5"
      },
      {
        name: "空调",
        value: "6"
      },
      {
        name: "桌椅",
        value: "7"
      },
      {
        name: "电视",
        value: "8"
      },
      {
        name: "暖气",
        value: "9"
      },
      {
        name: "热水器",
        value: "10"
      },
      {
        name: "抽油烟机",
        value: "11"
      },
      {
        name: "电磁炉",
        value: "12"
      },
      {
        name: "微波炉",
        value: "13"
      },
      {
        name: "卫生间",
        value: "14"
      },
      {
        name: "燃气灶",
        value: "15"
      },
      {
        name: "阳台",
        value: "16"
      }
    ],
    region: ['内蒙古自治区', '鄂尔多斯市', '东胜区'],
    housePrice:null,
    houseArea:null,
    houseDescribe:null,
    serverUrl:getApp().globalData.serverUrl,
    upload_url: getApp().globalData.upload_url,
    uptoken:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    var LCList = new Array()
    for (var i = 1; i < 40; i++) {
      LCList.push(i)
    }
    this.setData({
      ZLCList: LCList,
      FLCList: LCList
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this
    wx.request({
      url: this.data.serverUrl + 'weixin/qiniuToken.action',
      success: function (res) {
        console.log(res)
        that.setData({
          uptoken: res.data.uptoken
        })

      }
    })
    
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
  getLocation: function() {
    var that = this
    wx.authorize({
      scope: 'scope.userLocation',
    })
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
        that.setData({
          houseLocal: res.address,
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },
  housePriceInput:function(e){
    this.setData({
      housePrice: e.detail.value
    })
  },
  houseAreaInput:function(e){
    this.setData({
      houseArea:e.detail.value
    })
  },
  houseDescribeInput:function(e){
    this.setData({
      houseDescribe:e.detail.value
    })
  },
  chooseImage: function(e) {
    var that = this;
    var wechatma = [];
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        wechatma.push(res.tempFilePaths[0])
        that.setData({
          files: wechatma
        });
      }
    })
  },
  chooseDetailImage:function(e){
    var that = this;
    var wechatma = [];
    if(this.data.files.length<=9){
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.uploadOneImg(res.tempFilePaths[0])
        }
      })
    }else{
      wx.showModal({
        title: '警告信息',
        content: '只能添加9张照片',
      })
      return
    } 
  },
  previewDetailImage:function(e){
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.detailFiles // 需要预览的图片http链接列表
    })
  },
  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  GJChange: function(e) {
    this.setData({
      GJIndex: e.detail.value
    })
  },
  CWChange: function(e) {
    this.setData({
      CWIndex: e.detail.value
    })
  },
  KFChange: function(e) {
    this.setData({
      KFIndex: e.detail.value
    })
  },
  ZXChange: function(e) {
    this.setData({
      ZXIndex: e.detail.value
    })
  },
  ZLCChange: function(e) {
    this.setData({
      ZLCIndex: Number(e.detail.value)+1
    })
  },
  FLCChange: function(e) {
    this.setData({
      FLCIndex: Number(e.detail.value)+1
    })
  },
  MZTypeChange: function(e) {
    this.setData({
      MZTypeIndex: e.detail.value
    })
  },
  ZFChange: function(e) {
    this.setData({
      ZFIndex: e.detail.value
    })
  },
  MFChange: function(e) {
    this.setData({
      MFIndex: e.detail.value
    })
  },
  BDChange: function(e) {
    this.setData({
      BDIndex: e.detail.value
    })
  },
  housePartsChange: function(e) {
    var housePartsList = this.data.housePartsList,
      values = e.detail.value;
    for (var i = 0, lenI = housePartsList.length; i < lenI; ++i) {
      housePartsList[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (housePartsList[i].value == values[j]) {
          housePartsList[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      housePartsList: housePartsList
    });
  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  ImgUpload: function(e) {
    var that = this
    var imageFiles = new Array()
    var filesLength = this.data.files.length
    for (var i = 0; i < filesLength; i++) {
      qiniu.upload(this.data.files[i], function(res) {
        imageFiles.push("http://" + res.imageURL)
          that.setData({
            files: imageFiles
          })
          console.log(that.data.files)
      }, function(error) {
        console.log('error: ' + error);
      }, {
        region: 'NCN',
        domain: that.data.upload_url,
        uptoken: that.data.uptoken // 由其他程序生成七牛 uptoken
      })
    }
    
  },
  uploadOneImg:function(images){
    var that = this
    var image = new Array()
    qiniu.upload(images, function (res) {
      image.push("http://" + res.imageURL)
      that.setData({
        detailFiles:that.data.detailFiles.concat(image)
      })
    }, function (error) {
      console.log('error: ' + error);
    }, {
        region: 'NCN',
        domain: that.data.upload_url,
        uptoken: that.data.uptoken // 由其他程序生成七牛 uptoken
      })
  },
  submit:function(e){
    console.log("hhhhhh1" + this.data.files)
    console.log("hhhhhh2" + JSON.stringify(this.data.files))
    
    if(this.data.files.length==0){
      wx.showModal({
        title: '警告信息',
        content: '请添加图片',
      })
      return
    }
    if (this.data.houseLocal==null){
      wx.showModal({
        title: '警告信息',
        content: '请选择房屋位置',
      })
      return
    }
    if(this.data.housePrice==null){
      wx.showModal({
        title: '警告信息',
        content: '请填写房屋价格',
      })
      return
    }
    if (this.data.houseArea == null) {
      wx.showModal({
        title: '警告信息',
        content: '请填写房屋面积',
      })
      return
    }
    
    this.ImgUpload()
    wx.request({
      url: this.data.serverUrl +'weixin/addHouse.action',
      data:{
        userID:getApp().globalData.userIfo.userID,
        price:this.data.housePrice,
        mztype: this.data.MZTypeIndex,
        houseDescribe: this.data.houseDescribe,
        houseSize:this.data.houseArea,
        houseLocal: this.data.houseLocal,
        houseImgs: this.data.files[0],
        houseLayout: this.data.GJList[this.data.GJIndex],
        housezx: this.data.ZXList[this.data.ZXIndex],
        houselc: this.data.FLCIndex+"/"+this.data.ZLCIndex,
        housecw: this.data.CWIndex,
        housekf: this.data.KFList[this.data.KFIndex],
        zffkfs: this.data.ZFIndex,
        mffkfs: this.data.MFIndex,
        longitude: this.data.longitude,
        latitude: this.data.latitude,
        BDType: this.data.BDIndex,
        province: this.data.region[0],
        city:this.data.region[1],
        county:this.data.region[2],
        detailImages: JSON.stringify(this.data.detailFiles),
        houseParts: JSON.stringify(this.data.housePartsList)
      },
      success:function(res){
        wx.reLaunch({
          url:"../personal/personal"
        })
      }
    })
    
  },
  imagePut:function(e){
    return new Promise(function (resolve, reject) {
      for (var i = 0; i < filesLength; i++) {
        console.log("i1" + i)
        console.log("fl1" + filesLength - 1)
        console.log("1" + i == (filesLength - 1))
        qiniu.upload(this.data.files[i], function (res) {
          console.log("i2" + i)
          console.log("fl" + filesLength - 1)
          console.log("2" + i == (filesLength - 1))
          imageFiles.push("http://" + res.imageURL)
          if (i == (filesLength - 1)) {
            that.setData({
              files: imageFiles
            })
            that.submit()
          }
          
        }, function (error) {
          console.log('error: ' + error);
        }, {
            region: 'NCN',
            domain: that.data.upload_url,
            uptoken: that.data.uptoken // 由其他程序生成七牛 uptoken
          })
      }
    });
  }

})