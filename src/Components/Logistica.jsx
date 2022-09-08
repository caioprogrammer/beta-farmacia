import React from 'react';
import { Banner } from './index';
import { Lider, Fill, Parcerias, ProcessosLog, Fiscal, SAC, Localizacao } from './Sections/sections';

const Logistica = () => {
  return (
    <section>
      <Banner 
        name="Logística" 
        subtitle= "Através de uma logística desenvolvida com as melhores estratégias, cuidamos de toda parte d armazenamento e entrega dos seus produtos." 
      />
      
      <div className="logistica"> 
        
        <Lider 
          title="Nós levamos o seu produto até o seu cliente."
          subtitle="Com um centro de distribuição localizado em Governador Valadares (MG), oferecemos uma infraestrutura de qualidade para estocar os seus itens. Assim, você não precisa se preocupar com o gerenciamento de estoque."
          text="Contamos também com soluções inteligentes para que o transporte seja realizado com precisão e rapidez em todo território nacional. Nosso time é composto por pessoas qualificadas para que todo o processo seja otimizado e feito de maneira eficiente."
        />
          
        <Fill />

        <Parcerias />

        <ProcessosLog />

        <Fiscal />

        <SAC />

        <Localizacao />

      </div>
    </section>
  )
}

export default Logistica