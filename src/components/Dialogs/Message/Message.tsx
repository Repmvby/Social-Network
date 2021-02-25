import {NavLink} from "react-router-dom";
import React from "react";
import s from "../Dialogs.module.css"

export type MessagePropsType = {
    message: string
    id: number

}


const Message = (props: MessagePropsType) => {

    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Message