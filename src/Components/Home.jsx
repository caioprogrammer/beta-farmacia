import React from "react";
import { BannerHome } from './index';
import { 
  Ecosistema, 
  Nutraceuticos, 
  AboutUs, 
  Parcerias,
  Processo,
  EmpresaGrid,
  Anvisa,
  Porque,
} from './Sections/sections'

function Home() {
  
  const homeName = "A melhor opção pra você que deseja criar sua marca própria de suplementos e precisa de soluções ágeis para obter sua independência financeira.";
  const homeSubtitle = "Fabricamos nutracêuticos, que são Vitaminas, Minerais, Aminoácidos e Produtos permitidos pelas legislações vigentes, na forma de Encapsulados e Solúveis. Cuidamos do registro da sua marca e auxiliamos com soluções para alavancar seu negócio."
  
  return (
  <main>

    <BannerHome name={homeName} subtitle={homeSubtitle} />

    <AboutUs />
    
    <Ecosistema 
      title="Já tem produto e quer trazer para a Italabs:" 
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

    <Parcerias />

    <Porque />

  </main>  
  );
}

export default Home;