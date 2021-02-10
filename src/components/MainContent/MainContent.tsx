import React from "react";
import s from './MainContent.module.css'
import MyPosts from "./MyPosts/MyPosts";


const MainContent = () => {
    return (
        <div>
            <div>
                <img src="https://s1.1zoom.me/b5050/596/Killzone_Technics_444553_1920x1080.jpg" width="600"
                     height="auto"/>
            </div>
            <div>
                <img src="http://cdn.onlinewebfonts.com/svg/download_159991.png" width="40" height="40"/>
            </div>
           <MyPosts />
        </div>)

}
export default MainContent;