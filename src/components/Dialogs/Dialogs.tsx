import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemPropsType} from './DialogItem/DialogItem'
import Message, {MessagePropsType} from './Message/Message';


type DialogsPropsType = {
    dialogData: DialogItemPropsType[],
    messageData: MessagePropsType[],
    addNewMessage: (newMessgae: string) => void

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
    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sentMessage = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.addNewMessage(text)
            newMessageElement.current.value = ''
        }

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sentMessage}>Sent</button>
            </div>
        </div>
    )

}
export default Dialogs;