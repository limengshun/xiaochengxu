// pages/operatstep/operatstep.js
var app = getApp()

Page({
  /**
   * 页面的初始数据
   * tabs:tab栏的栏目名
   * tabIndex:当前tab所在的index
   */
  data: {
    tabs: ['柜式陪护床', '椅式陪护床', '远程操作流程'],
    tabIndex: 0,
  },
  // 处理点击tab
  onTabClick(e) {
    let id = e.currentTarget.id;
    this.setData({
      tabIndex: id,
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