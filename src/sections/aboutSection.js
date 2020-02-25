import React from "react"

const AboutSection = () => (
    <section className="vc_row pt-50 pb-50">
        <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
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
                <div className="lqd-column col-md-6 col-md-offset-1 text-center mb-30">
                    <div className="liquid-img-group-single mb-3" data-reveal="true" data-reveal-options="{&quot;direction&quot;:&quot;lr&quot;,&quot;bgcolor&quot;:&quot;&quot;,&quot;delay&quot;:&quot;&quot;}">
                        <div className="liquid-img-group-img-container">
                            <div className="liquid-img-group-content content-floated-mid">
                                <a href="https://www.youtube.com/watch?v=JN-suUcRdqQ" className="btn btn-naked fresco btn-icon-block btn-icon-top btn-icon-xlg btn-icon-circle btn-icon-solid btn-icon-ripple">
                                    <span>
                                        <span className="btn-icon bg-white text-primary">
                                            <i className="fa fa-play" />
                                        </span>
                                    </span>
                                </a>
                            </div>{/* /.liquid-img-group-content */}
                            <div className="liquid-img-container-inner">
                                <figure>
                                    <img width={1141} height={760} src="./assets/demo/misc/fb-40.jpg" alt="On your own, you see. On a tour, you do." />
                                </figure>
                            </div>{/* /.liquid-img-container-inner */}
                        </div>{/* /.liquid-img-group-img-container */}
                    </div>{/* /.liquid-img-group-single */}
                    <p>On your own, you see. On a tour, you do.</p>
                </div>{/* /.lqd-column col-md-6 col-md-offset-1 */}
            </div>{/* /.row */}
        </div>{/* /.container */}
    </section>


)

export default AboutSection