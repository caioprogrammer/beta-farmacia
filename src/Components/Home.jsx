import React from "react";
import { BannerHome } from './index';
import { 
  Ecosistema, 
  Lider, 
  Nutraceuticos, 
  AboutUs, 
  Parcerias,
  Processo,
  ProcessosLog,
  Fiscal,
  Localizacao,
  SAC,
  Carefee,
  Lidar,
  EmpresaGrid,
  Anvisa
} from './Sections/sections'

function Home() {
  
  const homeName = "A melhor opção pra você que quer criar sua marca própria ou precisa de uma solução logística eficiente.";
  const homeSubtitle = "Fabricamos nutracêuticos, cosméticos, chás e solúveis com a sua marca. Cuidamos também de toda a logística, independente de qual segmento seja o seu negócio."
  
  return (
  <main>

    <BannerHome name={homeName} subtitle={homeSubtitle} />

    <AboutUs />
    
    <Ecosistema 
      title="Já tem produto e quer trazer para o ecossistema Kapsula?" 
      subtitle="se você já tem uma parceria de fabricação e está passando por dificuldades com qualidade, entrega e capacidade de escala, vem pra Kapsula que podemos entregar excelência na sua operação."
    />

    <Lider 
    title="Nós levamos o seu produto até o seu cliente."
    subtitle="Com um centro de distribuição localizado em Governador Valadares (MG), oferecemos uma infraestrutura de qualidade para estocar os seus itens. Assim, você não precisa se preocupar com o gerenciamento de estoque."
    text="Contamos também com soluções inteligentes para que o transporte seja realizado com precisão e rapidez em todo território nacional. Nosso time é composto por pessoas qualificadas para que todo o processo seja otimizado e feito de maneira eficiente."
    />

    <Nutraceuticos />

    <Processo />


    <EmpresaGrid />


    <Anvisa />


    <Lidar />


    <Ecosistema 
      title="Não importa o que você vende, nós fazemos a logística para você." 
      subtitle="Cuidamos de toda a logística de armazenamento e transporte do seu produto, com incentivo fiscal especial que já cobre todos os custos da logística." 
    />


    <Lider 
    title="Nós levamos o seu produto até o seu cliente."
    subtitle="Com um centro de distribuição localizado em Governador Valadares (MG), oferecemos uma infraestrutura de qualidade para estocar os seus itens. Assim, você não precisa se preocupar com o gerenciamento de estoque."
    text="Contamos também com soluções inteligentes para que o transporte seja realizado com precisão e rapidez em todo território nacional. Nosso time é composto por pessoas qualificadas para que todo o processo seja otimizado e feito de maneira eficiente."
    />

    <Parcerias />

    <ProcessosLog />

    <Fiscal />

    <Localizacao />

    <SAC />

    <Carefee />


  </main>  
  );
}

export default Home;