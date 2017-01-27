import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import moment from 'moment';
import MainHeader from '../components/MainHeader';
import ThemesDrawer from './ThemesDrawer';

let currentDate = moment().subtract(1, 'days');


class StoryListContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            scrollTop: 0,
            id: this.props.params.id,
        }
    }

    componentDidMount() {
        this.props.dispatch(Actions.getThemeContentData(this.props.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id !== this.props.params.id) {
            this.props.dispatch(Actions.getThemeContentData(nextProps.params.id));
        }
    }

    handleClick = (id) => {
        this.context.router.push('/detail/' + id);
    }

    toggleThemes = () => {
        this.props.dispatch(Actions.toggleThemesDrawer());
    }

    render() {
        const { themeContent } = this.props;
        return (
            <div>
                <MainHeader toggleThemes={this.toggleThemes} title={themeContent.data ? themeContent.data.name : ''} />
                <ThemesDrawer show={this.state.themesOpen} />

                {
                    themeContent.data &&
                    <div id="theme-content-wrap">
                        {
                            themeContent.data.stories.map((item, index) => {
                                return <div key={item.id} className="story-list-item" onClick={() => this.handleClick(item.id)}>{item.title}</div>
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainList: state.mainList,
        display: state.display,
        themeContent: state.themeContent
    }
}

export default connect(
    mapStateToProps
)(StoryListContainer);

StoryListContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

