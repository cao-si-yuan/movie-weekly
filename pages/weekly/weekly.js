Page({
    data: {
        weeklyMovieList: [
            {
                name: "泰坦尼克号",
                comment: "失去的才是永恒的",
                imagePath: "/images/titanic.jpg",
                isHighlyRecommended: false,
            },
            {
                name: "这个杀手不太冷",
                comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
                imagePath: "/images/leon.jpg",
                isHighlyRecommended: false,
            },
            {
                name: "教父",
                comment: "最精彩的剧本，最真实的黑帮电影。",
                imagePath: "/images/jf.jpeg",
                isHighlyRecommended: true,
            }
        ],    
        count: 123,
        score: 60
    },

    //生命周期 onLoad -> onShow -> onReady
    //onload为了在页面被渲染之前初始化currentIndex
    onLoad: function(options) {
        this.setData({
            currentIndex: this.data.weeklyMovieList.length - 1
        })
    },

    f0: function(event) {
        this.setData({
            currentIndex: this.data.weeklyMovieList.length - 1
        })
    }
    //onShow只要显示就调用一次
    // onShow: function() {

    // },

    //onReady初始完成，开始交互调用一次
    // onReady: function() {

    // },

    //onHide只要隐藏就调用一次
    // onHide: function() {

    // },

    //onUnload页面被关闭就调用一次
    // onUnload: function() {

    // },
})