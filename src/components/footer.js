import React from "react"
import Image from "./image"



const Footer = () => {

    return(
        <footer className="main-footer bg-charade pt-70" data-sticky-footer="true">
  <section>
    <div className="container">
      <div className="row">
        <div className="lqd-column col-md-3 col-sm-6">
        <Image imgName="TERRAÇO-LAGOON-logo.png" style={{
                                                            width: '85px', 
                                                            height: 'auto',
                                                            filter: 'grayscale(1)',
                                                            margin: '.5em 0'}}/>
          <h3 className="widget-title text-white">Company</h3>
          <ul className="lqd-custom-menu reset-ul text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>{/* /.col-md-3 col-sm-6 */}
        <div className="lqd-column col-md-3 col-sm-6">
          <h3 className="widget-title text-white">Products</h3>
          <ul className="lqd-custom-menu reset-ul text-white">
            <li><a href="#">Company</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>{/* /.col-md-3 col-sm-6 */}
        <div className="lqd-column col-md-3 col-sm-6">
          <h3 className="widget-title text-white">Products</h3>
          <p>
            hello@ave.com
            <br />
            <br />
            290 Maryam Springs 260,
            Courbevoie, Paris, France
            <br />
            <br />
            +47 213 5941 295
          </p>
        </div>{/* /.col-md-3 col-sm-6 */}
        <div className="lqd-column col-md-3 col-sm-6">
          <h3 className="widget-title text-white">Follow us</h3>
          <ul className="social-icon social-icon-md">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-youtube-play" /></a></li>
          </ul>
          <h3 className="widget-title text-white">Subscribe</h3>
          <div className="ld-sf ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--circle ld-sf--border-thin ld-sf--button-show ld-sf--button-inline">
            <form id="ld_subscribe_form" className="ld_sf_form" action="{YOUR_MAILCHIMP_ACTION_URL}" name="mc-embedded-subscribe-form" method="post">
              <p className="ld_sf_paragraph pr-2">
                <input type="email" className="ld_sf_text" id="mce-EMAIL" name="EMAIL" placeholder="Your email" defaultValue />
              </p>
              <button type="submit" className="ld_sf_submit px-4">
                <span className="submit-icon">
                  <i className="fa fa-angle-right" />
                </span>
                <span className="ld-sf-spinner">
                  <span>Sending </span>
                </span>
              </button>
            </form>
            <div className="ld_sf_response" />
          </div>{/* /.ld-sf */}
        </div>{/* /.col-md-3 col-sm-6 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </section>
  <section className="bt-fade-white-015 pt-35 pb-35 mt-50">
    <div className="container">
      <div className="row">
        <div className="lqd-column col-md-6">
          <ul className="lqd-custom-menu reset-ul inline-nav">
            <li><a href="#">Ave Guide</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Intergrations</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>{/* /.col-md-6 */}
        <div className="lqd-column col-md-6 text-md-right">
          <p className="my-0"><span style={{fontSize: 15}}>© 2019 Ave theme. Made with love.</span></p>
        </div>{/* /.col-md-6 text-md-right */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </section>
</footer>

    )
}

export default Footer