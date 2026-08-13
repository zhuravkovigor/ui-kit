import {
  forwardRef,
  useEffect,
  type HTMLAttributes,
} from "react";
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react";

import styles from "./Toast.module.css";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  status?: "success" | "error" | "warning" | "info";
  title?: string;
  duration?: number;
  onClose?: () => void;
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  function Toast(
    {
      children,
      className,
      duration = 5000,
      onClose,
      status = "info",
      title,
      ...props
    },
    ref,
  ) {
    const Icon = icons[status];
    const classes = [styles.toast, styles[status], className]
      .filter(Boolean)
      .join(" ");

    useEffect(() => {
      if (duration > 0 && onClose) {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    return (
      <div
        {...props}
        ref={ref}
        className={classes}
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
      >
        <Icon className={styles.icon} aria-hidden="true" size={18} />
        <div className={styles.content}>
          {title ? <div className={styles.title}>{title}</div> : null}
          <div className={styles.message}>{children}</div>
        </div>
        {onClose ? (
          <button
            aria-label="Close notification"
            className={styles.close}
            onClick={onClose}
            type="button"
          >
            <X aria-hidden="true" size={16} />
          </button>
        ) : null}
      </div>
    );
  },
);
