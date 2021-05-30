import React from "react";
import moment from "moment";
import "moment/locale/en-gb";
import { useSiteMetadata } from "./useSiteMetadata";

const COUNTDOWN_STATUS_MAP = {
  BEFORE: "BEFORE",
  AFTER: "AFTER",
  WEDDING_DAY: "WEDDING_DAY"
};

export const useCountdown = () => {
  const {
    data: { weddingDate: _wd }
  } = useSiteMetadata();
  const [countdown, setCountdown] = React.useState({});

  const today = new Date();
  const weddingDay = new Date(_wd);
  const difference = +weddingDay - +today;

  const getCountdownEnum = () => {
    if (
      weddingDay.getUTCFullYear() === today.getUTCFullYear() &&
      weddingDay.getUTCMonth() === today.getUTCMonth() &&
      weddingDay.getUTCDate() === today.getUTCDate()
    ) {
      return COUNTDOWN_STATUS_MAP.WEDDING_DAY;
    }

    if (difference >= 86400) {
      return COUNTDOWN_STATUS_MAP.BEFORE;
    }

    return COUNTDOWN_STATUS_MAP.AFTER;
  };

  const getRelativeTime = () => {
    return moment(weddingDay).fromNow();
  };

  const generateRemainingTime = () => {
    const shouldDisplayTime = getCountdownEnum() !== COUNTDOWN_STATUS_MAP.AFTER;
    if (shouldDisplayTime) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toLocaleString(
          "en-US",
          {
            minimumIntegerDigits: 2,
            useGrouping: false
          }
        ),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toLocaleString(
          "en-US",
          {
            minimumIntegerDigits: 2,
            useGrouping: false
          }
        ),
        minutes: Math.floor((difference / 1000 / 60) % 60).toLocaleString(
          "en-US",
          {
            minimumIntegerDigits: 2,
            useGrouping: false
          }
        ),
        seconds: Math.floor((difference / 1000) % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      };
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setCountdown(generateRemainingTime), 1000);

    return () => clearTimeout(timer);
  });

  return { countdown, getCountdownEnum, getRelativeTime };
};
