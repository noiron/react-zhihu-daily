import {
    getLatestStory,
    getDetail,
    getBeforeStory,
    getThemes
} from '../helpers/api';

/**
 * 获得最近的文章列表 
 */
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

export const GET_LATEST = (res) => {
    return {
        type: 'GET_LATEST',
        payload: res.data
    }
}
/*-------------------------------------------*/

/**
 * 获得一个具体日期的文章列表
 */
export const GET_BEFORE_DATA = (date) => {
    return (dispatch, getStore) => {
        getBeforeStory(date).then(res => {
            dispatch(GET_BEFORE(res, date));
        });
    };
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
/*--------------------------------------------*/


/**
 * 获取一篇文章的具体内容
 */
export const GET_DETAIL_DATA = (id) => {
    return (dispatch => {
        getDetail(id).then(res => {
            dispatch(GET_DETAIL(res));
        });
    });
}

export const GET_DETAIL = (res) => {
    return {
        type: 'GET_DETAIL',
        payload: res.data
    }
}
/*---------------------------------------------*/


/**
 * 获取日报的主题列表 
 */
export const GET_THEMES_DATA = () => {
    return (dispatch => {
        getThemes().then(res => {
            dispatch(GET_THEMES(res));
        });
    });
}

export const GET_THEMES = (res) => {
    return {
        type: 'GET_THEMES',
        payload: res.data
    }
}
/*---------------------------------------------*/


// 记录主页当前的垂直位置
export const SET_SCROLL_TOP = (data) => {
    return {
        type: 'SET_SCROLL_TOP',
        payload: data
    }
}


// 切换左侧的主题列表的打开状态
export const TOGGLE_THEMES_DRAWER = () => {
    return {
        type: 'TOGGLE_THEMES_DRAWER'
    }
}
