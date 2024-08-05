// src/pages/AboutUsPage.tsx

import React from "react";
import { appData } from "../data/appData";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/BlogPage.css";
const BlogPage: React.FC = () => {
  return <PageConfigurator pageData={appData.pages.blog} pageName="blog" />;
};

export default BlogPage;
