import MenuItem from 'components/menu-item/menu-item.component';
import React from 'react';

import './directory.styles.scss';


class Directory extends React.Component {

    render() {
        return (
            <div className='directory-menu'>
                {this.props.categories.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory;