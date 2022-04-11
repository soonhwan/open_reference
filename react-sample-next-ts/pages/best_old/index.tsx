import type { NextPage } from "next";
import { CategoryNav, MainLayout, TopSellerContainer } from "components";

const BestPage: NextPage = () => {
  return (
    <MainLayout>
      <CategoryNav />
      <div id="main_pages">
        <TopSellerContainer />
      </div>
    </MainLayout>
  );
};

export default BestPage;
