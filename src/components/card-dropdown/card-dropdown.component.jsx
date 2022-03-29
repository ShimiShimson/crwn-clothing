import React from 'react';

import Button from 'components/button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button buttonType=''>Go to checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown;