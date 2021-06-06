import React from "react";
import { CoupleViews } from "./Couple";
import { DateViews } from "./Date";
import { HeaderViews } from "./Header";
import { StoriesViews } from "./Stories";

export const MainPage = () => {
  return (
    <React.Fragment>
      <HeaderViews />
      <DateViews />
      <CoupleViews />
      <StoriesViews />
    </React.Fragment>
  );
};
