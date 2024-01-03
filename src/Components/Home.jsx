import React, {useEffect} from "react";
import { BannerHome } from './index';
import AOS from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    AOS.init({
      duration : 1200
    });
    AOS.refresh();
  }, []);
  
  const homeName = "A melhor opção pra você que deseja criar sua marca própria de suplementos e precisa de soluções ágeis para obter sua independência financeira.";
  const homeSubtitle = "Fabricamos nutracêuticos, que são Vitaminas, Minerais, Aminoácidos e Produtos permitidos pelas legislações vigentes, na forma de Encapsulados e Solúveis. Cuidamos do registro da sua marca e auxiliamos com soluções para alavancar seu negócio."
  
  return (
  <main>

    <BannerHome 
    effect="fade-down"
    name={homeName} 
    subtitle={homeSubtitle} />

    <AboutUs effect="fade-up" />
    
    <Ecosistema
      effect="fade-left" 
      title="Já tem produto e quer trazer para a Lot Nutrition?" 
      subtitle="Se você já possui parceiro de fabricação, mas enfrenta dificuldades em alguma etapa do processo, como qualidade, registro de marca, altas quantidades para fabricação, alto investimento, prazo de entrega e logística, converse com nossa equipe que iremos te ajudar a resolver seus problemas. "
    />

    {/* <Lider 
    title="Nós levamos o seu produto até o seu cliente."
    subtitle="Com um centro de distribuição localizado em Governador Valadares (MG), oferecemos uma infraestrutura de qualidade para estocar os seus itens. Assim, você não precisa se preocupar com o gerenciamento de estoque."
    text="Contamos também com soluções inteligentes para que o transporte seja realizado com precisão e rapidez em todo território nacional. Nosso time é composto por pessoas qualificadas para que todo o processo seja otimizado e feito de maneira eficiente."
    /> */}

    <Nutraceuticos effect="fade-right"/>

    <Processo effect="fade-left" />

    <EmpresaGrid effect="fade-right" />

    <Anvisa effect="fade-left" />

    <Parcerias effect="fade-right" />

    <Porque effect="fade-left" />

  </main>  
  );
}

export default Home;