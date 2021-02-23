import React from "react";
import s from './MyPosts.module.css'
import Post, { PropsPostType } from "./Post/Post";

type MyPostsType = {
    postData: PropsPostType[]
}

const MyPosts = (props:MyPostsType) => {


    let postElements = props.postData.map((post) => {
        return <Post message={post.message} id={post.id} likesCount={post.likesCount}/>

    });

    return (
        <div>
            <div>
                <div className={`${s.item} ${s.active}`}>
                    My Posts
                </div>

                <div className={s.textAreaStyle}>
                    <textarea>Add post</textarea>
                </div>
                <div className={s.buttonStyle}>
                    <button> Remove</button>
                </div>
                {postElements}

            </div>
        </div>
    )
}
export default MyPosts;