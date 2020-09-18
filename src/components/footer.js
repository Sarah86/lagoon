import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'

import Image from "./image"
import SocialList from "./social"
import Sections from "./sections.json"

const SigaNos = () => (
  <div className="lqd-column col-md-4 col-sm-6 pt-30">
    <h3 className="widget-title text-white">Inscreva-se</h3>
    <div className="ld-sf ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--border-thin ld-sf--button-show ld-sf--button-inline">
      <form id="ld_subscribe_form" className="ld_sf_form flex-column" action="{YOUR_MAILCHIMP_ACTION_URL}" name="mc-embedded-subscribe-form" method="post">
        <p className="ld_sf_paragraph p-0">
          <input type="email" className="ld_sf_text" id="mce-EMAIL" name="EMAIL" placeholder="Seu e-mail" />
        </p>
        <button type="submit" className="ld_sf_submit">
          <span className="submit-icon">
            Inscreva-se agora
          </span>
          <span className="ld-sf-spinner">
            <span>Enviando</span>
          </span>
        </button>
      </form>
      <div className="ld_sf_response" />
    </div>{/* /.ld-sf */}
  </div>
)

const Contato = () => (
  <div className="lqd-column col-md-4 col-sm-6 pt-30">
    <h3 className="widget-title text-white">Contato</h3>
    <p>
    contato@partygroup.com.br
      <br />
      Av. Borges de Medeiros, 1424 Bloco III Lagoa, Rio de Janeiro – RJ – CEP 22470-003
      <SocialList className="social-icon social-icon-sm pt-30" />
    </p>
  </div>
)

const Links = () => {
  const LinkMenu = Sections.map((section, i) => (
    <li key={i}>
        <a onClick={() => scrollTo(`#${section.id}`)} style={{ cursor: 'default' }}>
          {section.name}
        </a>
    </li>
  ))

  return (
    <div className="lqd-column col-md-4 col-sm-6 pt-30">
      <h3 className="widget-title text-white">Links</h3>
      <ul className="lqd-custom-menu reset-ul text-white">
        {LinkMenu}
      </ul>
    </div>
  )
}

const Footer = () => {

  return (
    <footer className="main-footer bg-charade pt-40" data-sticky-footer="true">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
            <Image imgName="TL-COLOR-NEGATIVA.png" style={{
              width: '85px',
              height: 'auto',
              margin: 'auto',
            }} />
            </div>
          </div>
          <div className="row text-center">
            <Links />
            <SigaNos />
            <Contato />
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
      <section className="bt-fade-white-015 pt-35 pb-35 mt-50">
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-6 text-md-left">
              <p className="my-0"><span style={{ fontSize: 15 }}>© 2020 Espaço Lagoon.</span> </p>
            </div>{/* /.col-md-6 text-md-right */}
            <div className="lqd-column col-md-6 text-md-right">
              <p  className="my-0"><span style={{ fontSize: 15 }}>Design: <a href="http://gara.dj">Alvaro Marques</a>. Desenvolvimento Web: <a href="http://sarahgoncalves.netlify.app">Sarah Gonçalves</a>.</span></p>
            </div>{/* /.col-md-6 text-md-right */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    </footer>

  )
}

export default Footer