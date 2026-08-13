import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import { Avatar } from "../Avatar";

import styles from "./MessageBubble.module.css";

export interface MessageBubbleProps extends HTMLAttributes<HTMLDivElement> {
  author?: "user" | "assistant";
  senderName?: string;
  senderAvatarSrc?: string;
  timestamp?: string;
  status?: "sending" | "sent" | "read" | "error";
  footer?: ReactNode;
}

const statusLabels: Record<
  NonNullable<MessageBubbleProps["status"]>,
  string
> = {
  sending: "Sending",
  sent: "Sent",
  read: "Read",
  error: "Failed to send",
};

export const MessageBubble = forwardRef<HTMLDivElement, MessageBubbleProps>(
  function MessageBubble(
    {
      author = "assistant",
      children,
      className,
      footer,
      senderAvatarSrc,
      senderName,
      status,
      timestamp,
      ...props
    },
    ref,
  ) {
    const classes = [
      styles.message,
      styles[author],
      status === "error" ? styles.error : undefined,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div {...props} ref={ref} className={classes}>
        <Avatar
          name={senderName ?? (author === "user" ? "You" : "Assistant")}
          src={senderAvatarSrc}
          size="small"
          variant={author}
        />
        <div className={styles.content}>
          <div className={styles.bubble}>{children}</div>
          {timestamp || status || footer ? (
            <div className={styles.meta}>
              {timestamp ? (
                <time className={styles.timestamp}>{timestamp}</time>
              ) : null}
              {status ? (
                <span
                  className={
                    status === "error" ? styles.statusError : styles.status
                  }
                  role={status === "error" ? "alert" : undefined}
                >
                  {statusLabels[status]}
                </span>
              ) : null}
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);
