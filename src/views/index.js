import { Box } from "@chakra-ui/layout";
import React from "react";
import { CoupleViews } from "./Couple";
import { DateViews } from "./Date";
import { HeaderViews } from "./Header";
import { StoriesViews } from "./Stories";

export const MainPage = () => {
  return (
    <React.Fragment>
      <HeaderViews />
      <StoriesViews />
      <CoupleViews />
    </React.Fragment>
  );
};
