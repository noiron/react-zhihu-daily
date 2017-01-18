/**
 * 文章内容页的 Header
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    backButton = () => {
        history.back();
    }

    render() {
        const { title, goBack } = this.props;
        return (
            <div className="global-header">
                {
                    goBack &&
                    <span onClick={this.backButton}>返回</span>
                }
                <span>{title}</span>
            </div>
        )
    }
}

export default Header;
