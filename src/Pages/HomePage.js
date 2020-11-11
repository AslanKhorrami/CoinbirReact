import React from "react";
import HomeTable from "../Components/HomeTable";
import HomeTableDescription from "../Components/HomeTableDescription";
import DividerSkewCC from "../Components/DividerSkewCC";
import DividerSkewC from "../Components/DividerSkewC";
import HomeIntroducing from "../Components/HomeIntroducing";
import DedicatedApp from "../Components/DedicatedَApp";
import WhyOfUse from "../Components/WhyOfUse";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HomeTable />
      <HomeTableDescription />
      <DividerSkewCC />
      <HomeIntroducing />
      <DividerSkewC />
      <DedicatedApp />
      <DividerSkewCC />
      <WhyOfUse />
      <Footer />
    </div>
  );
}

export default HomePage;
