import { forwardRef, type HTMLAttributes } from "react";

import styles from "./Avatar.module.css";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  variant?: "user" | "assistant" | "neutral";
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { alt, className, name, size = "medium", src, variant = "neutral", ...props },
  ref,
) {
  const classes = [styles.avatar, styles[size], styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} ref={ref} className={classes}>
      {src ? (
        <img
          className={styles.image}
          src={src}
          alt={alt ?? name ?? ""}
          loading="lazy"
        />
      ) : name ? (
        <span className={styles.initials} aria-hidden="true">
          {getInitials(name)}
        </span>
      ) : (
        <span className={styles.fallback} aria-hidden="true" />
      )}
    </div>
  );
});
