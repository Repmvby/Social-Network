import React from "react";
import s from './MyPosts.module.css'
import Post, {PropsPostType} from "./Post/Post";


const MyPosts = () => {
    let Postdata: PropsPostType[] = [
        {id: 1, message: "Hello", likesCount: 20},
        {id: 2, message: "Nice", likesCount: 220},
        {id: 3, message: "Perfect", likesCount: 2220},
    ]

    let postElements = Postdata.map((post) => {
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