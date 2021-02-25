import React from "react";
import s from './MyPosts.module.css'
import Post, { PropsPostType } from "./Post/Post";

type MyPostsType = {
    postData: PropsPostType[]
    addNewPost: (newMessage: string) => void;

}

const MyPosts = (props:MyPostsType) => {


    let postElements = props.postData.map((post) => {
        return <Post message={post.message} id={post.id} likesCount={post.likesCount}/>

    });

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            if(newPostElement.current) {
               let text = newPostElement.current.value
                props.addNewPost(text)
                newPostElement.current.value =''
            }
    }

    return (
        <div>
            <div>
                <div className={`${s.item} ${s.active}`}>
                    My Posts
                </div>

                <div className={s.textAreaStyle}>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className={s.buttonStyle}>
                    <button onClick={addPost}> Add Post</button>
                </div>
                {postElements}

            </div>
        </div>
    )
}
export default MyPosts;