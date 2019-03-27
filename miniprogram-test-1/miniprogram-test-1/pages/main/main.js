// pages/main/main.js
const app = getApp()
var myDate = new Date();//获取系统当前时间
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    nick_name:"",
    daily_caluli:0,
    today_caluli:1000,
    color:"blue",
    breakfast:1338,
    lunch:1300,
    dinner:1000,
    breakfast_color: "whitesmoke",
    lunch_color: "whitesmoke",
    dinner_color: "whitesmoke",
    breakfast_font:"white",
    lunch_font: "white",
    dinner_font: "white",
    year:2019,
    month:0,
    day:0,
    date:"",
    percent:0,
    today_color:"black"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var _this = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        year:myDate.getFullYear(),
        month:myDate.getMonth()+1,
        day:myDate.getDate(),
        date: myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate()
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
            hasUserInfo: true,
          })
          console.log(this.data)
        }
      })
    }
    
    wx.request({
      url: 'http://localhost:8080/chichichi/MainServlet',
      data: {
        origin: "main",
        username: app.globalData.openid,
        info: this.data.userInfo,
        date:this.data.date,
      },
      method: "GET",
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        console.log("成功res"+res.data.split(" ")[0])
        _this.setData({
          daily_caluli:res.data.split(" ")[0],
          breakfast: res.data.split(" ")[1],
          lunch: res.data.split(" ")[2],
          dinner: res.data.split(" ")[3],
          today_caluli: parseInt(res.data.split(" ")[1]) + parseInt(res.data.split(" ")[2]) + parseInt(res.data.split(" ")[3]),
          percent: (parseInt(res.data.split(" ")[1]) + parseInt(res.data.split(" ")[2]) + parseInt(res.data.split(" ")[3])) / parseInt(res.data.split(" ")[0])
        })
        console.log(_this.data)
        if (res.data.split(" ")[1]!="0"){
          _this.setData({
            breakfast_color: "#87CEEB"
          })
        }
        else{
          _this.setData({
            breakfast_font: "black"
          })
        }
        if (res.data.split(" ")[2] != "0") {
          _this.setData({
            lunch_color: "#87CEEB"
          })
        }
        else {
          _this.setData({
            lunch_font: "black"
          })
        }
        if (res.data.split(" ")[3] != "0") {
          _this.setData({
            dinner_color: "#87CEEB"
          })
        }
        else {
          _this.setData({
            dinner_font: "black"
          })
        }
        if (_this.data.percent>1){
          _this.setData({
            percent:1,
            today_color:"red"
          })
          console.log(_this.data)
        }
      },
      fail: function (res) {
        console.log("失败");
      }
    })
  },
  caloriecal1: function () {
    wx.navigateTo({
      url: '../meal-calorie/meal-calorie?meal=breakfast&date='+this.data.date,
    })
  },
  caloriecal2: function () {
    wx.navigateTo({
      url: '../meal-calorie/meal-calorie?meal=lunch&date=' + this.data.date,
    })
  },
  caloriecal3: function () {
    wx.navigateTo({
      url: '../meal-calorie/meal-calorie?meal=dinner&date=' + this.data.date,
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

  }
})