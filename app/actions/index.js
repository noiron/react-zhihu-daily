import {
    getLatestStoryApi,
    getDetailApi,
    getBeforeStoryApi,
    getThemesApi,
    getThemeContentApi,
} from '../helpers/api';

/**
 * 获得最近的文章列表 
 */
export const getLatestData = () => {
    return (dispatch, getStore) => {
        if (getStore().mainList.length > 0) {
            return;
        }

        getLatestStoryApi().then(res => {
            dispatch(getLatest(res));
        });
    };
}

export const getLatest = (res) => {
    return {
        type: 'GET_LATEST',
        payload: res.data
    }
}
/*-------------------------------------------*/

/**
 * 获得一个具体日期的文章列表
 */
export const getBeforeData = (date) => {
    return (dispatch, getStore) => {
        getBeforeStoryApi(date).then(res => {
            dispatch(getBefore(res, date));
        });
    };
}

export const getBefore = (res, date) => {
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
export const getDetailData = (id) => {
    return (dispatch => {
        getDetailApi(id).then(res => {
            dispatch(getDetail(res));
        });
    });
}

export const getDetail = (res) => {
    return {
        type: 'GET_DETAIL',
        payload: res.data
    }
}
/*---------------------------------------------*/


/**
 * 获取日报的主题列表 
 */
export const getThemesData = () => {
    return (dispatch => {
        getThemesApi().then(res => {
            dispatch(getThemes(res));
        });
    });
}

export const getThemes = (res) => {
    return {
        type: 'GET_THEMES',
        payload: res.data
    }
}
/*---------------------------------------------*/

/**
 * 获取一个主题下的文章列表
 */
export const getThemeContentData = (id) => {
    return (dispatch => {
        getThemeContentApi(id).then(res => {
            dispatch(getThemeContent(res, id));
        });
    });
}

export const getThemeContent = (res, id) => {
    return {
        type: 'GET_THEME_CONTENT',
        payload: {
            data: res.data,
            id: id
        }
    }
}


// 记录主页当前的垂直位置
export const setScrollTop = (data) => {
    return {
        type: 'SET_SCROLL_TOP',
        payload: data
    }
}


// 切换左侧的主题列表的打开状态
export const toggleThemesDrawer = () => {
    return {
        type: 'TOGGLE_THEMES_DRAWER'
    }
}
