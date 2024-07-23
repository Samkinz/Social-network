import React from 'react'

export default function Message({ dialog }) {
  return (
    <p> {dialog.dialogs.map((item)=><p>{item}</p>)} </p>
  )
}
