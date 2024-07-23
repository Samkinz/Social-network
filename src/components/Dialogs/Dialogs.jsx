import React, { useState } from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { DialogBase } from "./DialogBase";
import DialogItem from "./DialogItem";
import Message from "./Message";

export default function Dialogs() {
  const [activeId, setActive] = useState(0);

  return (
    <>
      <div className={styles.content}>
        <article className={styles.dialogsList}>
          {DialogBase.map((dialog, id) => (
            <DialogItem onClick={() => setActive(id)} dialog={dialog} />
          ))}
        </article>
        <Message dialog={DialogBase[activeId]} />
      </div>
    </>
  );
}
