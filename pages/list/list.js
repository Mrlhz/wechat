// pages/list/list.js
var data = require('../../data/app.js')
import {classic} from '../../data/classic.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: classic.data,
    type: ['/images/movie@tag.png', '/images/music@tag.png','/images/essay@tag.png']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // onLoad默认有一个Object类型的参数，是指其他页面打开当前页面所调用的 query 参数
    this.data.classic.map( item => {
      console.log(item.content)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('onShow')    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onHide')    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('onUnload')    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})