import React from 'react'
import { Principal3 } from '../../assets'

const Ecosistema = (props) => {
  return (
    <section className="ecosistema bg-green py-4">
      <div data-aos={props.effect} className="container">
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center my-5">
        <div className="col-lg-5">
              <h2>
                {props.title}
              </h2>
              <p>
                {props.subtitle}
              </p>
              <a href="/contato" className='redirectButton'>
                Saiba mais
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="#ffffff"/></svg>
              </a>
        </div>
        <div className="col-lg-7 text-right">
          <img style={{maxWidth: "100%"}} className="rounded"
            src={Principal3}
            alt=""
          />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Ecosistema