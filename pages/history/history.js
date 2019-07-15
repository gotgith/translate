// pages/history/history.js
const app = getApp()

Page({

  data: {
    history: []
  },
  // history数据的读取
  onShow: function () {
    this.setData({ history: wx.getStorageSync('history') })
  },
  // 点击后回到首页的查询，传参数
  onTapItem: function (e) {
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  }
})