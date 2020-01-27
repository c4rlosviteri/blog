---
title: Alertas accessibles
date: '2020-01-27T10:00:00.000Z'
description: 'Crea un componente de alerta para proveer mensajes de feedback para acciones de usuarios'
---

Las alertas son un patron muy común para proveer mensajes de feedback para acciones de usuario como error, alerta o informacion. ¿Sabes como crear una alerta verdaderamente accesible? En este tutorial vamos a aprender como crear una.

Existen dos formas de crear alertas que cumplan los estándares de WAI-ARIA. Veremos ambas.

La forma más fácil y recomendada es añadir un `aria-role="alert"`. Este `role` es usado para **comunicar un mensaje importante al usuario**.

```html
<div role="alert">
  <p>Alerta de ejemplo: Contenido de la alerta</p>
</div>
```

Por otra parte, podemos crear una alert añadiendo dos atributos `aria`:

* `aria-live="assertive"` **cualquier cambios de texto dentro de los nodos hijos de este atributo interrumpirá el proceso actual en las tecnologías de asistencia para notificar inmediatamente al usuario sobre este cambio**.
* `aria-atomic="true"` este atributo le dice a las tecnologías de asistencia que **lean el contenido entero de la alerta a pesar de que solamente una porción de este haya cambiado**.

```html
<div aria-atomic="true" aria-live="assertive">
  <p>Alerta de ejemplo: Contenido de la alerta</p>
</div>
```

A veces vas a querer que el usuario cierre la alerta. Para hacerlo tienes que añadir un botón de cierre etiquetado usando un `aria-label`, _solamente si el text interno del botón no es lo suficientemente descriptivo_.

```html
<div role="alert">
  <button aria-label="Cerrar alerta">×</button>
  <p>Alerta de ejemplo: Contenido de la alerta</p>
</div>
```
