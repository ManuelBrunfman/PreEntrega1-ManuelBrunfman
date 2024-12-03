import React from 'react';
import CartWidget from './CartWidget';

function Navbar() {
    const estilosNav = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'grey',
       
    };

    const estilosLista = {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
        margin: 0,
        padding: 0,
    };


    return (
        <nav style={estilosNav}>
            <h1>Tienda React</h1>
            <ul style={estilosLista}>
                <li>Electrónica</li>
                <li>Ropa</li>
                <li>Juguetes</li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar;
