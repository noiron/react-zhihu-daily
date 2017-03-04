/**
 * 文章内容页的 Header
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './header.less';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    goBack = () => {
        history.back();
    }

    render() {
        const { title, handleLeftClick, leftContent, type } = this.props;
        return (
            <div className={`header ${type === 'fixed' ? 'fixed-header' : ''}`}>
                <div 
                    className='left-content'
                    onClick={handleLeftClick ? handleLeftClick : this.goBack}
                >{leftContent}</div>

                <div className='center-content'><span>{title}</span></div>

                <div className='right-content'></div>

            </div>
        )
    }
}

export default Header;
