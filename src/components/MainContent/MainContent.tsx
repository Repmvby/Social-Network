import React from "react";
import { addNewPost } from "../../Redux/Redux";
import s from './MainContent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import { PropsPostType } from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type MainContentPropsType ={
    postData: PropsPostType[];
    addNewPost: (newMessage: string) => void;

}

const MainContent = (props: MainContentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
           <MyPosts postData={props.postData} addNewPost={props.addNewPost}/>
        </div>)

}
export default MainContent;