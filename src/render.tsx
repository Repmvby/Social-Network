import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {DialogItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {PropsPostType} from './components/MainContent/MyPosts/Post/Post';
import  { addNewMessage, stateType } from './Redux/Redux'
import  {addNewPost} from "./Redux/Redux"

export let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reportWebVitals();
