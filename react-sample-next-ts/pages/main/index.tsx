import type { NextPage } from "next";
import React, { useEffect } from "react";
import { MainLayout, HomeContainer } from "components";

const MainPage: NextPage = () => {
  return (
    <MainLayout id="main-pages">      
      <HomeContainer />
    </MainLayout>
  );
};

export default MainPage;
