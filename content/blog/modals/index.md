---
title: 'Accessible components: Modals'
date: '2020-03-02T10:00:00.000Z'
description: "This time we will build an accessible confirmation modal to confirm or discard an action."
---

![Accessible components: Modals](./modal.png)

Modal popups are frequently used on the web. Especially to confirm actions, display ads, handle forms, etc.

However, are you building accessible modals? Can you open and close them by using the keyboard only? Are they understandable for assistive technologies?

If not, no worries, let's build one from scratch.

### HTML

```html
<button class="button">Delete item?</button>

<div aria-hidden="true" class="modal">
  <div class="modal__backdrop" tabindex="-1">
    <div aria-labelledby="modal-title" aria-modal="true" class="modal__container" role="dialog">
      <header class="modal__header">
        <h2 id="modal-title">Confirm?</h2>
        <button aria-label="Close modal">×</button>
      </header>
      <div class="modal__content">
        <p>This is the description of an accessible modal</p>
      </div>
      <footer class="modal__footer">
        <button>Yes</button>
        <button aria-label="Close modal">No</button>
      </footer>
    </div>
  </div>
</div>
```

In the snippet above, basically we have two nodes: **the trigger button** and **the modal**.

`aria` and `role` attributes explanation:

`aria-hidden="true"` this attribute **removes its content from the accessibility tree**. We must toggle this attribute to `"false"` once we open the modal.

`aria-labelledby="id"` will tell assistive technologies that **content of the id, in this case the heading level 2, is what describes the dialog**.

`aria-modal="true"` informs assistive technologies that **content outside that element is inert**.

`role="dialog"` **helps assistive technology identify the dialog's content as being grouped and separated from the rest of the page content**. However, _this attribute alone is not enough, it must be properly labeled and must manage the keyboard focus correctly_.

`aria-label` **is used to define a string that labels the current element**. In the buttons above _we are using this attribute to explain better their purposes, it is necessary only when the text inside the button is not explanatory enough_.

The first button has no `aria` attribute because the text inside is sufficient to explain the purpose of the button.

### CSS

```css
.modal[aria-hidden="true"] {
  display: none;
}

.modal__backdrop {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.modal__container {
  background-color: white;
  max-height: 100vh;
  max-width: 400px;
  overflow-y: auto;
  padding: 20px;
}

.modal__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
```

First of all, we are hiding the modal if it has the attribute `aria-hidden="true"`. Then we are creating a backdrop to set up enough contrast between the modal and the rest of the page. And finally we are preventing the vertical content to get hide of the viewport by adding a Y axis scroll if the content is higher than `100vh`.

### JavaScript

```js
const focusableElements = [
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])',
    'a[href]',
    'area[href]',
    'button:not([disabled]):not([aria-hidden])',
    'embed',
    'iframe',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'object',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])'
  ];

const modal = document.querySelector('.modal');
const openButton = document.querySelector('.button');
const closeButtons = document.querySelectorAll('.modal__close-button');

document.addEventListener('keydown', handleKeydown);
openButton.addEventListener('click', openModal);
closeButtons.forEach(button =>
	button.addEventListener('click', closeModal)
);

function handleKeydown(e) {
  const esc = 27;

  if (e.keyCode === esc) {
    closeModal();
  }
}

function openModal() {
  const focusableModalElements = modal.querySelectorAll(focusableElements);

  modal.setAttribute('aria-hidden', 'false');

  if (focusableModalElements.length) {
   focusableModalElements[0].focus();
  }
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
}
```

In the JavaScript part we will toggle the `aria-hidden` attribute depending on what we want to do. When opening the modal we must focus the first focusable element within the modal. And obviously we should support the `esc` key to close the modal.

Working example:

<iframe
  src="https://codesandbox.io/embed/distracted-williams-b97jf?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="accessible-modal"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
