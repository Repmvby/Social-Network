import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import MainContent from "./components/MainContent/MainContent"


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
