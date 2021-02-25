import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem"
import {MessagePropsType} from "../components/Dialogs/Message/Message"
import {PropsPostType} from "../components/MainContent/MyPosts/Post/Post"
import {FriendType} from "../components/Nav/SideBar/SideBar"
import { rerenderEntireTree } from "../render"

export type stateType = {
    dialogPage: DialogPageType;
    mainContentPage: MainContentPageType;
    sideBar: SideBarPageType;

}

export type DialogPageType = {
    dialogData: DialogItemPropsType[],
    messageData: MessagePropsType[],
}
export type MainContentPageType = {
    postData: PropsPostType[]

}
export type SideBarPageType = {
    friends: FriendType[];
}

let state: stateType = {
    dialogPage: {
        dialogData: [
            {name: "Dima", id: 1},
            {name: 'Nastya', id: 2},
            {name: 'Petya', id: 3},
            {name: 'Oleg', id: 4},
            {name: 'Sasha', id: 5},
            {name: 'Vitalik', id: 6},
        ],
        messageData: [
            {message: 'Finish Him', id: 1},
            {message: 'Get over Here', id: 2},
            {message: 'Fatality', id: 3},
            {message: 'Fatality', id: 3},
            {message: 'Fatality', id: 3},
            {message: 'Fatality', id: 3},
            {message: 'Fatality', id: 3},
        ],
    },
    mainContentPage: {
        postData: [
            {id: 1, message: "Hello", likesCount: 20},
            {id: 2, message: "Nice", likesCount: 220},
            {id: 3, message: "Perfect", likesCount: 2220},
        ],
    },
    sideBar: {
        friends: [
            {id: 1, name: "Dima "},
            {id: 2, name: "Nastya "},
            {id: 3, name: "Vitalik "},
        ]


    }
}

export let addNewPost = (newMessage:string) => {
    let newPost:PropsPostType = {
        id:5,
        message: newMessage,
        likesCount: 0
    }
    state.mainContentPage.postData.push(newPost)
    rerenderEntireTree(state);

}

export let addNewMessage = (newComment: string) => {
    let newMessage:MessagePropsType = {
        id:89,
        message: newComment,
    }
    state.dialogPage.messageData.push(newMessage)
    rerenderEntireTree(state);

}
export default state

