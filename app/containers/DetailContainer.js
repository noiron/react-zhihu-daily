import React, { Component } from 'react';
import Detail from '../components/Detail';

import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { convertDetailImageUrl } from '../helpers/utils';
import Header from '../components/Header';


class DetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(Actions.GET_DETAIL_DATA(this.props.params.id));
        document.body.scrollTop = 0;

        // this.props.actions.GET_DETAIL_DATA(this.props.params.id)
    }

    escapeHTML = () => {
        let content = convertDetailImageUrl(this.props.detail.body ? this.props.detail.body : '');
        return { __html: content }
    }

    render() {
        const { detail } = this.props;

        return (
            <div className="detail-container">
                <Header title={' '} goBack={true} />
                <div className="img-wrap">
                    <h1>{detail.title}</h1>
                    <span className="img-source">{detail.image_source}</span>
                    {
                        detail.image &&
                        <img src={'https://images.weserv.nl/?url=' + detail.image.substring(7)} />
                    }
                    <div className="img-mask"></div>
                </div>
                <Detail HTMLContent={this.escapeHTML()} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail
    }
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		actions: bindActionCreators(Actions, dispatch)
// 	}
// }



export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(DetailContainer);
