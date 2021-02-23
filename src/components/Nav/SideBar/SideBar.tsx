import React from 'react';
import s from '../SideBar/SideBar.module.css'


export type FriendType = {
    id: number;
    name: string;
}
type SideBarPropsType = {
    friends: FriendType[];
}

const SideBar = (props: SideBarPropsType) => {
    const friendElement = props.friends.map(f => <span>{f.name}</span>);

    return (
        <div>
            <div>Friends</div>
            {friendElement}
        </div>
    )
}

export default SideBar