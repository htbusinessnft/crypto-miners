import React from "react";
import Layout from "../../components/Layout";
import Header from "./Header";
import EarnMoney from "./EarnMoney";
import Faq from "./Faq";
import RoadMap from "./RoadMap";

const Index = () => {
  return (
    <div>
      <Layout>
        <Header />
        <div id="EarnMoney">
          <EarnMoney />
        </div>
        <div id="RoadMap">
          <RoadMap />
        </div>
        <div id="FAQ">
          <Faq />
        </div>
      </Layout>
    </div>
  );
};

export default Index;
