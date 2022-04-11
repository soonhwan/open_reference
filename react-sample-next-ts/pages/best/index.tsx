import type { NextPage } from "next";
import { MainLayout, TopSellerContainer } from "components";

const BestPage: NextPage = () => {
  return (
    <MainLayout>
      <div id="main-pages">
        <TopSellerContainer />
      </div>
    </MainLayout>
  );
};

export default BestPage;
