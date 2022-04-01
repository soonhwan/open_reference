import type { NextPage } from "next";
import { GnbMenu, MainLayout, TopSellerContainer } from "components";

const BestPage: NextPage = () => {
  return (
    <MainLayout>
      <GnbMenu />
      <div id="main_pages">
        <TopSellerContainer />
      </div>
    </MainLayout>
  );
};

export default BestPage;
