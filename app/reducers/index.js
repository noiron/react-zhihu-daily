/**
 * 首页显示的内容
 */
const mainList = (state = {
    latest: [],
    before: []
}, action) => {
    switch (action.type) {
        case 'GET_LATEST':
            return Object.assign({}, state, {
                latest: action.payload.stories
            });
        case 'GET_BEFORE':
            return Object.assign({}, state, {
                before: [...state.before, {
                    date: action.payload.data.date,
                    data: action.payload.data.stories
                }]
            });
        default:
            return state;
    }
}

/**
 * 文章的具体内容
 */
const detail = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return Object.assign({},
                state,
                action.payload
            )
        default:
            return state;
    }
}

/**
 * 主题列表
 */
const themes = (state = [], action) => {
    switch (action.type) {
        case 'GET_THEMES':
            return action.payload.others;

        default:
            return state;
    }
}

/**
 * 用于显示的相关设置
 */
const display = (state = {
    mainScrollTop: 0,
    themesShow: false
}, action) => {
    switch (action.type) {
        case 'SET_SCROLL_TOP':
            return Object.assign({}, state, {
                mainScrollTop: action.payload
            });
        case 'TOGGLE_THEMES_DRAWER':
            return Object.assign({}, state, {
                themesShow: !state.themesShow
            });
        default:
            return state;
    }
}

/**
 * 主题日报
 */
const themeContent = (state = {}, action) => {
    switch (action.type) {
        case 'GET_THEME_CONTENT':
            console.log(action.payload);
            return Object.assign({}, state, 
                action.payload);
        default:
            return state;
    }
}

export { mainList, detail, display, themes, themeContent };