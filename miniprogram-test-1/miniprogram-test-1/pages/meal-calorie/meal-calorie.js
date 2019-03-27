// pages/meal-calorie/meal-calorie.js
const app = getApp()
var hadfood = []
Page({

  data: {
    meal:"breakfast",
    src:"",
    src1:"",
    src2:"",
    src3: "",
    src4: "",
    src5: "",
    src1state: true,
    src2state: true,
    src3state: true,
    src4state: true,
    src5state: true,
    food1:"",
    food2:"",
    food3: "",
    food4: "",
    food5: "",
    calorie1:"",
    calorie2:"",
    calorie3: "",
    calorie4: "",
    calorie5: "",
    srcinserver:"",
    food1_input:0,
    food2_input: 0,
    food3_input: 0,
    food4_input: 0,
    food5_input: 0,
    food_all:0,
    buttom_button:true,
    keshu: ["50g", "100g", "150g", "200g", "250g", "300g", "350g", "400g", "450g", "500g", "550g", "600g", "650g", "700g", "750g", "800g", "850g", "900g", "950g", "1000g"],
    string1: "点击选择克数",
    string2: "点击选择克数",
    string3: "点击选择克数",
    string4: "点击选择克数",
    string5: "点击选择克数",
    allstring:"",
    date:"2019-3-22",
    isneverhere:false,
    hadfood:[]
  },

  changekeshu1:function(e){
    var food_all = (e.detail.value * 1 + 1) / 2 * this.data.calorie1
    this.setData({
      food1_input: (e.detail.value*1 + 1) / 2 * this.data.calorie1,
      string1: this.data.keshu[e.detail.value] + "  = " + (e.detail.value*1+1)/2 * this.data.calorie1+"大卡",
      food_all: this.data.food2_input + this.data.food3_input + this.data.food4_input + this.data.food5_input + this.data.food1_input,
      allstring: "(今日" + this.data.meal + ":" +food_all + "卡)"
    })
    console.log(e.detail)
    console.log(this.data)
  },
  changekeshu2: function (e) {
    var food_all = (e.detail.value * 1 + 1) / 2 * this.data.calorie2 + this.data.food1_input
    this.setData({
      food2_input: (e.detail.value * 1 + 1) / 2 * this.data.calorie2,
      string2: this.data.keshu[e.detail.value] + "  = " + (e.detail.value * 1 + 1) / 2 * this.data.calorie2 + "大卡",
      food_all: this.data.food2_input + this.data.food3_input + this.data.food4_input + this.data.food5_input + this.data.food1_input,
      allstring: "(今日" + this.data.meal + ":" + food_all + "卡)"
    })
    console.log(e.detail)
    console.log(this.data)
  },
  changekeshu3: function (e) {
    var food_all = (e.detail.value * 1 + 1) / 2 * this.data.calorie3 + this.data.food1_input+this.data.food2_input
    this.setData({
      food3_input: (e.detail.value * 1 + 1) / 2 * this.data.calorie3,
      string3: this.data.keshu[e.detail.value] + "  = " + (e.detail.value * 1 + 1) / 2 * this.data.calorie3 + "大卡",
      food_all: this.data.food2_input + this.data.food3_input + this.data.food4_input + this.data.food5_input + this.data.food1_input,
      allstring: "(今日" + this.data.meal + ":" + food_all + "卡)"
    })
    console.log(e.detail)
    console.log(this.data)
  },
  changekeshu4: function (e) {
    var food_all = (e.detail.value * 1 + 1) / 2 * this.data.calorie4 + this.data.food1_input+this.data.food2_input+this.data.food3_input
    this.setData({
      food4_input: (e.detail.value * 1 + 1) / 2 * this.data.calorie4,
      string4: this.data.keshu[e.detail.value] + "  = " + (e.detail.value * 1 + 1) / 2 * this.data.calorie4 + "大卡",
      food_all: this.data.food2_input + this.data.food3_input + this.data.food4_input + this.data.food5_input + this.data.food1_input,
      allstring: "(今日" + this.data.meal + ":" + food_all + "卡)"
    })
    console.log(e.detail)
    console.log(this.data)
  },
  changekeshu5: function (e) {
    var food_all = (e.detail.value * 1 + 1) / 2 * this.data.calorie5 + this.data.food1_input + this.data.food2_input + this.data.food3_input+this.data.food4_input
    this.setData({
      food5_input: (e.detail.value * 1+1) / 2 * this.data.calorie5,
      string5: this.data.keshu[e.detail.value] + "  = " + (e.detail.value * 1 + 1) / 2 * this.data.calorie5 + "大卡",
      food_all: this.data.food2_input + this.data.food3_input + this.data.food4_input + this.data.food5_input + this.data.food1_input,
      allstring: "(今日" + this.data.meal + ":" + food_all + "卡)"
    })
    console.log(e.detail)
    console.log(this.data)
  },


  onLoad: function (options) {
    console.log(options)
    hadfood = []
    this.setData({
      meal:options.meal,
      date:options.date
    })
    var _this=this
    wx.request({
      url: 'http://localhost:8080/chichichi/CalculatorOnloadServlet',
      data: {
        date: _this.data.date,
        username: app.globalData.openid,
        meal: _this.data.meal,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        
      },
      fail: function (res) {
        console.log("失败");
      },
      complete:function(res){
        var cust = res.data
        var custPhones = cust.split(' ') 　　　
        var custPhoneArr = hadfood
        for (var i = 0; (i+2) < custPhones.length; i++) {
          var obj = {
            food: custPhones[i],
            calorie_100g: custPhones[i + 1],
            keshu: custPhones[i + 2],       
          }
          custPhoneArr.push(obj)
          i += 2
        }
        console.log(hadfood)
        _this.setData({
          hadfood: hadfood
        })
      },
      
    })
  },
  usecamara: function(opyions){
    var _this = this
    if (_this.data.src1state || _this.data.src2state ||_this.data.src3state || _this.data.src4state || _this.data.src5state){
      wx.chooseImage({
        count: 9, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function (res) {
          console.log(res)
          if(_this.data.src1state){
            _this.setData({
              src1: res.tempFilePaths[0],
              src: res.tempFilePaths[0]
            })
          }
          else if(_this.data.src2state){
            _this.setData({
              src2: res.tempFilePaths[0],
              src: res.tempFilePaths[0]
            })
          }
          else if (_this.data.src3state) {
            _this.setData({
              src3: res.tempFilePaths[0],
              src: res.tempFilePaths[0]
            })
          }
          else if (_this.data.src4state) {
            _this.setData({
              src4: res.tempFilePaths[0],
              src: res.tempFilePaths[0]
            })
          }
          else if (_this.data.src5state) {
            _this.setData({
              src5: res.tempFilePaths[0],
              src: res.tempFilePaths[0]
            })
          }
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
              if (_this.data.src1state) {
                _this.setData({
                  food1: res.data.result[0].name,
                  calorie1: res.data.result[0].calorie,
                  src1state: false,
                  buttom_button: false,
                })
                console.log(_this.data.food1)
              }
              else if (_this.data.src2state) {
                _this.setData({
                  food2: res.data.result[0].name,
                  calorie2: res.data.result[0].calorie,
                  src2state: false,
                })
              }
              else if (_this.data.src3state) {
                _this.setData({
                  food3: res.data.result[0].name,
                  calorie3: res.data.result[0].calorie,
                  src3state: false,
                })
              }
              else if (_this.data.src4state) {
                _this.setData({
                  food4: res.data.result[0].name,
                  calorie4: res.data.result[0].calorie,
                  src4state: false,
                })
              }
              else if (_this.data.src5state) {
                _this.setData({
                  food5: res.data.result[0].name,
                  calorie5: res.data.result[0].calorie,
                  src5state: false,
                })
              }
            }
          })
        },
        fail: function (res) {
          console.log(res)
        },
        complete: function (res) {
          console.log(_this.data)
          console.log(res)
          
          
        
        }
      })
    }
  },

  recordover:function(){
    var _this = this
    if (!_this.data.src1state) {
      wx.request({
        url: 'http://localhost:8080/chichichi/WX_storefoodinfoServlet', //本地服务器地址
        data: {
          date:_this.data.date,
          username: app.globalData.openid,
          meal: _this.data.meal,
          food:_this.data.food1,
          keshu:_this.data.food1_input,
          calorie_100g:_this.data.calorie1
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          console.log(_this.data)
        },
        fail: function (res) {
          console.log("失败");
        },
        complete: function (res) {
          console.log("wancheng")
        },
      })
    }
    if (!_this.data.src2state) {
      wx.request({
        url: 'http://localhost:8080/chichichi/WX_storefoodinfoServlet', //本地服务器地址
        data: {
          date: _this.data.date,
          username: app.globalData.openid,
          meal: _this.data.meal,
          food: _this.data.food2,
          keshu: _this.data.food2_input,
          calorie_100g: _this.data.calorie2
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          console.log(_this.data)
        },
        fail: function (res) {
          console.log("失败");
        },
        complete: function (res) {
          console.log("wancheng")
        },
      })
    }
    if (!_this.data.src3state) {
      wx.request({
        url: 'http://localhost:8080/chichichi/WX_storefoodinfoServlet', //本地服务器地址
        data: {
          date: _this.data.date,
          username: app.globalData.openid,
          meal: _this.data.meal,
          food: _this.data.food3,
          keshu: _this.data.food3_input,
          calorie_100g: _this.data.calorie3
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          console.log(_this.data)
        },
        fail: function (res) {
          console.log("失败");
        },
        complete: function (res) {
          console.log("wancheng")
        },
      })
    }
    if (!_this.data.src4state) {
      wx.request({
        url: 'http://localhost:8080/chichichi/WX_storefoodinfoServlet', //本地服务器地址
        data: {
          date: _this.data.date,
          username: app.globalData.openid,
          meal: _this.data.meal,
          food: _this.data.food4,
          keshu: _this.data.food4_input,
          calorie_100g: _this.data.calorie4
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          console.log(_this.data)
        },
        fail: function (res) {
          console.log("失败");
        },
        complete: function (res) {
          console.log("wancheng")
        },
      })
    }
    if (!_this.data.src5state) {
      wx.request({
        url: 'http://localhost:8080/chichichi/WX_storefoodinfoServlet', //本地服务器地址
        data: {
          date: _this.data.date,
          username: app.globalData.openid,
          meal: _this.data.meal,
          food: _this.data.food5,
          keshu: _this.data.food5_input,
          calorie_100g: _this.data.calorie5
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          console.log(_this.data)
        },
        fail: function (res) {
          console.log("失败");
        },
        complete: function (res) {
          console.log("wancheng")
        },
      })
    }
    wx.navigateTo({
      url: '../main/main?meal='+_this.data.meal+'&all_calorie='+_this.data.food_all,
    })
  }
})