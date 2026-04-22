// app.js
App({
  onLaunch: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserProfile 获取头像昵称
          wx.getUserProfile({
            desc: '用于完善用户资料',
            success: res => {
              console.log('获取用户信息成功:', res.userInfo)
              // 可以将用户信息存储在全局变量中
              this.globalData.userInfo = res.userInfo
            },
            fail: err => {
              console.log('获取用户信息失败:', err)
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: null,
    hasUserInfo: false
  }
})
