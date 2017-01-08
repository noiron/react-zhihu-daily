import axios from 'axios';

export function getLatestStory() {
    return axios.get('/api/topStory').then(function (res) {
        return res;
    });
};

export function getBeforeStory(date) {
    return axios({
        method: 'GET',
        url: '/api/before/',
        params: { date: date }
    }).then(function(res) {
        return res;
    })
}

export function getDetail(id) {
    return axios({
        method: 'GET',
        url: '/api/detail/',
        params: { id: id }
    }).then(function (res) {
        return res;
    }, function (err) {
        console.log(err);
    });
};