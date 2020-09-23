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

export default SigaNos