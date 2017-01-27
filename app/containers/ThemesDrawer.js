import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const mapStateToProps = (state) => {
    return {
        themes: state.themes,
        themesShow: state.display.themesShow
    }
}

class ThemesDrawer extends Component {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.dispatch(Actions.getThemesData());
    }

    /* 点击某一个主题后，进入该主题的页面 */
    handleClickTheme = (id) => {
        if (id === 0) { // 点击的是首页
            this.context.router.push('/');
        } else {
            this.context.router.push('/theme/' + id);
        }
        this.props.dispatch(Actions.toggleThemesDrawer());
    }

    render() {
        const show = this.props.themesShow;
        const componentClasses = [];

        if (show) { componentClasses.push('show'); }

        return (
            <div id="themes-wrap" className={componentClasses.join(' ')}
                style={{
                    height: '100%',
                    backgroundColor: '#fff',
                    border: '1px solid #eee',
                    paddingLeft: '20px',
                    boxSizing: 'border-box',
                }}>
                <ul>
                <li onClick={() => this.handleClickTheme(0)}>首页</li>
                {
                    this.props.themes.map(theme => 
                    <li key={theme.id}
                        onClick={() => this.handleClickTheme(theme.id)} 
                        style={{whiteSpace: 'pre'}}>
                        {theme.name}
                    </li>)
                }
                </ul>
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(ThemesDrawer);
