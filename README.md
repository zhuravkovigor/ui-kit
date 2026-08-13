# @zhuravkovigor/ui-kit

Accessible React form controls with a quiet, neutral visual language.

## Install

```bash
npm install @zhuravkovigor/ui-kit
```

`react` and `react-dom` are peer dependencies. The package supports React 18 and newer.

## Use

Import the components and the stylesheet once in your application entry point.

```tsx
import { Button, Input, Textarea } from "@zhuravkovigor/ui-kit";
import "@zhuravkovigor/ui-kit/styles.css";

export function ContactForm() {
  return (
    <form>
      <Input
        label="Email"
        name="email"
        type="email"
        hint="We only use this to reply."
        required
      />
      <Textarea label="Message" name="message" rows={5} />
      <Button type="submit">Send message</Button>
    </form>
  );
}
```

## Components

- `Button`: `variant` (`primary`, `secondary`, `ghost`), `size` (`small`, `medium`, `large`), `fullWidth`, `loading`, and native button props.
- `Input`: `label`, `hint`, `error`, `controlSize` (`small`, `medium`, `large`), and native input props.
- `Textarea`: `label`, `hint`, `error`, and native textarea props.

All controls forward refs and preserve native form behavior. Labels, hints, and errors are connected to their controls with accessible attributes.

## Development

```bash
npm install
npm run typecheck
npm test
npm run build
```

## Component Catalog

Browse every component, state, and prop control locally with Storybook:

```bash
npm run storybook
```

The catalog is available at `http://localhost:6006`. Generate a static version with `npm run build-storybook`.

Before publishing, inspect the package contents:

```bash
npm pack --dry-run
```

## License

[MIT](LICENSE)
