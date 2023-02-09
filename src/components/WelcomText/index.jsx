import React from 'react'
import Button from '../UI/Button';
import s from './style.module.sass';

export default function WelcomText() {
  return (
    <section className={[s.welcome_section, 'wrapper'].join(' ')}>
        <div className={s.block_why}>
          <h1>Analyze customer reviews</h1>
          <p>"AI-powered insights at your fingertips Understanding Your Customers through Review Analysis
            As a business, it's crucial to know what your customers think about your products or services. This information can help you identify areas for improvement, as well as what you're doing right. One of the best ways to gather this information is by analyzing customer reviews."
          </p>
          <Button>Read more</Button>
      </div>   
    </section>
  )
}
