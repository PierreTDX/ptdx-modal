# @ptdx/modal

**@ptdx/modal** is an accessible, customizable, and easy-to-integrate modal component for React projects. It uses React portals for rendering outside the DOM tree and follows best accessibility practices.  
![Default Modal](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-all.png)

![npm version](https://img.shields.io/npm/v/@ptdx/modal)
![license](https://img.shields.io/npm/l/@ptdx/modal)
![bundle size](https://img.shields.io/bundlephobia/minzip/@ptdx/modal)

Try it here: [https://ptdx-modal.vercel.app](https://ptdx-modal.vercel.app/)  
[npm i @ptdx/modal](https://www.npmjs.com/package/@ptdx/modal)  
[GitHub](https://github.com/PierreTDX/tdx-modal)  
ReadMe [Fr version](https://github.com/PierreTDX/ptdx-modal/blob/main/README.fr.md)

## ✨ Features

- ✅ Accessibility (WAI-ARIA, focus trap, close on `Escape`)
- ✅ Keyboard support and outside click detection
- ✅ Minimalist design, easy to customize
- ✅ Renders with `ReactDOM.createPortal`

---

## 🚀 Installation

```bash
npm install @ptdx/modal
```

---

## 🔧 Usage

```jsx
import React, { useState } from 'react';
import { Modal } from '@ptdx/modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    // action to confirm
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        title="Modal Title"
        content="Custom content text"
      />
    </>
  );
};

export default App;
```

---

## 🧩 Props

| Name          | Type                  | Required | Description                                                                |
|---------------|-----------------------|----------|----------------------------------------------------------------------------|
| `isOpen`      | `boolean`             | ✅       | Controls modal visibility                                                  |
| `onClose`     | `function`            | ✅       | Called when modal is closed                                                |
| `onConfirm`   | `function`            | ❌       | Called when confirmation button is clicked                                 |
| `title`       | `string \| ReactNode` | ❌       | Modal title, accepts a string or JSX                                       |
| `content`     | `string \| ReactNode` | ❌       | Modal content, accepts a string or JSX                                     |
| `confirmText` | `string`              | ❌       | Confirmation button text **default** = 'OK'                                |
| `cancelText`  | `string`              | ❌       | Cancel button text **default** = 'Cancel'                                  |
| `btnClose`    | `boolean`             | ❌       | Show close (X) button **default** = `true`                                 |
| `showFooter`  | `boolean`             | ❌       | Show footer with action buttons **default** = `true`                       |
| `variant`     | `string`              | ❌       | Modal color theme **default** = 'default' / options: 'success' or 'error'  |
| `timeToClose` | `number`              | ❌       | Auto-close delay in milliseconds **default** = `null`                      |
| `width`       | `string`              | ❌       | Modal width **default** = '400px'                                          |
| `className`   | `string`              | ❌       | Custom class name **default** = 'modal-wrapper'                            |

---

## 🎨 Customization

The component uses base CSS classes. You can override them using your global stylesheet:

```css
.your-custom-className {
    .modal-overlay {/*your css*/}
    .modal-container {/*your css*/}
    .modal-container-success {/*your css*/}
    .modal-container-error {/*your css*/}
    .modal-title {/*your css*/}
    .modal-content {/*your css*/}
    .modal-close {/*your css*/}
    .modal-footer {/*your css*/}
    .modal-border {
        --border-radius: Xpx;
        --border-width: Xpx;
        /*your css*/
    }
    .modal-btn {/*your css*/}
    .modal-btn-confirm {/*your css*/}
    .modal-btn-cancel {/*your css*/}
    .modal-btn:focus-visible,
    .modal-close:focus-visible {/*your css*/}
    .modal-forceFocusVisible {/*your css*/}
}
```

---

## 📦 Local Development

```bash
git clone https://github.com/PierreTDX/ptdx-modal.git
cd ptdx-modal
npm install
```
and to test the demo
```bash
cd demo
npm install
npm run dev
```

---

## 🛠 Tech Stack

- React
- Portals (`ReactDOM.createPortal`)
- Vite (development environment)
- Sass (development environment)

---

## 📄 License

MIT – © [PierreTDX](https://github.com/PierreTDX)

---

## 🚨 Issues

Found a bug or have a suggestion? Feel free to [open an issue](https://github.com/PierreTDX/ptdx-modal/issues).

---

# Modal Variants

## Default Modal
![Default Modal](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-all.png)

## Modal without footer
![Without Footer](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooter.png)

## Modal without footer and close button
![No Footer No Close](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnClose.png)

## Modal without footer, close button, and title
![No Footer, Close, or Title](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnCloseAndTitle.png)

## Modal with success variant
![Success Variant](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnCloseAndTitle-Succes.png)

## Modal with error variant
![Error Variant](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnCloseAndTitle-Error.png)