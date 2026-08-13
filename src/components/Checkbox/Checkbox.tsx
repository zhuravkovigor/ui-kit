import { forwardRef, useId, type InputHTMLAttributes } from "react";

import styles from "./Checkbox.module.css";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  hint?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      "aria-describedby": ariaDescribedBy,
      className,
      error,
      hint,
      id: providedId,
      label,
      required,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const id = providedId ?? generatedId;
    const hintId = hint ? `${id}-hint` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy =
      [ariaDescribedBy, hintId, errorId].filter(Boolean).join(" ") || undefined;
    const classes = [styles.checkbox, className].filter(Boolean).join(" ");

    return (
      <div className={styles.field}>
        <label className={styles.control} htmlFor={id}>
          <input
            {...props}
            ref={ref}
            id={id}
            required={required}
            type="checkbox"
            className={classes}
            aria-describedby={describedBy}
            aria-invalid={error ? true : props["aria-invalid"]}
          />
          <span className={styles.label}>
            {label}
            {required ? <span className={styles.required}> *</span> : null}
          </span>
        </label>
        {hint ? (
          <span className={styles.hint} id={hintId}>
            {hint}
          </span>
        ) : null}
        {error ? (
          <span className={styles.error} id={errorId} role="alert">
            {error}
          </span>
        ) : null}
      </div>
    );
  },
);
