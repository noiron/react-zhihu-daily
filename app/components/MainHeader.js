/**
 * 首页的头部
 */
import React from 'react';

const MainHeader = ({title, toggleThemes}) => {
    return (
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
            <span style={{
                position: 'absolute',
                left: '20px',
            }} onClick={toggleThemes}>{'¬_¬'}</span>
            <span>{title}</span>
        </div>
    )
}

export default MainHeader;