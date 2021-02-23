import React from "react";
import s from './MainContent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import { PropsPostType } from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type MainContentPropsType ={
    postData: PropsPostType[];
}

const MainContent = (props: MainContentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
           <MyPosts postData={props.postData}/>
        </div>)

}
export default MainContent;