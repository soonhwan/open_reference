import type { NextPage } from "next";
import { GnbMenu, MainLayout, HomeContainer } from "components";

const MainPage: NextPage = () => {
  return (
    <MainLayout>
      <GnbMenu />
      <div id="main_pages">
        <HomeContainer />
      </div>
    </MainLayout>
  );
};

export default MainPage;
