import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useTranslation } from "react-i18next";

dayjs.extend(utc);
dayjs.extend(timezone);

type CountDownProps = {
  till: number; // Unix timestamp
};

const styles = createUseStyles({
  countDown: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  timeBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  timeBlockValue: {
    fontWeight: "bold",
    borderRadius: 6,
    backgroundColor: "var(--color-light-grey)",
    width: 42,
    height: 42,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  timeBlockLabel: {
    marginBottom: 6,
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  separator: {
    fontWeight: "bold",
    fontSize: 36,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "14px",
    opacity: 0.5,
  },
});

export const CountDown: React.FC<CountDownProps> = ({ till }) => {
  const classes = styles();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t } = useTranslation();

  function calculateTimeLeft() {
    const now = dayjs().tz();
    const endTime = dayjs(till).tz();
    const diff = endTime.diff(now, "second");

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (60 * 60 * 24)),
      hours: Math.floor((diff / (60 * 60)) % 24),
      minutes: Math.floor((diff / 60) % 60),
      seconds: Math.floor(diff % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [till, timezone]);

  return (
    <div className={classes.countDown}>
      <div className={classes.timeBlock}>
        <div className={classes.timeBlockLabel}>{t("times.day")}</div>
        <div className={classes.timeBlockValue}>{timeLeft.days}</div>
      </div>
      <div className={classes.separator}>:</div>
      <div className={classes.timeBlock}>
        <div className={classes.timeBlockLabel}>{t("times.hour")}</div>
        <div className={classes.timeBlockValue}>{timeLeft.hours}</div>
      </div>
      <div className={classes.separator}>:</div>
      <div className={classes.timeBlock}>
        <div className={classes.timeBlockLabel}>
          {t("times.minute").slice(0, 3)}
        </div>
        <div className={classes.timeBlockValue}>{timeLeft.minutes}</div>
      </div>
      <div className={classes.separator}>:</div>
      <div className={classes.timeBlock}>
        <div className={classes.timeBlockLabel}>
          {t("times.second").slice(0, 3)}
        </div>
        <div className={classes.timeBlockValue}>{timeLeft.seconds}</div>
      </div>
    </div>
  );
};
