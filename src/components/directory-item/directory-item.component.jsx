import React from 'react';

import './directory-item.styles.scss';

const DirectoryItem = ({ title, imageUrl }) => (
    <div className='directory-item-container'>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='body'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default DirectoryItem;
