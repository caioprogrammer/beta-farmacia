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
  Anvisa,
  Porque,
  Burocracia
} from './Sections/sections'

function Home() {
  
  const homeName = "A melhor opção pra você que deseja criar sua marca própria de suplementos e precisa de soluções ágeis para obter sua independência financeira.";
  const homeSubtitle = "Fabricamos nutracêuticos, que são Vitaminas, Minerais, Aminoácidos e Produtos permitidos pelas legislações vigentes, na forma de Encapsulados e Solúveis. Cuidamos do registro da sua marca e auxiliamos com soluções para alavancar seu negócio."
  
  return (
  <main>

    <BannerHome name={homeName} subtitle={homeSubtitle} />

    <AboutUs />
    
    <Ecosistema 
      title="Já tem produto e quer trazer para o ecossistema Italabs?" 
      subtitle="Se você já possui parceiro de fabricação, mas enfrenta dificuldades em alguma etapa do processo, como qualidade, registro de marca, altas quantidades para fabricação, alto investimento, prazo de entrega e logística, converse com nossa equipe que iremos te ajudar a resolver seus problemas. "
    />

    {/* <Lider 
    title="Nós levamos o seu produto até o seu cliente."
    subtitle="Com um centro de distribuição localizado em Governador Valadares (MG), oferecemos uma infraestrutura de qualidade para estocar os seus itens. Assim, você não precisa se preocupar com o gerenciamento de estoque."
    text="Contamos também com soluções inteligentes para que o transporte seja realizado com precisão e rapidez em todo território nacional. Nosso time é composto por pessoas qualificadas para que todo o processo seja otimizado e feito de maneira eficiente."
    /> */}

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


    <Porque />

    <Burocracia />


    <Carefee />


  </main>  
  );
}

export default Home;