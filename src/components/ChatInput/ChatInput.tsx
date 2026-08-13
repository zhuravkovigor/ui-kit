import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type FormEvent,
  type KeyboardEvent,
  type TextareaHTMLAttributes,
} from "react";
import { Paperclip, SendHorizontal } from "lucide-react";

import { Button } from "../Button";

import styles from "./ChatInput.module.css";

export interface ChatInputProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onSubmit"
> {
  onSend?: (value: string) => void;
  sendLabel?: string;
  maxRows?: number;
  sending?: boolean;
  onAttach?: () => void;
  attachLabel?: string;
}

function resizeTextarea(textarea: HTMLTextAreaElement, maxRows: number) {
  textarea.style.blockSize = "auto";

  const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight) || 24;
  const maxHeight = lineHeight * maxRows;
  textarea.style.blockSize = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
}

export const ChatInput = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  function ChatInput(
    {
      attachLabel = "Attach file",
      className,
      disabled = false,
      maxRows = 6,
      onAttach,
      onChange,
      onKeyDown,
      onSend,
      placeholder = "Message...",
      sendLabel = "Send",
      sending = false,
      value,
      ...props
    },
    ref,
  ) {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    useEffect(() => {
      if (internalRef.current) {
        resizeTextarea(internalRef.current, maxRows);
      }
    }, [value, maxRows]);

    function submit() {
      const textarea = internalRef.current;
      const text = textarea?.value.trim();
      if (!text || sending || disabled) {
        return;
      }

      onSend?.(text);

      if (value === undefined && textarea) {
        textarea.value = "";
        resizeTextarea(textarea, maxRows);
      }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
      onKeyDown?.(event);
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        submit();
      }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      submit();
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        {onAttach ? (
          <Button
            aria-label={attachLabel}
            className={styles.attach}
            disabled={disabled || sending}
            onClick={onAttach}
            size="small"
            type="button"
            variant="ghost"
          >
            <Paperclip aria-hidden="true" size={16} />
          </Button>
        ) : null}
        <textarea
          {...props}
          ref={setRefs}
          className={[styles.input, className].filter(Boolean).join(" ")}
          disabled={disabled || sending}
          placeholder={placeholder}
          rows={1}
          value={value}
          onChange={(event) => {
            resizeTextarea(event.currentTarget, maxRows);
            onChange?.(event);
          }}
          onKeyDown={handleKeyDown}
        />
        <Button
          aria-label={sendLabel}
          className={styles.send}
          disabled={disabled}
          loading={sending}
          loadingLabel="Sending"
          size="small"
          type="submit"
        >
          <SendHorizontal aria-hidden="true" size={16} />
        </Button>
      </form>
    );
  },
);
