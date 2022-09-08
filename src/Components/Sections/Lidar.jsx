import React from 'react'

const Lidar = () => {
  return (
    <section style={{background: "#e6e9f3"}}>
          <div className="container py-5">
            <div className='content flex-column-reverse flex-lg-row d-flex align-items-center justify-content-between'>
              <div className='image my-2 mr-0 mr-lg-5'>
                <img src="https://via.placeholder.com/360x150" alt="ok" />
              </div>
              <div style={{maxWidth: "60%"}} className='mw-auto logistica'>
                <h2>Lidamos com a sua logística</h2>
                <p style={{
              fontSize: "16px",
              fontWeight: "400",
              marginBottom: "32px",
              color: "#626262"}} >
                Nosso time está preparado para lidar com a 
                logística de qualquer produto. 
                Nossa central de distribuição conta com 1.200m² 
                para armazenamento seguro dos seus produtos 
                e entrega precisa ao cliente final. 
                Isso tudo sem você se preocupar com nenhum processo.
                </p>
                <a href="#0" className='moreButton'>
                  Saiba Mais
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="#030D45"/></svg>
                </a>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Lidar