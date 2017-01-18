import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const mapStateToProps = (state) => {
    return {
        themes: state.themes
    }
}

class ThemesDrawer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.dispatch(Actions.GET_THEMES_DATA());
    }

    render() {
        const show = this.props.show;
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
                {
                    this.props.themes.map(theme => <li key={theme.id}>{theme.name}</li>)
                }
                </ul>
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(ThemesDrawer);
