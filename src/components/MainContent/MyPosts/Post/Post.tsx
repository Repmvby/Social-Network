import React from "react";
import s from './Post.module.css'

export type PropsPostType = {
    message: string
    likesCount: number
    id: number
}

const Post = (props:PropsPostType) => {
    return (
        <div className= {`${s.item} ${s.active} `}>
            <img src='https://frankfurt.apollo.olxcdn.com/v1/files/79n559hic7ku3-KZ/image;s=1000x700'/>
            Post
            <div>
                    <span>
                        {props.message}
                    </span>
                    <span> Likes:{props.likesCount}</span>
            </div>
        </div>

    )
}
export default Post;