import React from 'react';

function CartWidget() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>🛒</span>
            <div style={{
                backgroundColor: 'red',
                color: 'white',
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '5px',
            }}>
                5
            </div>
        </div>
    );
}

export default CartWidget;
