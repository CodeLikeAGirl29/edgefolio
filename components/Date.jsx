import React from "react";
import { config } from "../theme.config";

const DateComponent = (props) => {
  const { date, className, ...rest } = props;
  if (!date) return null;
  const dateObj = new Date(date);

  return (
    <dl className={className} {...rest}>
      <dt className="sr-only">Published on</dt>
      <dd className="inline">
        <time dateTime={date}>
          {dateObj.toLocaleDateString(config.dateLocale, config.dateOptions)}
        </time>
      </dd>
    </dl>
  );
};

export default DateComponent;
