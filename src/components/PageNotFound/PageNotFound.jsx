import "./PageNotFound.css";
import React from "react";
import NotFound from '../../assets/NotFound.png';
function PageNotFound() {
  return (
    <div className="page-not-found">
      <img src={NotFound} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
