import React from 'react'

export default function DialogItem ({ dialog, onClick }){
  const {name} = dialog;
  return (
      <button onClick={onClick}> {name} </button>

  );
};
