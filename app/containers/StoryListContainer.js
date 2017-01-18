import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import moment from 'moment';
import Header from '../components/Header';
import ThemesDrawer from './ThemesDrawer';

let currentDate = moment().subtract(1, 'days');


class StoryListContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            scrollTop: 0,
            themesOpen: false,
        }
    }

    componentDidMount() {
        if (this.props.mainList.latest.length === 0) {
            this.props.dispatch(Actions.GET_LATEST_DATA());          
        }
        window.addEventListener('scroll', this.handleScroll);
        document.body.scrollTop = this.props.display.mainScrollTop;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.props.dispatch(Actions.SET_SCROLL_TOP(document.body.scrollTop));
    }

    handleClick = (id) => {
        this.context.router.push('/detail/' + id);
    }

    handleScroll = (e) => {
        if (window.innerHeight + document.body.scrollTop + 1 >= document.body.scrollHeight) {
            this.props.dispatch(Actions.GET_BEFORE_DATA(currentDate.format('YYYYMMDD')));
            currentDate = currentDate.subtract(1, 'days');
            console.log(currentDate.format('YYYYMMDD'));
        }
    }

    toggleThemes = () => {
        this.setState({
            themesOpen: !this.state.themesOpen
        });
    }

    render() {
        return (
            <div>
                <div className="header"
                    style={{
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        height: '20px',
                        padding: '10px 0px',
                        background: '#eee',
                        textAlign: 'center'
                    }}>
                    <span style={{float: 'left'}} onClick={this.toggleThemes}>{'O_O'}</span>
                    <span>{'首页'}</span>
                </div>
                <ThemesDrawer show={this.state.themesOpen} />
                <div id="story-list-container">
                    {
                        this.props.mainList.latest.map((item, index) => {
                            return (
                                <div key={item.id} className="story-list-item" onClick={() => this.handleClick(item.id)}>
                                    <span className="story-title">{item.title}</span>
                                    <img src={'https://images.weserv.nl/?url=' + item.images[0].substring(7)}
                                        />

                                </div>
                            )
                        })
                    }
                    {
                        this.props.mainList.before.map((dayItem) => {
                            return (
                                <div key={dayItem.date}>
                                    <p>{dayItem.date}</p>
                                    {
                                        dayItem.data.map((item, index) => {
                                            return (
                                                <div key={item.id} className="story-list-item" onClick={() => this.handleClick(item.id)}>
                                                    <span className="story-title">{item.title}</span>
                                                    <img src={'https://images.weserv.nl/?url=' + item.images[0].substring(7)}
                                                        />

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainList: state.mainList,
        display: state.display,
    }
}

export default connect(
    mapStateToProps
)(StoryListContainer);

StoryListContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

