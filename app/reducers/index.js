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

const themes = (state = [], action) => {
    switch (action.type) {
        case 'GET_THEMES':
            return action.payload.others;
            
        default:
            return state;
    }
}

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

export { mainList, detail, display, themes };