// pages/invatation/invitation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modelist: [{ message: '情感', color: '', ischoise: false }, { message: '生活', color: '', ischoise: false }, { message: '热爱', color: '', ischoise: false }, { message: '工作', color: '', ischoise: false }, { message: '嗨', color: '', ischoise: false }, { message: '学习', color: '', ischoise: false }, { message: '表白', color: '', ischoise: false }, { message: '其他', color: '', ischoise: false}],
    src:'../../picture/sky.jpg',

  },

  choise:function(res){
    var that = this
    var modelist = that.data.modelist
    var index = parseInt(res.currentTarget.dataset.index)
    var choise = modelist[index]
    var message = choise.message
    var backgroudcolor = choise.color
    var ischoise = choise.ischoise
    
    var y = 'modelist[' + index + '].ischoise'
    var c = 'modelist[' + index + '].color'
    console.log(y)
    if (ischoise){
      
      console.log('true')
      that.setData({
        [y]: false,
        [c]:''
      })
    }else{
      console.log('false')
      that.setData({
        [y]:true,
        [c]: 'greenyellow'
      })
    }

  },
  toResult:function(res){
    // 跳转页面的四种方法，第一种跳转到应用内的某一个页面可以用wx.navigateBack返回第二种：跳转到某一个页面
    // 使用组件<navigate url:''>点击</navigate>第四种wx.switchTabBaar()
    wx.navigateTo({
      url: '../result/result',
      success:function(){},
      fail:function(){},
      complete:function(){},
    })

    // wx.redirectTo({
    //   url: '../result/result',
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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