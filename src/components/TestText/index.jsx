import React from 'react';
import Button from '../UI/Button';
import s from './style.module.sass';

export default function TestText() {
  return (
      <form className={s.analyse_text_form}>
        <div className={s.block_without_button}>
          <div className={s.input_text_block} >
            <h3>Enter your text for analysis</h3>
            <textarea type="text" />
          </div>
          <div className={s.results}>
            <h3>Results</h3>
            <p className={s.results_text}>Positive 65%</p>
          </div>
        </div>
        <Button>Analyse Text</Button>
      </form>

  )
}
