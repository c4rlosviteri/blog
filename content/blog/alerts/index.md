---
title: Accessible alerts
date: '2020-01-27T10:00:00.000Z'
description: 'Create an alert component to provide feedback messages for user actions.'
---

Alerts are a very common pattern to provide feedback messages for user actions such as error, warning or information. Do you know how to create a truly accessible alert? In this tutorial, we will learn how to create one.

There are two ways of creating WAI-ARIA compliant alerts. We will take a look at both.

The _easiest_ and _recommended_ one is to add an `aria-role="alert"`. This `role` is used to **communicate an important message to the user**.

```html
<div role="alert">
  <p>Alert example: Here should be the alert content</p>
</div>
```

On the other hand, we can create an alert by adding two `aria` attributes:

* `aria-live="assertive"` **whatever text change in the children nodes of this attribute will interrupt the current process in the assistive technologies to notify immediately this change to the user**.
* `aria-atomic="true"` this attribute tells the assistive technologies to **read the entire content of the alert event if just a portion of it has changed**.

```html
<div aria-atomic="true" aria-live="assertive">
  <p>Alert example: Here should be the alert content</p>
</div>
```

Sometimes you will want the user to close the alert. To do it, you have to add a close labeled button by using an `aria-label`, _only if the text inside the button is not descriptive enough_.

```html
<div role="alert">
  <button aria-label="Close alert">×</button>
  <p>Alert example: Here should be the alert content</p>
</div>
```
