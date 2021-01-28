Page({
  data: {
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: [{
      gymName:'gameon',
      gymDistance:5
    },
    {
      gymName:'lock',
      gymDistance:4
    }],//下拉列表的数据
    selectUser: [{
      userName:''
    }],
    index: 0,//选择的下拉列表下标
  },
  // 点击下拉显示框，这里也需要修改，下拉框显示的不太对
  selectTap() {
    wx.request({
      url: 'url',
      method: 'GET',
      success:res=>{
        this.setData({
          selectData:res.data
        })
      },
      fail:res=>{

      }
    })
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    wx.request({
      url: 'url',
      method:'GET',
      success:res=>{
        this.setData({
          selectUser:res.data
        })
      },
      fail:res=>{

      }
    })
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow,
      selectUser: [
        {userName:'wanrundong'},
        {userName:'lalala'}]
    });
  },
  // 点击跳转链接
  userClick: function (e) {
    console.log(e)
    wx.navigateTo({
      // 这里后期可能还需要修改，感觉不太对
      url: '../playerInfo/playerInfo?userName=' + e.currentTarget.dataset.userName
    })
  },
})
