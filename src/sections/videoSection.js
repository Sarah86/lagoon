import React from "react"
import Image from "../components/image"
import Video from "../components/bgvideo"
import FullWidth from "../components/fullWidth"
import styled from "styled-components"

const StyledSection = styled.div`
    height: calc(100vh - 90px);
    position: relative;
`

const VideoSection = () => (

    <StyledSection>
        <FullWidth style={{height: '100%'}}>
            <Video 
                url="https://www.youtube.com/watch?v=uKTWd2DZkUw" 
                width="100vw" 
                height="100%" 
                backgroundColor=" rgba(0, 0, 0, 0.3)" />
            <section className="vc_row pt-60 pb-60" 
                style={{height: '100%', display:'flex', flexDirection:'column', justifyContent: 'center'}}>
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-6 col-md-offset-6 flex-column justify-content-center">
                            <header className="fancy-title">
                                <h6 className="mt-0 mb-1 font-size-11 text-uppercase ltr-sp-15 text-primary">Contact Us</h6>
                                <h5 className="my-0 font-size-30 text-white">Send a message</h5>
                            </header>{/* /.fancy-title */}
                            <div className="contact-form contact-form-inputs-sm contact-form-inputs-underlined contact-form-button-md contact-form-button-block">
                                <form action="assets/php/mailer.php" method="post" noValidate="novalidate">
                                    <div className="row">
                                        <div className="lqd-column col-md-12">
                                            <input type="text" name="name" aria-required="true" aria-invalid="false" placeholder="Name" required />
                                        </div>{/* /.col-md-12 */}
                                        <div className="lqd-column col-md-12">
                                            <input type="email" name="email" aria-required="true" aria-invalid="false" placeholder="email address" required />
                                        </div>{/* /.col-md-12 */}
                                        <div className="lqd-column col-md-12">
                                            <textarea cols={10} rows={3} name="message" aria-required="true" aria-invalid="false" placeholder="Your Message" required defaultValue={""} />
                                        </div>{/* /.col-md-12 */}
                                        <div className="lqd-column col-md-12 text-md-right">
                                            <input type="submit" defaultValue="Subscribe" className="font-size-13 text-uppercase ltr-sp-2 font-weight-semibold text-white w-100" />
                                        </div>{/* /.col-md-12 */}
                                    </div>{/* /.row */}
                                </form>
                                <div className="contact-form-result hidden" />{/* /.contact-form-result */}
                            </div>{/* /.contact-form */}
                        </div>{/* /.lqd-column col-md-4 col-md-offset-4 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>

        </FullWidth>
    </StyledSection>
)

export default VideoSection