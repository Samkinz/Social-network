import React from "react";
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";
import { Route, Routes} from 'react-router-dom'


export default function Nav() {
  return (
    <nav className={styles.nav}>
            <div>
        <NavLink to="/News" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }> News </NavLink>
      </div>
      <div>
        <NavLink to="/profile" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }> Profile </NavLink>
      </div>
      <div >
        <NavLink to="/messages" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }> Messages </NavLink>
      </div>
      <div >
        <NavLink to="/music" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }> Music </NavLink>
      </div>
      <div >
        <NavLink to="/settings" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }> Settings </NavLink>
      </div>
    </nav>
  );
}
