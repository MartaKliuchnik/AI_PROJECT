import React from 'react';
import { forwardRef } from 'react';
import s from './style.module.sass';
import { motion } from 'framer-motion';

export const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <button ref={ref} className={s.btn} {...props}>
        { children }
    </button>
  )
})

export const MButton = motion(Button);
