import React from 'react'
import s from './style.module.sass';

export default function Button({ children }) {
  return (
    <button className={s.btn}>
        { children }
    </button>
  )
}
