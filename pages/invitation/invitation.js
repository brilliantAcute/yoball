// pages/invitation/invitation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gym:"",
    timeRange:"",
    style:"",
    currentNumber:"",
    targetNumber:"",
    matchDoneTime:""
  },

  formSubmit:function(e){
    wx.request({
      url: 'url?gym=' + this.gym + 'timeRange=' + this.timeRange,
      method:'GET',
      success:res=>{
        wx.setStorageSync('gym', data.getGym),
        wx.setStorageSync('timeRange', data.getTimeRange)
      },
      fail:res=>{

      }
    })
  },

isValid:function(formData){
    if(formData.name==''){ 
        this.showModal("请输入姓名");
        return false;
    }else if(formData.phone==''){
        this.showModal("请输入手机号");
        return false;
    }else if(formData.address==''){
        this.showModal("请输入详细地址");
        return false;
    } 
    return true;
},

showModal:function(content){
    wx.showModal({
    title: '提示',
    showCancel:false,
    confirmText:'知道了',
    content: content
    })
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