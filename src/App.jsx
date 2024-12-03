import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer saludo="¡Bienvenido a nuestra tienda!" />
        </>
    );
}

export default App;
