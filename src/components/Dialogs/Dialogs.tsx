import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Nastya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>Olga</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.active}>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={s.active}>Vitalik</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    Wiw
                </div>
                <div className={s.message}>
                    sds
                </div>
            </div>
        </div>
    )

}
export default Dialogs;