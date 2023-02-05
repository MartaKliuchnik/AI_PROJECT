import React from 'react';
import Button from '../UI/Button';
import s from './style.module.sass';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export default function TestText() {
  return (
      <form className={s.analyse_text_form}>
      <h2>Quick analysis right now</h2>
      <div className={s.block_with_button}>
        
          <div className={s.input_text_block} >
          <div className={s.subheader}>
            <label>Enter your text for analysis</label>
            <button><ForwardToInboxIcon/></button>
          </div>
          
            <textarea type="text" />
          </div>
          
          <div className={s.results}>
            <label>Results</label>
            <p className={s.results_text}>Positive 65%</p>
          </div>
      </div>
      
      </form>
  )
}
