import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type KeyboardEvent,
} from "react";

import styles from "./Select.module.css";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "onChange" | "value"
> {
  label?: string;
  hint?: string;
  error?: string;
  name?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  function Select(
    {
      "aria-describedby": ariaDescribedBy,
      className,
      defaultValue,
      disabled = false,
      error,
      hint,
      id: providedId,
      label,
      name,
      onValueChange,
      options,
      placeholder = "Select an option",
      required,
      value,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const id = providedId ?? generatedId;
    const labelId = `${id}-label`;
    const listboxId = `${id}-options`;
    const hintId = hint ? `${id}-hint` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy =
      [ariaDescribedBy, hintId, errorId].filter(Boolean).join(" ") || undefined;
    const controlRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState(
      defaultValue ?? "",
    );
    const selectedValue = value ?? uncontrolledValue;
    const selectedOption = options.find(
      (option) => option.value === selectedValue,
    );
    const classes = [styles.select, className].filter(Boolean).join(" ");

    useEffect(() => {
      function closeOnPointerDown(event: MouseEvent) {
        if (!controlRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", closeOnPointerDown);
      return () =>
        document.removeEventListener("mousedown", closeOnPointerDown);
    }, []);

    function selectOption(option: SelectOption) {
      if (option.disabled) {
        return;
      }

      if (value === undefined) {
        setUncontrolledValue(option.value);
      }
      onValueChange?.(option.value);
      setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        setIsOpen(true);
      }
    }

    return (
      <div className={styles.field}>
        {label ? (
          <label className={styles.label} htmlFor={id} id={labelId}>
            {label}
            {required ? <span className={styles.required}> *</span> : null}
          </label>
        ) : null}
        <div className={styles.control} ref={controlRef}>
          {name ? (
            <input name={name} type="hidden" value={selectedValue} />
          ) : null}
          <button
            {...props}
            ref={ref}
            id={id}
            type="button"
            disabled={disabled}
            className={classes}
            aria-controls={listboxId}
            aria-describedby={describedBy}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-invalid={error ? true : props["aria-invalid"]}
            onClick={() => setIsOpen((open) => !open)}
            onKeyDown={handleKeyDown}
          >
            <span
              className={
                [styles.value, selectedOption ? undefined : styles.placeholder]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {selectedOption?.label ?? placeholder}
            </span>
            <span className={styles.chevron} aria-hidden="true" />
          </button>
          {isOpen ? (
            <div
              className={styles.menu}
              id={listboxId}
              role="listbox"
              aria-labelledby={label ? labelId : undefined}
            >
              {options.map((option) => (
                <button
                  className={styles.option}
                  disabled={option.disabled}
                  key={option.value}
                  onClick={() => selectOption(option)}
                  role="option"
                  aria-selected={option.value === selectedValue}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
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
