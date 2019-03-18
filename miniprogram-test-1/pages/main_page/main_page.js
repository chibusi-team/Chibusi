// pages/main_page/main_page.js
const app = getApp()
var isFirst = true;
var isSiFirst = true;
Page({
  data: {
    percent: "20",
    sw: 6,
    pc: '#00ff00',
    pbc: '#cccccc',
    isActive: true,
    isSi: false,
    option: { },
    daily_caluli:100,
  },

  onLoad: function (options) {
    console.log(options)
    this.setData({
      daily_caluli: options.kaluli,
      option: options,})
  },
  tocalculate: function(e){
    wx.navigateTo({
      url: '../calorie-calculate/calorie-calculate',
    })
  }
})
