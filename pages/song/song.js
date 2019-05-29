// pages/exam01/exam01.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/grid/web_banner1.jpg" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/grid/web_banner2.jpg" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/grid/web_banner3.jpg" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/grid/web_banner4.jpg" },
    ],
    autoplay: true,
    interval: 4000,
    navlist: [{ title: "古典" }, { title: "流行" }, { title: "爵士" }, { title: "民族" }, { title: "主题" }, { title: "影视" }]
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