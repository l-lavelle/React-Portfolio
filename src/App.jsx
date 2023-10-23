import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Footer from './components/Footer/Footer'


function App() {
    return (
        <>
            <NavBar />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </>
    );
}

export default App;