Page({
  data: {
    height:0,
    weight:0,
    bmi:0,
    age:0,
    exercise:"",
    goal_direction:"",
    goal_num:"",
    daily_caluli:1000
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    this.setData({
      height:e.detail.value["weight"],
      weight: e.detail.value["height"],
      bmi: e.detail.value["weight"] / Math.pow((e.detail.value["height"]/100),2),
      goal_direction:e.detail.value["goal_direction"],
      goal_num: e.detail.value["goal_num"]
    })
    console.log('表单数据为', this.data);
  },
  bindViewTap(){
    wx.navigateTo({
      url: '../main_page/main_page?kaluli='+this.data.daily_caluli,
    })
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput(e) {
    const value = e.detail.value
    let pos = e.detail.cursor
    if (pos != -1) {
      // 光标在中间
      const left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  }
})