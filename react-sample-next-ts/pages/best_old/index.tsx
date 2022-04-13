import type { NextPage } from "next";
import { CategoryBar, MainLayout, TopSellerContainer } from "components";

const BestPage: NextPage = () => {
  return (
    <MainLayout>
      <CategoryBar />
      <div id="main_pages">
        <TopSellerContainer />
      </div>
    </MainLayout>
  );
};

export default BestPage;
