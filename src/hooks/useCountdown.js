import React from "react";
import moment from "moment";
import "moment/locale/en-gb";

export const COUNTDOWN_STATUS_MAP = {
  BEFORE: "BEFORE",
  AFTER: "AFTER",
  WEDDING_DAY: "WEDDING_DAY"
};

export const useCountdown = () => {
  const [countdown, setCountdown] = React.useState({});

  const today = new Date();
  // 2021, 5, 7, 15, 0, 0
  // Mon Jun 07 2021 22:00:00 GMT+0700 (WIB)
  const weddingDay = new Date(Date.UTC(2021, 5, 19, 9, 0, 0));
  const difference = Number(weddingDay) - Number(today);

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
    const status = getCountdownEnum();
    const shouldDisplayTime = status !== COUNTDOWN_STATUS_MAP.AFTER;
    if (shouldDisplayTime) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return {
        days:
          days < 0
            ? 0
            : days.toLocaleString("en-US", {
                minimumIntegerDigits: 1,
                useGrouping: false
              }),
        hours:
          hours < 0
            ? 0
            : hours.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
              }),
        minutes:
          minutes < 0
            ? 0
            : minutes.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
              }),
        seconds:
          seconds < 0
            ? 0
            : seconds.toLocaleString("en-US", {
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
