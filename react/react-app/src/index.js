import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    dangerouslySetInnerHTML={{
      __html: "<span>111</span>",
    }}
  />
);
