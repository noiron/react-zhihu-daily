var axios = require('axios');

// 获取最新的文章列表
function getList() {
    return axios.get('http://news-at.zhihu.com/api/4/news/latest').then(data => {
        return data
    });
}

const getListAPI = (req, res) => {
    getList().then(data => {
        res.send(data.data)
    });
}

/** 
 * 获取过往的文章列表 
 */
function getBeforeStory(date) {
    return axios.get('http://news.at.zhihu.com/api/4/news/before/' + date).then(function (data) {
        return data;
    });
}

const getBeforeStoryAPI = (req, res) => {
    getBeforeStory(req.query.date).then(function (data) {
        res.send(data.data);
    });
}

/** 
 * 获取文章内容
 */
function getDetail(id) {
    return axios.get('http://news-at.zhihu.com/api/4/news/' + id).then(function (res) {
        return res;
    }).catch((err) =>
        console.log(err));
}

const getDetailAPI = (req, res) => {
    getDetail(req.query.id).then(function (data) {
        res.type('application/json')
        res.send(data.data);
    }).catch(err => {
        console.log(err);
    })
}

/**
 * 获取日报的主题
 */
function getThemes() {
    return axios.get('http://news-at.zhihu.com/api/4/themes').then(function (res) {
        return res;
    }).catch((err) => { console.log(err); })
}

const getThemesAPI = (req, res) => {
    getThemes().then(data => {
        res.send(data.data);
    });
}

/**
 * 根据日报的主题id，获取该主题下的文章列表
 */
function getThemeContent(id) {
    return axios.get(`http://news-at.zhihu.com/api/4/theme/${id}`).then(function (res) {
        return res;
    }).catch((err) => { console.log(err); })
}

const getThemeContentAPI = (req, res) => {
    getThemeContent(req.query.id).then(data => {
        res.send(data.data);
    });
}

module.exports = {
    getListAPI,
    getDetailAPI,
    getBeforeStoryAPI,
    getThemesAPI,
    getThemeContentAPI,
}