import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                <div className={`${s.item} ${s.active}`}>
                    My Posts
                </div>
                <textarea>Add post</textarea>
                <button> Remove</button>
            </div>
            <Post message = "Hello" likesCount={20} />
            <Post message = "Meow Meow" likesCount={30}/>

        </div>
    )
}
export default MyPosts;