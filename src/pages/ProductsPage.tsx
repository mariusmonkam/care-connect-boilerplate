// src/pages/ProductsPage.tsx

import React from "react";
import { appData } from "../data/appData";
import PageConfigurator from "../components/PageConfigurator";

const ProductsPage: React.FC = () => {
  return (
    <PageConfigurator pageData={appData.pages.product} pageName="product" />
  );
};

export default ProductsPage;
