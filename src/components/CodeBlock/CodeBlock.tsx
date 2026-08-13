import { forwardRef, useState, type HTMLAttributes } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "./CodeBlock.module.css";

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  copyLabel?: string;
  copiedLabel?: string;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  function CodeBlock(
    {
      className,
      code,
      copyLabel = "Copy code",
      copiedLabel = "Copied",
      language = "text",
      showLineNumbers = false,
      ...props
    },
    ref,
  ) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard API unavailable
      }
    }

    const classes = [styles.block, className].filter(Boolean).join(" ");

    return (
      <div {...props} ref={ref} className={classes}>
        <button
          aria-label={copied ? copiedLabel : copyLabel}
          className={styles.copy}
          onClick={handleCopy}
          type="button"
        >
          {copied ? (
            <Check aria-hidden="true" size={14} />
          ) : (
            <Copy aria-hidden="true" size={14} />
          )}
        </button>
        <span className={styles.language}>{language}</span>
        <SyntaxHighlighter
          codeTagProps={{ className: styles.codeTag }}
          customStyle={{
            background: "transparent",
            fontSize: "0.8125rem",
            lineHeight: 1.6,
            margin: 0,
            padding:
              "calc(var(--ui-space-4) + 2rem) var(--ui-space-4) var(--ui-space-4)",
          }}
          language={language}
          showLineNumbers={showLineNumbers}
          style={oneDark}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  },
);
