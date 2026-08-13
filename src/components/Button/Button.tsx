import { forwardRef, type ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  loadingLabel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className,
      disabled = false,
      fullWidth = false,
      loading = false,
      loadingLabel = "Loading",
      size = "medium",
      type = "button",
      variant = "primary",
      ...props
    },
    ref,
  ) {
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : undefined,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        {...props}
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        type={type}
        aria-busy={loading || undefined}
      >
        {loading ? (
          <span aria-label={loadingLabel}>{loadingLabel}</span>
        ) : (
          children
        )}
      </button>
    );
  },
);
