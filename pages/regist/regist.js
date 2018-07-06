// pages/regist/regist.js
import qiniu from '../../libs/qiniuUploader.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    displayType: "hide",
    nameDisplayType: "hide",
    userName: "",
    password: "",
    identifyCode: "",
    userType: 0,
    userPhoneNum: "",
    userImg: "",
    userAddress: "",
    secondPassword: "",
    radioItems: [{
        name: '房客',
        value: '0',
        checked: true
      },
      {
        name: '房东',
        value: '1'
      }
    ],
    ageList: "",
    ageIndex: 22,
    serverUrl: getApp().globalData.serverUrl,
    openId: getApp().globalData.openId,
    files:[],
    uptoken:null,
    upload_url: getApp().globalData.upload_url,
    identifyStatusImg:null,
    getIdentifyButtonDisabled:"",
    getIdentifyButtonText:"获取验证码",
    submitButtonDisabled:"true",
    userIfo:null,
    imageUpdateStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var ageList = new Array()
    var that = this
    this.setData({
      openId: getApp().globalData.openId
    })
    for (var i = 1; i <= 100; i++) {
      ageList[i] = i
    }
    this.setData({
      ageList: ageList,
    })
    wx.request({
      url: this.data.serverUrl+'weixin/getUserIfoByOpenID.action',
      data:{
        openID:this.data.openId
      },
      success:function(res){
        console.log(res)
        var files = new Array()
        files.push(res.data.object.userImg)
        if(files.length>0){
          that.data.imageUpdateStatus = true
        }
        var radioItems = that.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
          radioItems[i].checked = radioItems[i].value == res.data.object.userType;
        }
        that.setData({
          userIfo:res.data.object,
          userName:res.data.object.userName,
          ageIndex:res.data.object.userAge,
          userType:res.data.object.userType,
          files:files,
          userPhoneNum:res.data.object.userPhoneNum,
          radioItems: radioItems,
          userType: res.data.object.userType
        })
      }
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
  nameInput: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
    if (!this.data.secondPassword == "") {
      this.validPassword()
    }
  },
  secondPasswordInput: function(e) {
    this.setData({
      secondPassword: e.detail.value
    })
    if (!this.data.password == "") {
      this.validPassword()
    }
  },
  userPhoneNumInput: function(e) {
    this.setData({
      userPhoneNum: e.detail.value
    })
  },
  identifyCodeInput: function(e) {
    if (this.data.identifyCode != e.detail.value){
      this.setData({
        identifyStatusImg:"../../images/cuo.png",
        submitButtonDisabled:"true"
      })
    }else{
      this.setData({
        identifyStatusImg: "../../images/dui.png",
        submitButtonDisabled:""
      })
    }
  },
  /**
   * 用于密码验证
   */
  validPassword: function() {
    if (this.data.password == this.data.secondPassword) {
      this.setData({
        displayType: 'hide'
      })
    } else {
      this.setData({
        displayType: 'show'
      })
    }
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems,
      userType: e.detail.value
    });
  },
  bindAgeChange: function(e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      ageIndex: e.detail.value
    })
  },
  regist: function(e) {
    var that = this
    if (this.data.userPhoneNum != "" && this.data.identfyCode != "") {
      if (!this.data.imageUpdateStatus){
        this.ImgUpload()
      }
      
      console.log(this.data.files)
      wx.request({
        url: this.data.serverUrl + 'weixin/updateUserIfo.action',
        data: {
          userName: this.data.userName,
          userPassword: this.data.password,
          userPhoneNum: this.data.userPhoneNum,
          identifyCode: this.data.identifyCode,
          userAddress: this.data.userAddress,
          userAge: this.data.ageIndex,
          userType: this.data.userType,
          userImg: this.data.files[0],
          openID: this.data.openId
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res)
          if (res.data.status == "1") {
            getApp().globalData.userIfo = res.data.object
          }
          wx.showModal({
            content: res.data.info,
            showCancel: false,
            success: function() {
              wx.navigateBack({
                
              })
            }
          })
          

        },
        fail: function(res) {},
        complete: function(res) {},
      })
    } else {
      wx.showModal({
        content: "请填写手机号和验证码！",
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
  },
  chooseImage: function (e) {
    var that = this;
    var wechatma = [];
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        if(that.data.files.length!=0){
          that.data.files.pop()
        }
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        }); 
      }
    })
  },
  previewImage: function (e) {
    console.log("files:"+this.data.files)
    wx.previewImage({
      
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  login:function(e){
    wx.redirectTo({
      url: '../login/login',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  ImgUpload:function(e){
    var _this = this
    qiniu.upload(this.data.files[0], function (res) {
     _this.data.files.pop()
     _this.data.files.push("http://"+res.imageURL)
     console.log(_this.data.files)
    }, function (error) {
      console.log('error: ' + error);
    }, {
        region: 'NCN',
        domain: _this.data.upload_url,
        uptoken: _this.data.uptoken // 由其他程序生成七牛 uptoken
      })
  },
  sendIdentifyCode:function(e){
    var that = this
    var time = 60
    if(this.data.userPhoneNum==""){
      wx.showModal({
        content: "请填写手机号！",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }else{
    wx.request({
      url: this.data.serverUrl +"weixin/getIdentifyCode.action",
      data:{
        userPhoneNum:this.data.userPhoneNum
      },
      success:function(res){
        console.log(res)
        that.setData({
          identifyCode:res.data.object
        })
      }
    })
      var interval = setInterval(function(){
        time--
        that.setData({
          getIdentifyButtonDisabled:"true",
          getIdentifyButtonText:time + "s后重试"
        })
        
        if(time<0){
          clearInterval(interval)
          that.setData({
            getIdentifyButtonDisabled : "",
            getIdentifyButtonText : "重新发送"
          })
        }
      },1000)
    }
  }
})