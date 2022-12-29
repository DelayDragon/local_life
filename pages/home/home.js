// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放轮播图数据的列表
    swiperList:[],
    // 存放九宫格数据的列表
    gridList:[]
  },
  getSwiperList(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:(res)=>{
        this.setData({
          swiperList: res.data
        })
      }
    })
  },
  getGridList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:'GET',
      success:(res)=>{
        this.setData({
          gridList: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList()
    this.getGridList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('首页渲染成功！');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('进入首页');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('离开首页');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('卸载首页');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})