import React, {useContext} from 'react';
import s from './style.module.sass';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import ai_icon from '../../pages/FreeAnalysisPage/media/ai_image.png';

export default function TestText() {
  const { isLogin } = useContext(Context);
  const check_register = isLogin ? '/main' : '/registration_form';

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
          <form className={s.analyse_text_form}>
            <div className={s.subheader}>
              <label>Enter your text for analysis</label>
              <button><ForwardToInboxIcon /></button>
            </div>
            <textarea type="text" />
          </form>
      </div>

      <div className={s.results_block}>
            <div className={s.subheader}>
              <label>Results</label>
              <div className={s.result_container}>
                <p className={s.results_text}></p>
              </div>
            </div>
      </div>

      <div className={s.ai_container}>
        <img src={ai_icon} alt="ai_image" />
      </div>

    </div>
  )
}

