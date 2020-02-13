import React, { Component } from "react";
import Helmet from "react-helmet";
import { Button, DatePicker } from 'antd';

import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";


class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
          <>
            <Button type="primary">PRESS ME</Button>
            <DatePicker />
          </>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
