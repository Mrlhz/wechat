// pages/index.js
import {HTTP} from '../../util/http.js'
// import { config } from '../../util/config.js'
var http = new HTTP()

import { ClassicModel } from '../../models/classic.js'
let classicModel = new ClassicModel()

import {classic} from '../../data/classic.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:classic.data
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // classicModel.getLatest((res) => {                                                                             
    //   console.log('data', res)
    //   this.setData({
    //     classic: res.data
    //   })
    // })
    var params = {
      url: 'book/search?summary=1',
      data: {
        q: 'python',
        start: 0
      },
      success: (res) => {
        var { data: { books: book, count: count, total: total } } = res
        console.log(book[0], total, count)
        this.setData({
          books: book
        })
      },
      fail: (err) => {
        console.log('err', err)
      }
    }
    // console.log(params)
    // http.request(params)
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