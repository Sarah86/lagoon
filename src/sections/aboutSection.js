import React from "react"
import Fade from 'react-reveal/Fade';

const AboutSection = () => (
    <section className="vc_row pt-50 pb-50">
        <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
            <Fade delay={500} duration={2000}>
                <div className="lqd-column col-md-5 mb-30">
                    <h2 className="mt-0 mb-3">Terraço Lagoon</h2>
                    <h3 className="mt-0 mb-40 font-size-14 text-uppercase ltr-sp-05 text-secondary">Quality tours crafted by local experts.</h3>
                    <div className="lqd-h-sep w-10 mb-40">
                        <span className="lqd-h-sep-inner" />{/* /.lqd-h-sep-inner */}
                    </div>{/* /.lqd-h-sep */}
                    <p> We have a selection of over 50 tour programs that range from introductory multi-country itineraries to more regional in-depth options.</p>
                    <br />
                    <p>You’re about to go on the most amazing journey! Welcome to one of Europe’s leading coach tour operators, Ave Tour.</p>
                    <br />
                    <a href="#" className="btn btn-naked font-weight-bold text-uppercase">
                        <span>
                            <span className="btn-txt">Learn More</span>
                        </span>
                    </a>
                </div>{/* /.lqd-column col-md-5 */}
            </Fade>
            <Fade delay={1000} duration={2000}>
                <div className="lqd-column col-md-6 col-md-offset-1 text-center mb-30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2838087112373!2d-43.22054148388227!3d-22.976588884976323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd59f0392569d%3A0x816dbf880e8da697!2sComplexo%20Lagoon!5e0!3m2!1spt-BR!2sbr!4v1582766550481!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style={{border: 0}} allowfullscreen=""></iframe>
                </div>{/* /.lqd-column col-md-6 col-md-offset-1 */}
            </Fade>
            </div>{/* /.row */}
        </div>{/* /.container */}
    </section>


)

export default AboutSection