import React from 'react';
import s from './style.module.sass';

export default function Button({ children, ...props }) {
  return (
    <button className={s.btn} {...props}>
        { children }
    </button>
  )
}
