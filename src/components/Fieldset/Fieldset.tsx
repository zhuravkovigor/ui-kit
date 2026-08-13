import type { FieldsetHTMLAttributes, ReactNode } from "react";

import styles from "./Fieldset.module.css";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: ReactNode;
  hint?: string;
  error?: string;
}

export function Fieldset({
  children,
  className,
  error,
  hint,
  legend,
  ...props
}: FieldsetProps) {
  const classes = [styles.fieldset, className].filter(Boolean).join(" ");

  return (
    <fieldset {...props} className={classes}>
      <legend className={styles.legend}>{legend}</legend>
      {hint ? <span className={styles.hint}>{hint}</span> : null}
      {children}
      {error ? (
        <span className={styles.error} role="alert">
          {error}
        </span>
      ) : null}
    </fieldset>
  );
}
