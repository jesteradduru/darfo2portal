import React from 'react';
import './ContentWrapper.css';
const ContentWrapper = ({children}) => {
    return (
        <div className='content-wrapper bg-super-light-green'>
            {children}
        </div>
    )
}

export default ContentWrapper;