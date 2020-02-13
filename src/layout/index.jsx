import React from "react";
import Helmet from "react-helmet";
import { Layout, Menu, Breadcrumb } from 'antd';


import config from "../../data/SiteConfig";
import 'antd/dist/antd.css'
import "./index.css";
import MenuDefault from "../components/Menu";
import MenuMobile from "../components/MenuMobile";
import { Default, Desktop, Mobile } from "../components/MediaQueries"

const { Header, Content, Footer } = Layout;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>

        <Mobile>
          <MenuMobile />
        </Mobile>

        <Default>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'inherit' }}>
            <div className="logo" />
            <MenuDefault />
          </Header>
        </Default>

        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}