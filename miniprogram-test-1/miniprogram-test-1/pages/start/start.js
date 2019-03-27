// pages/start/start.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    userInfo:{},
    nick_name: "刘小逗",
    exercise:"基本不动",
    action1BackgroundColor: "whitesmoke",
    action2BackgroundColor: "whitesmoke",
    action3BackgroundColor: "whitesmoke",
    action4BackgroundColor: "whitesmoke",
    sex_array: ['', '女', '男'],
    sex_index: 2,
    sex:"男",
    date: '1998-06-01',
    height_array:['','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195'],
    height_index:30,
    height:"179",
    weight_array: ['', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109'],
    weight_index:30,
    weight:"69",
    goal_array:['','增肌','减脂'],
    goal_index:2,
    goal:'维持',
    goal_num_array: ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    goal_num_index:1,
    goal_num:0,
    goal_day_array:['0','10','21','60','90','180','365'],
    goal_day_index:0,
    goal_day:'0',
    openid:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sex_index: e.detail.value,
      sex: this.data.sex_array[e.detail.value]
    })
  },
  bindPickerChangeHeight(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      height_index: e.detail.value,
      height: this.data.height_array[e.detail.value]
    })
    console.log("数据为", this.data)
  },
  bindPickerChangeWeight(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      weight_index: e.detail.value,
      weight: this.data.weight_array[e.detail.value]
    })
    console.log("数据为", this.data)
  },
  bindPickerChangeGoal(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      goal_index: e.detail.value,
      goal: this.data.goal_array[e.detail.value]
    })
  },
  bindPickerChangeGoalNum(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      goal_num_index: e.detail.value,
      goal_num: this.data.goal_num_array[e.detail.value]
    })
  },
  bindPickerChangeGoalDay(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      goal_day_index: e.detail.value,
      goal_day: this.data.goal_day_array[e.detail.value]
    })
    console.log(this.data)
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      date: e.detail.value
    });
    console.log("数据为",this.data)
  },
  Select1: function () {
    var bgColor = "#87CEEB";
    // 设置背景颜色数据
    this.setData({
      action1BackgroundColor: bgColor,
      action2BackgroundColor: "whitesmoke",
      action3BackgroundColor: "whitesmoke",
      action4BackgroundColor: "whitesmoke",
      exercise:"基本不动"
    });
  },
  Select2: function () {
    var bgColor = "#87CEEB";
    // 设置背景颜色数据
    this.setData({
      action1BackgroundColor: "whitesmoke",
      action2BackgroundColor: bgColor,
      action3BackgroundColor: "whitesmoke",
      action4BackgroundColor: "whitesmoke",
      exercise:"轻度运动"
    });
  },
  Select3: function () {
    var bgColor = "#87CEEB";
    // 设置背景颜色数据
    this.setData({
      action1BackgroundColor: "whitesmoke",
      action2BackgroundColor: "whitesmoke",
      action3BackgroundColor: bgColor,
      action4BackgroundColor: "whitesmoke",
      exercise:"中度运动"
    });
  },
  Select4: function () {
    var bgColor = "#87CEEB";
    // 设置背景颜色数据
    this.setData({
      action1BackgroundColor: "whitesmoke",
      action2BackgroundColor: "whitesmoke",
      action3BackgroundColor: "whitesmoke",
      action4BackgroundColor: bgColor,
      exercise:"运动频繁"
    });
  },
  bindViewTap:function(e){
   console.log(this.data);
   var openid1=""
   wx.getStorage({
     key: 'user',
     success: function(res) {
       openid1=res.data
       console.log(res)
       console.log("openid="+openid1)
      //  this.setData({
      //    openid: openid1
      //  });
     },
   })
   
   console.log(this.data)
    wx.request({
      url: 'http://localhost:8080/chichichi//WxServlet',
      data: {
        origin:"start",
        username: app.globalData.openid,
        sex: this.data.sex,
        age: this.data.date,
        height:this.data.height,
        weight:this.data.weight,
        exercise:this.data.exercise,
        goal:this.data.goal,
        goal_num:this.data.goal_num,
        goal_day:this.data.goal_day,
        nick_name:this.data.openid,
      },
      method: "GET",
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        console.log("成功")
      },
      fail: function (res) {
        console.log("失败");
      }
    })
    setTimeout(function(){
      wx.navigateTo({
        url: '../main/main',
      })
    },500)


  },

  //  * 生命周期函数--监听页面初次渲染完成
  //  */
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

  }
})