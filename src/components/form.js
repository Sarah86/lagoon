import React from "react"

const Form = () => {
    return(
       <>
                            <header className="fancy-title">
                                <h6 className="mt-0 mb-1 font-size-11 text-uppercase ltr-sp-15 text-primary">Entre em contato</h6>
                                <h5 className="my-0 font-size-30 text-dark" style={{lineHeight: 1}}>Envie uma mensagem</h5>
                            </header>{/* /.fancy-title */}
                            <div className="contact-form contact-form-inputs-sm contact-form-inputs-underlined contact-form-button-md contact-form-button-block">
                                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="contact" />
                                    <div className="row">
                                        <div className="lqd-column col-md-12">
                                            <input type="text" name="name" aria-required="true" aria-invalid="false" placeholder="Nome" required />
                                        </div>{/* /.col-md-12 */}
                                        <div className="lqd-column col-md-12">
                                            <input type="email" name="email" aria-required="true" aria-invalid="false" placeholder="E-mail" required />
                                        </div>{/* /.col-md-12 */}
                                        <div className="lqd-column col-md-12">
                                            <textarea cols={10} rows={3} name="message" aria-required="true" aria-invalid="false" placeholder="Sua mensagem" required defaultValue={""} />
                                        </div>{/* /.col-md-12 */}
                                        <div className="lqd-column col-md-12 text-md-right">
                                            <input type="submit" value="Enviar" className="font-size-13 text-uppercase ltr-sp-2 font-weight-semibold text-white w-100" />
                                        </div>{/* /.col-md-12 */}
                                    </div>{/* /.row */}
                                </form>
                                <div className="contact-form-result hidden" />{/* /.contact-form-result */}
                            </div>{/* /.contact-form */}
                       </>
    )
}

export default Form