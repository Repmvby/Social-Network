import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

export type DialogItemPropsType = {
    name: string
    id: number
}
export type MessagePropsType = {
    message: string
    id: number

}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let DialogData: DialogItemPropsType[] = [
        {name: "Dima", id: 1},
        {name: 'Nastya', id: 2},
        {name: 'Petya', id: 3},
        {name: 'Oleg', id: 4},
        {name: 'Sasha', id: 5},
        {name: 'Vitalik', id: 6},
    ]

    let MessageData: MessagePropsType[] = [
        {message: 'Finish Him', id: 1},
        {message: 'Get over Here', id: 2},
        {message: 'Fatality', id: 3},
        {message: 'Fatality', id: 3},
        {message: 'Fatality', id: 3},
        {message: 'Fatality', id: 3},
        {message: 'Fatality', id: 3},
    ]


    let dialogsElement = DialogData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    });


    let messageElement = MessageData.map(messageThing =>
        <Message message={messageThing.message} id={messageThing.id}/>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}

            </div>
        </div>
    )

}
export default Dialogs;