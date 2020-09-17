//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://wuwuditu.img-cn-hangzhou.aliyuncs.com/cms/20200915/374cc11dbff54e98bd8f8d3406eb8682.jpg',
      'http://wuwuditu.img-cn-hangzhou.aliyuncs.com/cms/20200915/84ef4642b4df467d898c26e17b47add0.jpg',
      'http://wuwuditu.img-cn-hangzhou.aliyuncs.com/cms/20200915/f918fb4d3c0d483e8320cb4a8fafbc4a.jpg',
      'http://wuwuditu.img-cn-hangzhou.aliyuncs.com/cms/20200915/f5ffbcd08cd0468197f3bc593dec0fa9.jpg',
      'http://wuwuditu.img-cn-hangzhou.aliyuncs.com/cms/20200915/46c1653d986c43b283d6ccbe270e360e.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000, //自动切换时间间隔
    duration: 2000 //滑动动画时长
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'url',
      success: function (res) {
        that.setData({})
      }
    })
  },

})
