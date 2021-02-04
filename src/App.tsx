import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MainContent from "./Components/MainContent"


const App = () => {
    return (
        <div className='app-wrapper'>
           <Header />
           <Nav />
           <MainContent />
        </div>
    );
}

export default App;
