//lists.js
//获取应用实例
const app = getApp()

Page({
  //定义变量
  data: {
    newsLists:[
      { id: 1, title: "第一个标题", img: "../../WeChat_logo/logo1.png", cTime: "2019-01-25 14:25" },
      { id: 2, title: "第二个标题", img: "../../WeChat_logo/logo1.png", cTime: "2019-01-25 14:26" },
      { id: 3, title: "第三个标题", img: "../../WeChat_logo/logo1.png", cTime: "2019-01-25 14:27" },
      { id: 4, title: "第四个标题", img: "../../WeChat_logo/logo1.png", cTime: "2019-01-25 14:28" }
    ]
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
