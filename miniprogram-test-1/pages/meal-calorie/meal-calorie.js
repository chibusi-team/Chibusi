// pages/meal-calorie/meal-calorie.js
Page({

  data: {
    meal:"早餐",
    src:"",
    srcinserver:""
  },


  onLoad: function (options) {

  },
  usecamara: function(opyions){
    var _this = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        console.log(res)
        _this.setData({
          src: res.tempFilePaths[0]
        })

      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log(_this.data)
        console.log(res)
        wx.saveFile({
          tempFilePath: _this.data.src,
          success: function (res) {
            console.log(res)
            _this.setData({
              srcinserver: res.savedFilePath
            })
          }
        })
        wx.request({
          url: 'http://localhost:8080/chichichi/WX_chibusiuserinfoServlet', //本地服务器地址
          data: {
            username: "yjz",
            src: _this.data.src
          },
          method: 'GET',
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function (res) {
            console.log(res.data)
          },
          fail: function (res) {
            console.log("失败");
          },
          complete: function (res) {

          }
        })
      }
    })

  }
})