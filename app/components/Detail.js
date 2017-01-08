import React from 'react';

const Detail = ({HTMLContent}) => {
    return (
        <div dangerouslySetInnerHTML={HTMLContent}></div>
    )
}

export default Detail;