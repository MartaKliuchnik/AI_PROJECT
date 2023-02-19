import React, {useContext, useEffect, useState} from 'react';
import s from './style.module.sass';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Button }  from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import ai_icon from '../../pages/FreeAnalysisPage/media/ai_image.png';
import { check_free_result } from '../../requests/check_free_result';

export default function TestText() {
  const { isLogin } = useContext(Context);
  const check_register = isLogin ? '/main' : '/registration_form';
  const [resultAnalysis, setResultAnalysis] = useState({});
  
  const submit = (event) => {
    event.preventDefault();
    const { users_text } = event.target;
    const request_text = {
      "text": users_text.value
    };
    console.log(users_text.value);
    // check_free_result(request_text);
    check_free_result(
      request_text,
      response => setResultAnalysis(response)
    );
  }


  // http://127.0.0.1/preview_analyse/
  // {"text": "this product is just awful."}
  // {
  //   "result": {
  //       "emotion": "NEGATIVE",
  //       "score": 98
  //   }
  // }

  const { emotion, score } = resultAnalysis;
  
  const style_emotion =
    emotion === 'NEGATIVE'
    ? { color: '#d50000' }
    : { color: '#1b5e20' }

  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <h2>Quick analysis right now</h2>

      <div className={s.info_block}>
        <p>Enjoy unlimited possibilities ANALAZER now</p>
        <Link to={check_register}>
          <Button style={{width: '200px'}}>Get Started</Button>
        </Link>
      </div>

      <div className={s.analyse_block}>
        <form className={s.analyse_text_form}
        onSubmit={submit}
        >
            <div className={s.subheader}>
              <label>Enter your text for analysis</label>
              <button><ForwardToInboxIcon /></button>
            </div>
          <textarea type="text" name="users_text" />
          </form>
      </div>

      <div className={s.results_block}>
            <div className={s.subheader}>
              <label>Results</label>
              <div className={s.result_container}>
                <p className={s.results_text} style={style_emotion}>{emotion}</p>
                <p className={s.results_text}>{score}</p>
              </div>
            </div>
      </div>

      <div className={s.ai_container}>
        <img src={ai_icon} alt="ai_image" />
      </div>

    </div>
  )
}

