import type { NextPage } from "next";
import { MainLayout, HomeContainer } from "components";

const MainPage: NextPage = () => {
  return (
    <MainLayout>      
      <div id="main_pages">
        <HomeContainer />
      </div>
    </MainLayout>
  );
};

export default MainPage;
