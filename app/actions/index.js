import { getLatestStory, getDetail, getBeforeStory } from '../helpers/api';

export const GET_LATEST_DATA = () => {
    return (dispatch, getStore) => {
        if (getStore().mainList.length > 0) {
            return;
        }
        
        getLatestStory().then(res => {
            dispatch(GET_LATEST(res));
        });
    };
}

export const GET_BEFORE_DATA = (date) => {
    return (dispatch, getStore) => {        
        getBeforeStory(date).then(res => {
            dispatch(GET_BEFORE(res, date));
        });
    };
}

export const GET_DETAIL_DATA = (id) => {
    return (dispatch => {
        getDetail(id).then(res => {
            dispatch(GET_DETAIL(res));
        });
    });
}

export const GET_LATEST = (res) => {
    return {
        type: 'GET_LATEST',
        payload: res.data
    }
}

export const GET_BEFORE = (res, date) => {
    return {
        type: 'GET_BEFORE',
        payload: {
            data: res.data,
            date
        }
    }
}

export const GET_DETAIL = (res) => {
    return {
        type: 'GET_DETAIL',
        payload: res.data
    }
}

// 记录主页当前的垂直位置
export const SET_SCROLL_TOP = (data) => {
    return {
        type: 'SET_SCROLL_TOP',
        payload: data
    }
}