// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: "index",
    currentColor: "#6B8E23",
    currentThemeId: 2,

    themeColor: [
      {
        "id": "pink",
        "name": "猛男粉",
        "color": "#FFC0CB",
      },
      {
        "id": "violet",
        "name": "基佬紫",
        "color": "#8A2BE2"
      },
      {
        "id": "green",
        "name": "原谅绿",
        "color": "#6B8E23"
      },
      {
        "id": "black",
        "name": "斑斓黑",
        "color": "#000000"
      },
      {
        "id": "yellow",
        "name": "内心黄",
        "color": "#FFD700"
      }
    ],
    
    tabBarStatus : [
      {
        "dot": false,
      },
      {
        "dot": false,
      },
      {
        "dot": false,
      },
      {
        "dot": false,
      },
      {
        "dot": false,
      }
    ],

    indexDropdownItems: [
      {
        "value": 0,
        "text": "无前缀",
        "items": [
          {
            "value": 0,
            "text": "无前缀",
            "items": [
              {
                "value": 0,
                "text": "无前缀"
              }
            ]
          },
        ]
      }
    ],
    indexDropdownI: 0,
    indexDropdownII: 0,
    indexDropdownIII: 0,
    indexDropdownEnableII: false,
    indexDropdownEnableIII: false,

    indexInputValue: "",

    actions: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
        subname: '描述信息',
        openType: 'share',
      },
    ],
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

  },

  handleIndexDropdownIChange(res) {
    this.setData({
      indexDropdownI: res.detail
    });

    if (this.data.indexDropdownItems[this.data.indexDropdownI].items.length > 1) {
      this.setData({
        indexDropdownEnableII: true,
        indexDropdownII: 0
      })
    } else {
      this.setData({
        indexDropdownEnableII: false
      })
    }

    if (this.data.indexDropdownItems[this.data.indexDropdownI].items[this.data.indexDropdownII].items.length > 1) {
      this.setData({
        indexDropdownEnableIII: true,
        indexDropdownIII: 0
      })
    } else {
      this.setData({
        indexDropdownEnableIII: false
      })
    }
  },

  handleChangeTheme(res) {
    this.setData({
      currentThemeId: res.detail-1,
      currentColor: this.data.themeColor[res.detail-1].color
    })
  },

  handleInputChange(res) {
    this.setData({
      indexInputValue: res.detail
    })
  },

  handleMessageSend(res) {
    console.log(this.data.indexInputValue)
    console.log(this.data.indexDropdownValue)
  }
})