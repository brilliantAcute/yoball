// pages/playerInfo/playerInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    age:0,
    height:0,
    weight:0,
    address:'',
    range:0,
    style:'',
    skill:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this.data;
    wx.request({
      url: 'url?userName=options.userName',
      method:'GET',
      success:res=>{
        this.setData({
          name:res.data.getName,
          phone:res.getData.getPhone,
          age:res.getData.getAge,
          height:res.getData.getHeight,
          weight:res.getData.getWeight,
          address:res.getData.getAddress,
          range:res.getData.getRange,
          style:res.getData.getStyle,
          skill:res.getData.getSkill
        })
      },
      fail:res=>{

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