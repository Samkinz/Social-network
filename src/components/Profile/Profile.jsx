import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  let addAlert = () =>{
    alert('Aloha')
  }
  return (
    <>
      <article className={styles.profile}>
        <div className={styles.header}>
          <img
            className={styles.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKmEPjJJcViSTN24rmsuVGbFiZK1Y1PxGtvg4gN4ZDts8Pe5_fV9DIj7E--uOsM9QudE&usqp=CAU"
            alt=""
          />
          <h1>Profile</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          saepe!
        </p>
        <button onClick={addAlert}>alert</button>
      </article>
    </>
  );
}
