import { forwardRef, type HTMLAttributes } from "react";

import styles from "./TypingIndicator.module.css";

export interface TypingIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const TypingIndicator = forwardRef<HTMLDivElement, TypingIndicatorProps>(
  function TypingIndicator(
    { className, label = "Assistant is typing", ...props },
    ref,
  ) {
    const classes = [styles.indicator, className].filter(Boolean).join(" ");

    return (
      <div
        {...props}
        ref={ref}
        className={classes}
        role="status"
        aria-label={label}
      >
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    );
  },
);
