import React from "react";
import { NavigationBar } from "../NavigationBar";

export const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationBar />
      {children}
    </React.Fragment>
  );
};
