import React from "react";
import s from './MainContent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const MainContent = () => {
    return (
        <div>
            <ProfileInfo/>
           <MyPosts />
        </div>)

}
export default MainContent;