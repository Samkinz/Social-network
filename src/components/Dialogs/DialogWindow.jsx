import React from 'react'
import styles from './Dialogs.module.css'
import { DialogBase } from './DialogBase'
import Dialogs from './Dialogs'
import DialogItem from './DialogItem'

export default function DialogWindow({activeId}) {
  return (
    <>
    <h1> <DialogItem {...DialogBase[activeId]} /> </h1>
   
    </>
  )
}


