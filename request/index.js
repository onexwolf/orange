const HOST = 'https://orange.webfem.com';

// 用code换token
const getTokenWithCode = function (code, cb) {
  wx.request({
    url: `${HOST}/orange/login`,
    method: 'POST',
    dataType: 'json',
    data: {
      code,
    },
    success: function (res) {
      if (res.data.code === 0) {
        cb(null, res.data.data);
      } else {
        cb(res.data.code)
      }
    },
    fail: function (err) {
      cb(err)
    }
  })
}

// 取用户所有activity
const getActivityList = function (token, callback) {
  wx.request({
    url: `${HOST}/orange/activity/`,
    header: {
      token,
    },
    success: function (res) {
      callback(null, res.data);
    }
  })
}

// 创建活动
const createActivity = function (token, data, callback) {
  wx.request({
    url: `${HOST}/orange/activity`,
    header: {
      token,
    },
    method: 'POST',
    data,
    success: function (res) {
      callback(null, res.data);
    }
  })
}

// 查询用户
const getUserInfo = function (token, callback) {
  wx.request({
    url: `${HOST}/orange/user`,
    header: {
      token,
    },
    success: function (res) {
      callback(null, res.data)
    },
    fail: function (e) {
      callback(e);
    }
  })
}

// 更新用户
const updateUserInfo = function (token, data, callback) {
  wx.request({
    url: `${HOST}/orange/user/`,
    header: {
      token,
    },
    method: 'POST',
    data,
    success: function (res) {
      callback(null, res.data);
    },
    fail: function (e) {
      callback(e);
    }
  })
}

// 查询活动
const getActivityDetail = function (token, id, callback) {
  wx.request({
    url: `${HOST}/orange/activity/${id}`,
    header: {
      token,
    },
    method: 'GET',
    success: function (res) {
      callback(null, res.data);
    },
    fail: function (e) {
      callback(e);
    }
  })
}

// 报名
const signUpActivity = function (token, data, callback) {
  wx.request({
    url: `${HOST}/orange/queue`,
    header: {
      token
    },
    method: 'POST',
    data,
    success: function (res) {
      callback(null, res.data);
    },
    fail: function (e) {
      callback(e);
    }
  })
}

module.exports = {
  getTokenWithCode,
  getActivityList,
  createActivity,
  getUserInfo,
  updateUserInfo,
  getActivityDetail,
  signUpActivity
}