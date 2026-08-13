import { forwardRef, useId, type TextareaHTMLAttributes } from "react";

import styles from "./Textarea.module.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
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
    const classes = [styles.textarea, className].filter(Boolean).join(" ");

    return (
      <div className={styles.field}>
        {label ? (
          <label className={styles.label} htmlFor={id}>
            {label}
            {required ? <span className={styles.required}> *</span> : null}
          </label>
        ) : null}
        <textarea
          {...props}
          ref={ref}
          id={id}
          required={required}
          className={classes}
          aria-describedby={describedBy}
          aria-invalid={error ? true : props["aria-invalid"]}
        />
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
