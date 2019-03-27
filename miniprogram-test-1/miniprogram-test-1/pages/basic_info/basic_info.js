// pages/basic_info/basic_info.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    height: 0,
    weight: 0,
    bmi: 0,
    age: 0,
    exercise: "几乎不动",
    goal: "",
    daily_caluli: 1000,
    sex:"女",
    goal_direction: "",
    goal_num: "",
    basic_caluli:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg1() {
    this.setData({
      select: !this.data.select
    })
  },
  bindShowMsg2() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect1(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      exercise: name,
      select: false
    })
  },
  mySelect2(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      sex: name,
      select: false
    })
  },
  Calculate: function(weight, height, sex, age) {
    if (sex == "男") {
      return 67 + 13.73 * weight + 5 * height - 6.9 * age;
    }
    else {
      return 661 + 9.6 * weight + 1.72 * height - 4.7 * age;
    }
  },
  formSubmit: function (e) {
    var dic = new Array();
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    this.setData({
      height: e.detail.value["weight"],
      weight: e.detail.value["height"],
      age:e.detail.value["age"],
      bmi: e.detail.value["weight"] / Math.pow((e.detail.value["height"] / 100), 2),
      goal_direction: e.detail.value["goal_direction"],
      goal_num: e.detail.value["goal_num"]
    })
    if (this.data.sex == "男") {
      this.data.basic_caluli = 67 + 13.73 * this.data.weight + 5 * this.data.height - 6.9 * this.data.age;
    }
    else {
      this.data.basic_caluli = 661 + 9.6 * this.data.weight + 1.72 * this.data.height - 4.7 * this.data.age;
    }
    console.log('表单数据为', this.data);
    wx.request({
      url: 'http://localhost:8080/chichichi/WxServlet',
      data: {
        username: app.globalData.openid,
        info: this.data
      },
      method:"GET",
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