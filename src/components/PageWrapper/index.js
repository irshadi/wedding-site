import React from "react";
import { NavigationBar } from "../NavigationBar";

export const PageWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationBar />
      {children}
    </React.Fragment>
  );
};
