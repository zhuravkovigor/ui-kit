# Component Roadmap

## Next Release: Form Building Blocks

Build components that extend the existing Button, Input, and Textarea primitives without introducing complex overlay or navigation behavior.

- `Checkbox`: controlled and uncontrolled usage, description text, indeterminate state, and error wiring.
- `Select`: label, hint, error, placeholder option, and native keyboard behavior.
- `Fieldset`: semantic grouping for related controls with shared hint and error content.

## Chat Building Blocks

Components for conversational interfaces, built on top of the form primitives and the shared token system.

- `Avatar`: initials, image, and fallback states with user/assistant color variants.
- `TypingIndicator`: accessible animated indicator for pending assistant replies.
- `MessageBubble`: user and assistant messages with avatar, timestamp, and delivery status.
- `ChatInput`: auto-growing multiline input with Enter-to-send behavior and a send action.

## Following Release: Feedback And Layout

Add composed UI only after the form primitives share a stable field contract.

- `Alert`: neutral, success, warning, and danger messages with optional dismiss action.
- `Card`: a restrained content surface for settings and grouped information.
- `Divider`: semantic visual separation with horizontal and vertical orientations.
- `Spinner`: an accessible loading indicator for asynchronous content.

## Later: Chat Composition

- `MessageList`: scrollable conversation container with auto-scroll and date grouping.
- `CodeBlock`: syntax-highlighted code with a copy action.
- `MessageActions`: copy, regenerate, and feedback controls for assistant replies.
- `SuggestionChips`: quick-reply prompts above the chat input.

## Later: Overlays And Navigation

These components need focus management, escape handling, and portal behavior, so they should follow dedicated accessibility tests.

- `Dialog`
- `Popover`
- `Tooltip`
- `Tabs`
- `Menu`

## Component Standard

Every public component should include TypeScript props, ref forwarding where a native element is exposed, CSS Module styles, Storybook states, keyboard and accessibility tests, and a stable root export.
