import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import { ArrowUp, Mic, Plus } from "lucide-react";

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
  onVoice?: () => void;
  voiceLabel?: string;
  actions?: ReactNode;
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
      actions,
      attachLabel = "Attach file",
      className,
      disabled = false,
      maxRows = 6,
      onAttach,
      onChange,
      onKeyDown,
      onSend,
      onVoice,
      placeholder = "Message...",
      sendLabel = "Send",
      sending = false,
      value,
      voiceLabel = "Voice input",
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
          <button
            aria-label={attachLabel}
            className={styles.action}
            disabled={disabled || sending}
            onClick={onAttach}
            type="button"
          >
            <Plus aria-hidden="true" size={18} />
          </button>
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
        {actions}
        {onVoice ? (
          <button
            aria-label={voiceLabel}
            className={styles.action}
            disabled={disabled || sending}
            onClick={onVoice}
            type="button"
          >
            <Mic aria-hidden="true" size={18} />
          </button>
        ) : null}
        <button
          aria-label={sendLabel}
          className={styles.send}
          disabled={disabled || sending}
          type="submit"
        >
          {sending ? (
            <span className={styles.spinner} aria-label="Sending" />
          ) : (
            <ArrowUp aria-hidden="true" size={18} />
          )}
        </button>
      </form>
    );
  },
);
