import React from 'react';

import DirectoryItem from 'components/directory-item/directory-item.component';

import './directory.styles.scss';


const Directory = ({categories}) => {
    return (
        <div className='directory-menu'>
            {categories.map(({ title, imageUrl, id }) => (
                <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
            ))}
        </div>
    );
}

export default Directory;