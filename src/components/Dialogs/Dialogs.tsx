import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem'
import Message, { MessagePropsType } from './Message/Message';



type DialogsPropsType ={
    dialogData: DialogItemPropsType[],
    messageData: MessagePropsType[],

}

const Dialogs = (props: DialogsPropsType) => {



    let dialogsElement = props.dialogData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    });


    let messageElement = props.messageData.map(messageThing =>
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