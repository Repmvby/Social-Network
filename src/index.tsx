import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {DialogItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {PropsPostType} from './components/MainContent/MyPosts/Post/Post';
import state from './Redux/Redux'


ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
