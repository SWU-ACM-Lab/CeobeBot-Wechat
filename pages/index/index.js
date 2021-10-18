// pages/index/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentTab: "Index",
        currentColor: "#6B8E23",
        currentThemeId: 0,
        themeCount: 0,

        themeColor: [
            {
                id: "pink",
                name: "猛男粉",
                color: "#FFC0CB",
            },
            {
                id: "violet",
                name: "基佬紫",
                color: "#8A2BE2",
            },
            {
                id: "green",
                name: "原谅绿",
                color: "#6B8E23",
            },
            {
                id: "black",
                name: "斑斓黑",
                color: "#000000",
            },
            {
                id: "yellow",
                name: "内心黄",
                color: "#FFD700",
            },
            {
                id: "blue",
                name: "天空蓝",
                color: "#1E90FF",
            },
            {
                id: "red",
                name: "中国红",
                color: "#FF0000",
            },
            {
                id: "gray",
                name: "淡雅灰",
                color: "#C0C0C0",
            },
        ],

        tabBarStatus: [
            {
                dot: true,
            },
            {
                dot: false,
            },
            {
                dot: false,
            },
            {
                dot: false,
            },
            {
                dot: false,
            },
        ],

        indexDropdownItems: [
            {
                value: 0,
                text: "无前缀",
                items: [
                    {
                        value: 0,
                        text: "无前缀",
                        items: [
                            {
                                value: 0,
                                text: "无前缀",
                            },
                        ],
                    },
                ],
            },
        ],
        indexDropdownI: 0,
        indexDropdownII: 0,
        indexDropdownIII: 0,
        indexDropdownEnableII: false,
        indexDropdownEnableIII: false,

        indexInputValue: "",

        indexMessages: [
            {
                sender: true,
                message:
                    "Hello, 0Hello, 0Hello, 0Hello, 0Hello, 0Hello, 0Hello, 0Hello, 0Hello, 0",
                time: 0,
            },
            {
                sender: false,
                message:
                    "Hello, 1Hello, 1Hello, 1Hello, 1Hello, 1Hello, 1Hello, 1Hello, 1Hello, 1",
                time: 1,
            },
            {
                sender: true,
                message: "Hello, 2",
                time: 2,
            },
        ],

        wordsCurrentPlayStatusENUK: "play-circle-o",
        wordsCurrentPlayStatusENUS: "play-circle-o",

        wordsPlayIcon: "play-circle-o",
		wordsPlayingIcon: "stop-circle-o",
		wordsLoadingStatus: true,
		
		wordsWord: {
			"spell": "hello",
			"mean_cn": "你好",
			"mean_en": "say hello,say hellosay hellosay hellosay hellosay hellosay hellosay hellosay hellosay hellosay hellosay hello",
			"accent_uk": "həˈləʊ",
			"accent_us": "həˈloʊ",
			"type": "Postgraduate",
		}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            themeCount: this.data.themeColor.length,
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},

    handleIndexDropdownIChange(res) {
        this.setData({
            indexDropdownI: res.detail,
        });

        if (
            this.data.indexDropdownItems[this.data.indexDropdownI].items
                .length > 1
        ) {
            this.setData({
                indexDropdownEnableII: true,
                indexDropdownII: 0,
            });
        } else {
            this.setData({
                indexDropdownEnableII: false,
            });
        }

        if (
            this.data.indexDropdownItems[this.data.indexDropdownI].items[
                this.data.indexDropdownII
            ].items.length > 1
        ) {
            this.setData({
                indexDropdownEnableIII: true,
                indexDropdownIII: 0,
            });
        } else {
            this.setData({
                indexDropdownEnableIII: false,
            });
        }
    },

    handleChangeTheme(res) {
        this.setData({
            currentThemeId: res.detail - 1,
            currentColor: this.data.themeColor[res.detail - 1].color,
        });
    },

    handleInputChange(res) {
        this.setData({
            indexInputValue: res.detail,
        });
    },

    handleMessageSend(res) {
        console.log(this.data.indexInputValue);
        console.log(this.data.indexDropdownValue);
    },

    handleTabChange(res) {
        this.setData({
            currentTab: res.detail.title,
        });
    },

    handleWordsPlayENUK() {
        this.setData({
			wordsCurrentPlayStatusENUK: this.data.wordsPlayingIcon
		});
		wx.showModal({
		  title: "提示",
		  content: "暂时不支持播放音频"
		});
		this.setData({
			wordsCurrentPlayStatusENUK: this.data.wordsPlayIcon
		})
	},
	
	handleWordsPlayENUS() {
		this.setData({
			wordsCurrentPlayStatusENUS: this.data.wordsPlayingIcon
		});
		wx.showModal({
			title: "提示",
			content: "暂时不支持播放音频",
		});
		this.setData({
			wordsCurrentPlayStatusENUS: this.data.wordsPlayIcon
		})
	}
});
