# @ptdx/modal

**@ptdx/modal** est un composant modal accessible, personnalisable et facile à intégrer dans vos projets React. Il utilise les portails React pour un rendu indépendant de l'arborescence DOM et respecte les bonnes pratiques d'accessibilité.  
![Default Modal](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-all.png)

![npm version](https://img.shields.io/npm/v/@ptdx/modal)
![license](https://img.shields.io/npm/l/@ptdx/modal)
![bundle size](https://img.shields.io/bundlephobia/minzip/@ptdx/modal)

Testez ici : [https://ptdx-modal.vercel.app](https://ptdx-modal.vercel.app/)  
[npm i @ptdx/modal](https://www.npmjs.com/package/@ptdx/modal)  
[GitHub](https://github.com/PierreTDX/tdx-modal)  
ReadMe [En version](https://github.com/PierreTDX/ptdx-modal/blob/main/README.md)

## ✨ Fonctionnalités

- ✅ Accessibilité (WAI-ARIA, focus trap, fermeture via `Escape`)
- ✅ Support du clavier et clic en dehors de la modal
- ✅ Design minimaliste, facilement personnalisable
- ✅ Rendu via `ReactDOM.createPortal`
- ✅ Pas de dépendances externes

---

## 🚀 Installation

```bash
npm install @ptdx/modal
```

---

## 🔧 Utilisation

```jsx
import React, { useState } from 'react';
import { Modal } from '@ptdx/modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    // action à confirmer
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        title="Titre de la modale"
        content="Texte personalisé du contenu de la modale"
      />
    </>
  );
};

export default App;
```

---

## 🧩 Props

| Nom           | Type                 | Requis  | Description                                                                |
|---------------|----------------------|---------|----------------------------------------------------------------------------|
| `isOpen`      | `boolean`            | ✅     | Contrôle l'affichage de la modal                                            |
| `onClose`     | `function`           | ✅     | Fonction appelée lors de la fermeture                                       |
| `onConfirm`   | `function`           | ❌     | Fonction appelée lors de la confirmation                                    |
| `title`       | `string \| ReactNode`| ❌     | Titre de la modal, accepte texte ou JSX                                     |
| `content`     | `string \| ReactNode`| ❌     | Contenu du texte de la modal, accepte texte ou JSX                          |
| `confirmText` | `string`             | ❌     | Texte du bouton de confirmation **default**= 'OK'                           |
| `cancelText`  | `string`             | ❌     | Texte du bouton de d'annulation **default**= 'Cancel'                       |
| `btnClose`    | `boolean`            | ❌     | Affichage de la croix de fermeture **default**= {true}                      |
| `showFooter`  | `boolean`            | ❌     | Affichage des boutons d'action **default**= {true}                          |
| `variant`     | `string`             | ❌     | Couleur de la modal **default**= 'default' / options = 'success' or 'error' |
| `timeToClose` | `number`             | ❌     | Temps de fermeture de la modal en ms **default**= {null}                    |
| `width`       | `string`             | ❌     | Largeur de la modal **default**= '400px'                                    |
| `className`   | `string`             | ❌     | Nom de votre class personnalisée **default**= 'modal-wrapper'               |

---

## 🎨 Personnalisation

Le composant utilise des classes CSS de base. Vous pouvez surcharger les styles via votre feuille de style globale.
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

## 📦 Développement local

```bash
git clone https://github.com/PierreTDX/ptdx-modal.git
cd ptdx-modal
npm install
npm run dev
```

---

## 🛠 Technologies

- React
- Portails (`ReactDOM.createPortal`)
- Vite (environnement de développement)
- Sass (environnement de développement)
---  

## 📄 Licence

MIT – © [PierreTDX](https://github.com/PierreTDX)

---

## 🚨 Issues

Si vous trouvez un bug ou souhaitez suggérer une amélioration, n'hésitez pas à [ouvrir une issue](https://github.com/PierreTDX/ptdx-modal/issues).

---

# Differentes Modals
## Modal par défaut
![Default Modal](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-all.png)
## Modal sans le footer
![Default Modal without footer](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooter.png)
## Modal sans le footer, ni bouton de fermeture
![Default Modal without footer and button close](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnClose.png)
## Modal sans le footer, ni bouton de fermeture, ni titre
![Default Modal without footer and button close and title](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnCloseAndTitle.png)
## Modal avec le variant success
![Default Modal variant success](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnCloseAndTitle-Succes.png)
## Modal avec le variant error
![Default Modal variant error](https://raw.githubusercontent.com/PierreTDX/ptdx-modal/main/public/img/modal-withoutFooterAndBtnCloseAndTitle-Error.png)

