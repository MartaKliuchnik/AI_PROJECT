import React from 'react';
import s from './style.module.sass';

export default function EasySteps() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.free_steps_title}>three easy steps</p>

            <div className={s.free_steps_block}>
                <div className={s.step_block}>
                    <p className={s.number_step}>1</p>
                    <div className={s.step_container}>
                        <p className={s.title_step}>Register</p>
                        <p>Use all the functionality of the platform</p>
                    </div>
                </div>

                <div className={s.step_block}>
                    <p className={s.number_step}>2</p>
                    <div className={s.step_container}>
                        <p className={s.title_step}>Download data</p>
                        <p>Import products from a file or add manually</p>
                    </div>
                </div>

                <div className={s.step_block}>
                    <p className={s.number_step}>3</p>
                    <div className={s.step_container}>
                        <p className={s.title_step}>Get analysis</p>
                        <p>Manage your data and use it in your business</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
