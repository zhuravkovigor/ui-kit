import { forwardRef, type HTMLAttributes, type ElementType } from "react";

import styles from "./Typography.module.css";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body"
    | "body-large"
    | "body-small"
    | "caption"
    | "code";
  as?: ElementType;
  color?: "default" | "muted" | "accent";
}

const defaultElements: Record<string, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-large": "p",
  "body-small": "p",
  caption: "span",
  code: "code",
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  function Typography(
    { as, children, className, color = "default", variant = "body", ...props },
    ref,
  ) {
    const Component = as ?? defaultElements[variant] ?? "p";
    const classes = [
      styles.typography,
      styles[variant],
      color !== "default" ? styles[color] : undefined,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component {...props} ref={ref} className={classes}>
        {children}
      </Component>
    );
  },
);
