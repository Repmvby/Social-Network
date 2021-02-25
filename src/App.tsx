import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import MainContent from "./components/MainContent/MainContent"
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {DialogItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {PropsPostType} from './components/MainContent/MyPosts/Post/Post';
import {addNewMessage, stateType} from './Redux/Redux';

type statePropsType = {
    state: stateType;
    addNewPost: (newMessage: string) => void;
    addNewMessage: (newMessage: string) => void
}


const App = (props: statePropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav friends={props.state.sideBar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={() => <Dialogs dialogData={props.state.dialogPage.dialogData}
                                                                     messageData={props.state.dialogPage.messageData}
                                                                     addNewMessage = {props.addNewMessage}
                    />}/>
                    <Route path='/mainContent'
                           component={() => <MainContent postData={props.state.mainContentPage.postData}
                                                         addNewPost={props.addNewPost}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
