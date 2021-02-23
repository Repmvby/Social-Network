import {NavLink} from "react-router-dom";
import React from "react";
import s from "../Dialogs.module.css"


export type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <img  src='https://diamondelectric.ru/images/3202/3201617/ytochka_funny_ducks_4.jpg'/>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem