import React from "react";
import { CoupleViews } from "./Couple";
import { DateViews } from "./Date";
import { GalleryViews } from "./Gallery";
import { HeaderViews } from "./Header";
import { StoriesViews } from "./Stories";

export const MainPage = () => {
  return (
    <React.Fragment>
      <HeaderViews />
      <StoriesViews />
      <CoupleViews />
      <DateViews />
      <GalleryViews />
    </React.Fragment>
  );
};
