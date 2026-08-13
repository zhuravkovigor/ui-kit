# UI Kit

Accessible React components with a clean, minimalist design inspired by OpenAI's interface.

## Features

- 🎨 **Modern Design**: Rounded corners, subtle shadows, and smooth transitions
- ♿ **Accessible**: ARIA attributes, keyboard navigation, and screen reader support
- 🎯 **Type-Safe**: Full TypeScript support with strict types
- 🎭 **Customizable**: CSS custom properties for theming
- 📦 **Lightweight**: Tree-shakeable ESM exports

## Components

### Form Controls

- **Button**: Primary, secondary, and ghost variants with loading states
- **Input**: Text input with label, hint, and error states
- **Textarea**: Multiline text input with auto-resize
- **Select**: Custom dropdown with keyboard navigation
- **Checkbox**: Custom-styled checkbox with checkmark animation
- **Fieldset**: Semantic grouping for related form controls

### Chat Components

- **ChatInput**: Auto-growing message input with send button and attachments
- **MessageBubble**: User and assistant message bubbles with avatars
- **TypingIndicator**: Animated "typing..." indicator
- **Avatar**: User and assistant avatars with initials or images

### Display

- **CodeBlock**: Syntax-highlighted code with copy button
- **Typography**: Headings, body text, and inline code with consistent styling
- **Toast**: Notification toasts with success, error, warning, and info states

## Usage

```tsx
import { Button, Input, ChatInput, Toast } from "./components";
import "./styles/index.css";

function App() {
  return (
    <>
      <Input label="Email" type="email" required />
      <Button variant="primary">Submit</Button>
      
      <ChatInput
        placeholder="Ask anything..."
        onSend={(msg) => console.log(msg)}
      />
      
      <Toast status="success" title="Saved">
        Your changes have been saved.
      </Toast>
    </>
  );
}
```

## Development

```bash
npm install
npm test              # Run tests
npm run typecheck     # Type checking
npm run storybook     # Component catalog at localhost:6006
```

## Design Tokens

All components use CSS custom properties defined in `src/styles/tokens.css`:

- Colors: `--ui-color-primary`, `--ui-color-text`, `--ui-color-border`
- Spacing: `--ui-space-1` through `--ui-space-4`
- Radius: `--ui-radius-sm`, `--ui-radius-md`, `--ui-radius-lg`
- Typography: `--ui-font-family`, `--ui-font-size-sm/md`

## License

[MIT](LICENSE)
