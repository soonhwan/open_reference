import React from "react";

const PageTemplate = ({ children }) => {
  return (
    <div>
      <h1>일정관리앱</h1>
      <div>{children}</div>
    </div>
  );
};

export default PageTemplate;
