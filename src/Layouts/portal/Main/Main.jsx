import React from 'react';
import Header from "../Header/Header";
import { Container } from "reactstrap";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Main = ({children}) => {
    return (
    <Container fluid className="pt-3">
      <Header />
      <Topbar className="bg-green mt-3" appName="DARFO2 PORTAL" fluid={false} isLogin={false} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </Container>
    )
}

export default Main;