import React from "react";

export const useScroll = () => {
  const galleryRef = React.useRef();
  const storyRef = React.useRef();

  const scrollToGallery = () =>
    galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return {
    galleryRef,
    storyRef,
    scrollToGallery
  };
};
