import React from "react";
import logoFooter from '../assets/logo_branca.png';

function Footer() {
  return (
    <div className="footer mt-5">
      {/* <div className="py-4 border-bottom border-top">
        <div className="container grid__status">
          <div className="status__item">
            <h4>14</h4>
            <p>Anos de experiência</p>
          </div>
          <div className="status__item">
            <h4>1.200m²</h4><p>Para armazenamento</p>
          </div>
          <div className="status__item">
            <h4>+2 Milhões</h4>
            <p>De pedidos operados</p>
          </div>
          <div className="status__item">
            <h4>+900</h4>
            <p>Clientes</p>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="footer__top border-bottom py-5">
          <div className="acesso">
            <p>Acesso</p>
            <a href="/">Início</a>
            <a href="/fabricacao">Fabricação</a>
          </div>
          <div className="empresa">
            <p>Empresa</p>
            <a href="/sobre">Sobre</a>
          </div>
          <div className="suporte">
            <p>Suporte</p>
            <a href="/contato">Fale Conosco</a>
            <a href="/termos-de-uso">Termos de Uso</a>
            <a href="/politica">Política de Privacidade</a>
          </div>
          <div className="redesSociais">
            <a href="https://www.instagram.com/italabssuplementos">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* <a href="https://www.youtube.com/centralmanipulados/">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a> */}
            <a href="https://www.facebook.com/italabssuplementos">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
          <div className="ondeEstamos">
            <p>Onde Estamos?</p>
            <a href="https://goo.gl/maps/M8c7asidmcbcDqoE6">
            Av. Santa Cruz, 1755 - Itaporanga - SP | CEP: 18480-000
            </a>
          </div>
          <div className="sac">
            <p>SAC</p>
            <a href="#0">(15) 99626-0340</a>
            <a href="#0">(15) 99679-4076</a>
            <a href="#0">(47) 99124-1414</a>
          </div>
          <div className="dados">
            <p>Dados da Empresa</p>
            <a href="#0">
            Italabs Nutracêuticos Ltda. <br /> 
            CNPJ: 39.747.421/0001-16
            </a>
          </div>
        </div>
        <div className="footer__bottom py-4">
          <img style={{ width: "175px" }} src={logoFooter} alt="Logo Bottom" />
          <span>Feito com ❤️ por <a style={{color: "#fff"}} href="https://www.swordagency.com.br">Sword Agency</a> </span>
        </div>

        <div className="footer__final py-1">
          <p style={{fontSize: "12px"}} className="text-center">
            Todos os Direitos Reservados. As informações contidas nesse site são fornecidas somente para fins educativos e não tem a intenção de substituir, de forma alguma,
            a relação entre médico e paciente. Todas as decisções relacionadas a tratamento de pacientes devem ser tomadas por profissionais 
            especializados que conhecem o histórico dos pacientes. As informações aqui contidas destinam-se ao público em geral. 
            Em caso de dúvidas, favor contatar o nosso Serviço de Atencimento ao Consumidor.
          </p>
        </div>
      </div>

      <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=5515996794070&text=Ol%C3%A1%20Italabs%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
}

export default Footer;