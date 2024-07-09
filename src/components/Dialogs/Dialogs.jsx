import React, { useState } from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { DialogBase } from "./DialogBase";
import DialogWindow from "./DialogWindow";
import DialogItem from "./DialogItem";

export default function Dialogs() {
 const [active, setActive] = useState(null)
 const handleClick = (id) =>{
  setActive(id)
 } 


  return (
    <>
      <div className={styles.content}>
        <article className={styles.dialogsList}>
          <DialogItem onClick={()=>handleClick(0)} {...DialogBase[0]} />
          <DialogItem onClick={()=>handleClick(1)} {...DialogBase[1]} />
          <DialogItem onClick={()=>handleClick(2)} {...DialogBase[2]} />
        </article>
        <DialogWindow activeId={active}  />
      </div>
    </>
  );
}
